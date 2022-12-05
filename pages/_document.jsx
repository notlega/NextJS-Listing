import { Html, Head, Main, NextScript } from 'next/document';
import Navbar from '../components/Navbar';

const Document = () => (
  <Html>
    <Head />
    <body className="bg-base-100 mx-6">
      <Navbar />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
