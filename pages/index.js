import Head from 'next/head'
import Layout from "components/layout";
import Header from "components/header"
import Homepage from "views/pages/homepage";
import { getOrders } from 'services/channel-engine'

export default function Home({ orders }) {
  return (
    <div >
      <Head>
        <title>ChannelEngine x Daniel Vercouteren</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Layout>
        <Homepage orders={orders} />
      </Layout>
    </div>
  )
}

Home.getInitialProps = async () => {
  const orders = await getOrders()

  return {
    orders: orders
  }
}
