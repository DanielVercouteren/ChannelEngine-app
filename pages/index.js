import Head from 'next/head'
import Homepage from "views/pages/homepage";

export default function Home() {
  return (
    <div >
      <Head>
        <title>ChannelEngine x Daniel Vercouteren</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
    </div>
  )
}
