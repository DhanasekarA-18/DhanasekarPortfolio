import Head from 'next/head';
import { Portfolio } from '../Components/Portfolio';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <Head>
        <title>Dhanasekar Portfolio</title>
        <meta name="description" content="This portfolio was created by Dhanasekar"></meta>
        <link rel="icon" href="/logo.png" type="image/icon type"/>
      </Head>
    <Portfolio/>
    <Link href={"/about"}>
     <a>Go to about page</a> 
    </Link>
    </>
  )
}
