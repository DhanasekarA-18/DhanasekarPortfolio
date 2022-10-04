import Head from 'next/head';
import { Portfolio } from '../Components/Portfolio';
export default function Home() {
  return (
    <>
      <Head>
        <title>Dhanasekar Portfolio</title>
        <meta name="description" content="This portfolio was created by Dhanasekar"></meta>
        <link rel="icon" href="/logo.png" type="image/icon type"/>
      </Head>
    <Portfolio/>
    </>
  )
}
