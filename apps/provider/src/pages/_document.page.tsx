import crypto from "crypto";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";

const cspHashOf = (text: string) => {
  const hash = crypto.createHash("sha256");
  hash.update(text);

  return `'sha256-${hash.digest("base64")}'`;
};

class Document extends NextDocument {
  render() {
    let csp = `default-src 'self'; script-src 'self' ${cspHashOf(
      NextScript.getInlineScriptSource(this.props)
    )}`;

    if (process.env.NODE_ENV !== "production") {
      csp = `style-src 'self' 'unsafe-inline'; font-src 'self' data:; default-src 'self'; script-src 'unsafe-eval' 'self' ${cspHashOf(
        NextScript.getInlineScriptSource(this.props)
      )}`;
    }

    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Security-Policy" content={csp} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
