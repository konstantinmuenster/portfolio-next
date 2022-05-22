import type { Node, Element } from 'hast-util-to-html/lib/types';
import type { ElementContent } from 'hast';
import { toHtml } from 'hast-util-to-html';
import { unified } from 'unified';
import parse from 'rehype-parse';

type NodeWithLine = Node & { line: number };

const addLinesToNodes = (ast: (Node | Element)[], lineNumber = 1) => {
  let line = lineNumber;

  return ast.reduce(
    (result, node) => {
      if (node.type === 'text') {
        if (node.value.indexOf('\n') === -1) {
          result.nodes.push({ ...node, line });
          return result;
        }

        const lines = node.value.split('\n');
        for (let i = 0; i < lines.length; i++) {
          if (i !== 0) ++line;
          if (i === lines.length - 1 && lines[i].length === 0) continue;

          result.nodes.push({
            type: 'text',
            value: i === lines.length - 1 ? lines[i] : `${lines[i]}\n`,
            line,
          });
        }

        result.line = line;
        return result;
      }

      if (node.type === 'element' && node.children) {
        const processed = addLinesToNodes(node.children, line);
        node.children = processed.nodes as unknown as ElementContent[];
        result.line = processed.line;
        result.nodes.push({ ...node, line });
        return result;
      }

      result.nodes.push({ ...node, line });
      return result;
    },
    { nodes: [] as NodeWithLine[], line }
  );
};

const wrapLines = (
  ast: NodeWithLine[],
  linesToHighlight: number[]
): NodeWithLine[] => {
  const highlightAll =
    linesToHighlight.length === 1 && linesToHighlight[0] === 0;

  const allLines = Array.from(new Set(ast.map(x => x.line)));

  let i = 0;

  const wrapped = allLines.reduce((nodes, marker) => {
    const line = marker;
    const children = [];

    for (; i < ast.length; i++) {
      if (ast[i].line < line) {
        nodes.push(ast[i]);
        continue;
      }

      if (ast[i].line === line) {
        children.push(ast[i]);
        continue;
      }

      if (ast[i].line > line) break;
    }

    nodes.push({
      type: 'element',
      tagName: 'div',
      children: children as ElementContent[],
      line: line,
      properties: {
        dataLine: line,
        className: 'highlight-line',
        dataHighlighted:
          linesToHighlight.includes(line) || highlightAll ? 'true' : 'false',
      },
    });

    return nodes;
  }, [] as NodeWithLine[]);

  return wrapped;
};

const MULTILINE_TOKEN_SPAN =
  /<span class="token ([^"]+)">[^<]*\n[^<]*<\/span>/g;

const applyMultilineFix = (ast: Node) => {
  let html = toHtml(ast);

  // Fix JSX issue
  html = html.replace(MULTILINE_TOKEN_SPAN, (match, token) =>
    match.replace(/\n/g, `</span>\n<span class="token ${token}">`)
  );

  return unified()
    .use(parse, { emitParseErrors: true, fragment: true })
    .parse(html).children;
};

export const highlightLine = (ast: Node, lines: number[]) => {
  const formattedAst = applyMultilineFix(ast);
  const numbered = addLinesToNodes(formattedAst).nodes;
  return wrapLines(numbered, lines) as unknown as Element;
};
