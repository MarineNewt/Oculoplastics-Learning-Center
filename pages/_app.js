import '../styles/globals.css';
import Script from "next/script";

export default function App({ Component, pageProps }) {
    return <><Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4486350007861679"
    crossorigin="anonymous"></Script><Component {...pageProps} /></>;
  }