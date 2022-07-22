import chromium from 'chrome-aws-lambda';
import qs from 'query-string';

import { OGImageType } from '@components/OGImage';
import { getBaseUrl } from '@utils/getBaseUrl';

export type GenerateOGImageQuery = {
  for: OGImageType;
  title?: string;
  category?: string;
  type?: string;
};

export const generateOGImage = async (query: GenerateOGImageQuery) => {
  try {
    const templateUrl = `${getBaseUrl()}/og-image/view`;

    const browser = await chromium.puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: true,
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });

    await page.goto(`${templateUrl}?${qs.stringify(query)}`, {
      waitUntil: 'networkidle2',
    });

    const base64 = await page.screenshot({ type: 'png', encoding: 'base64' });
    console.log(base64);
    await browser.close();

    return base64;
  } catch (e) {
    return undefined;
  }
};
