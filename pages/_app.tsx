import '../styles/globals.css';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

// import Font Awesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Provider } from 'react-redux';
import store from '../store';
import Head from 'next/head';
import { NextPage } from 'next';

// import swiper css
import 'swiper/css';
import { appWithTranslation } from 'next-i18next';
import useYupErrorLocalizations from '../hooks/useYupErrorLocalization';
import { AnimatePresence } from 'framer-motion';

// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
   // eslint-disable-next-line no-unused-vars
   getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
   Component: NextPageWithLayout;
};

// 1. set-up i18next-react language translations and language chaning

// 2. set-up strings for the errors

// 3. set-up/update translated errors for yup using setLocale, on load and on language changed

function App({ Component, pageProps }: AppPropsWithLayout) {
   // Use the layout defined at the page level, if available
   const getLayout = Component.getLayout ?? ((page: any) => page);
   const component = getLayout(<Component {...pageProps} />);

   useYupErrorLocalizations();

   return (
      <Provider store={store}>
         <Head>
            <meta
               name='viewport'
               content='width=device-width, initial-scale=1.0'
            />
         </Head>
         <AnimatePresence mode='wait'>
            {component}
         </AnimatePresence>
         <div id='modal'></div>
      </Provider>
   );
}

export default appWithTranslation(App);
