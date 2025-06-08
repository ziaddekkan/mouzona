import "../styles/global.css"
import Layout from "../../component/layout";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return<>
          <Head>
            <title>Mouzona</title>
            <link rel="icon" href="/logo.png" type="image/png"></link>
          </Head>
          <Layout>
           <Component {...pageProps} />;
          </Layout>
          </> 
}
