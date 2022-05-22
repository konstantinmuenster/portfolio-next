import type { Element } from 'hast-util-to-html/lib/types';
import { toHtml } from 'hast-util-to-html';
import { unified } from 'unified';
import parse from 'rehype-parse';

const CALLOUT = /__(.*?)__/g;

export const highlightWord = (code: Element) => {
  const result = toHtml(code).replace(
    CALLOUT,
    (_, text) => `<span class="highlight-word">${text}</span>`
  );

  return unified()
    .use(parse, { emitParseErrors: true, fragment: true })
    .parse(result) as unknown as Element;
};
