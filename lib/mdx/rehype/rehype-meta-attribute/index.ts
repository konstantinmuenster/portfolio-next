import type { RefractorElement, RefractorRoot } from 'refractor';
import { visit } from 'unist-util-visit';

const re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g;

export const rehypeMetaAttribute = () => {
  return (tree: RefractorRoot) => {
    visit(tree, 'element', (node, _, parentNode) => {
      let match;

      if (node.tagName === 'code' && node.data?.meta) {
        re.lastIndex = 0; // Reset regex.

        while ((match = re.exec(node.data.meta as string))) {
          if (node.properties)
            node.properties[match[1]] = match[2] || match[3] || match[4] || '';

          const castedParentNode = parentNode as RefractorElement;
          if (castedParentNode.properties)
            castedParentNode.properties[match[1]] =
              match[2] || match[3] || match[4] || '';
        }
      }
    });
  };
};
