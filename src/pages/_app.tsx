import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { appWithTranslation } from 'next-i18next';

import GlobalStyles from 'src/utils/globalStyle';
import SEO from '../../next-seo.config.js';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <DefaultSeo {...SEO} />
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default appWithTranslation(MyApp);
