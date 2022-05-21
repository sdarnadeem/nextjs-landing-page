import Document, { Html, Head, Main, NextScript } from "next/document";
import favicon from "../assets/artosyxfavicon.png";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <title>Artosyx</title>
          <link rel="icon" type="image/png" href={favicon} sizes="16x16"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
