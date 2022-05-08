import Head from 'next/head';
import Link from 'next/link';

export default function PageHead() {
    return (
      <Head>
          <link
            rel="preload"
            href="/fonts/Poppins/Poppins-Regular.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
    )
}