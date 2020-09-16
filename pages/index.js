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

export async function getStaticProps() {
  const {orders, totalCount} = await getOrders()

  return {
    props: {
      orders: orders,
      totalCount: totalCount
    }
  }
}
