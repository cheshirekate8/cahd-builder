import localFont from 'next/font/local';
import type { AppProps } from 'next/app'
 
const hn = localFont({ src: '../public/fonts/HelveticaNeue.otf' });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={hn.className}>
      <Component {...pageProps} />
    </main>
  );
}
