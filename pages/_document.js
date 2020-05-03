import Document, { Html } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <Html lang='pt-BR'>
            {initialProps.styles}
            <link rel='shortcut icon' href='/favicon.ico' />
            <link
              href='https://fonts.googleapis.com/css?family=Indie+Flower|Inter:400,700&display=optional'
              rel='stylesheet'
            />
            {sheet.getStyleElement()}
          </Html>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
