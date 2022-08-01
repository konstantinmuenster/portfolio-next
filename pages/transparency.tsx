import type { NextPage } from 'next';

import { LegalContentWrapper } from '@components/Layout';
import { getBaseUrl } from '@utils/getBaseUrl';
import { Link } from '@components/Link';

const TransparencyPage: NextPage = () => {
  return (
    <LegalContentWrapper>
      <h1>Transparency</h1>
      <p>
        Your privacy is important to me. It is my policy to respect your privacy
        regarding any information I may collect from you across my website,{' '}
        {getBaseUrl({ omitProtocol: true })}.
      </p>
      <p>
        I only ask for personal information when I truly need it to provide a
        service to you. I collect it by fair and lawful means, with your
        knowledge and consent. I also let you know why I am collecting it and
        how it will be used.
      </p>
      <p>
        What data I store, I&apos;ll protect within commercially acceptable
        means to prevent loss and theft, as well as unauthorised access,
        disclosure, copying, use or modification. I don&apos;t share any
        personally identifying information publicly or with third-parties,
        except when required to by law.
      </p>
      <p>
        I use <Link to="https://plausible.io/">plausible.io</Link> - a
        privacy-friendly and cookie-less analytics solution - for tracking. All
        the site measurement is carried out absolutely anonymously. Cookies are
        not set and no personal data is collected. This helps me aggregating
        some useful data for improving the site while remaining your privacy.
      </p>
      <p>
        My website may link to external sites that are not operated by me.
        Please be aware that I have no control over the content and practices of
        these sites, and cannot accept responsibility or liability for their
        respective privacy policies.
      </p>
      <p>
        You are free to refuse my request for your personal information, with
        the understanding that I may be unable to provide you with some of your
        desired services.
      </p>
      <p>
        Your continued use of my website will be regarded as acceptance of my
        practices around privacy and personal information. If you have any
        questions about how I handle user data and personal information, feel
        free to contact me. This policy is effective as of 22 September 2019. It
        has been generated with the help of GetTerms.io
      </p>
    </LegalContentWrapper>
  );
};

export default TransparencyPage;
