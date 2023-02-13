
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css';
// global css
import '../styles/globals.css'
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
