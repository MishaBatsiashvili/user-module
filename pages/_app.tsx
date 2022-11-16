import '../styles/globals.css';
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

// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;

/*
login, register - fb, google, mail, internet bank

profile data:
   number,
   addresses,
   misamartebi daematos rukaze da aseve xelit chawera da rukaze modzebna
   baratis mibma
   order history

page:
   profile
      number,
      username
      gadasasvlelebi sxva gverdebze
   misamartebi
      naxva
      damateba/washala/shecvla
   order history
   cards


take wolt as reference
*/

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
   // eslint-disable-next-line no-unused-vars
   getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
   Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
   // Use the layout defined at the page level, if available
   const getLayout = Component.getLayout ?? ((page: any) => page);
   const component = getLayout(<Component {...pageProps} />);

   return (
      <Provider store={store}>
         <Head>
            <meta
               name='viewport'
               content='width=device-width, initial-scale=1.0'
            />
         </Head>
         {component}
      </Provider>
   );
}

export default MyApp;
