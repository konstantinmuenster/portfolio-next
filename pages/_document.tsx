import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { getCssText } from '@config/stitches.config';
import { Favicon } from '@components/Favicon';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Favicon />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <script
            defer
            data-domain="konstantin.digital"
            src="https://plausible.io/js/plausible.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
