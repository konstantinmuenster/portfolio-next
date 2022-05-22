import type { Element } from 'hast-util-to-html/lib/types';
import rangeParser from 'parse-numeric-range';
import { visit } from 'unist-util-visit';
import { toString } from 'hast-util-to-string';
import { refractor } from 'refractor';
import TsxLang from 'refractor/lang/tsx';
import JsxLang from 'refractor/lang/jsx';

import { highlightLine } from './utils/highlight-line';
import { highlightWord } from './utils/highlight-word';

const additionalSyntax = [TsxLang, JsxLang];

export const rehypeCodeHighlight = () => {
  additionalSyntax.forEach(syntax => refractor.register(syntax));

  return (tree: Element) => {
    visit(tree, 'element', (node, _, parentNode) => {
      if (parentNode?.tagName === 'pre' && node.tagName === 'code') {
        const lang = Array.isArray(node.properties?.className)
          ? node.properties?.className[0].toString().split('-')[1]
          : 'md';

        let result = refractor.highlight(
          toString(node),
          lang ?? 'md'
        ) as unknown as Element;

        const linesToHighlight = node.properties?.lines as string;
        result = highlightLine(result, rangeParser(linesToHighlight || '0'));

        result = highlightWord(result);

        node.children = result.children;
      }
    });
  };
};

export { Pre } from './components/Pre';
