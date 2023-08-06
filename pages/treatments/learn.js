import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function Learn() {
  return (
    <Layout name="Learn" current="Treatments">
      <Head>
        <title>Conditions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Treatments</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}