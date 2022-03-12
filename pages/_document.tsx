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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
