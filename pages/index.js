import Head from 'next/head';
import { Portfolio } from '../Components/Portfolio';
import styles from '../styles/Portfolio.module.scss'
export default function Home() {
  return (
    <>
      <Head>
        <title>Dhanasekar Portfolio</title>
        <link rel="icon" href="/logo.png" type="image/icon type"/>
      </Head>
    <Portfolio/>
    </>
  )
}
