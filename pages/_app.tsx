import '../styles/globals.css';
import type { AppProps } from 'next/app';

// import Font Awesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Provider } from 'react-redux';
import store from '../store';
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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
