import '../styles/globals.css';
import { NextQueryParamProvider } from 'next-query-params';

/**
 *
 * @param  root0
 * @param  root0.Component
 * @param  root0.pageProps
 */
function MyApp({ Component, pageProps }) {
  return (
    <NextQueryParamProvider>
      <Component {...pageProps} />
    </NextQueryParamProvider>
  );
}

export default MyApp;
