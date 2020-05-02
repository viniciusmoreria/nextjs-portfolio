import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

import '../styles/global.css';
import 'react-multi-carousel/lib/styles.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
