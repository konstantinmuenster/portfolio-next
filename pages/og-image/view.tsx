import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { isValidGenerateOGImageQuery } from '@utils/router/isValidQuery';
import { OGImage } from '@components/OGImage';

const OGImageTemplatePage: NextPage = () => {
  const router = useRouter();

  if (!isValidGenerateOGImageQuery(router.query)) return <></>;

  return <OGImage {...router.query} />;
};

OGImageTemplatePage.defaultProps = { renderWithoutLayout: true };

export default OGImageTemplatePage;
