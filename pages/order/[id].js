import Head from 'next/head'
import Layout from "components/layout";
import Header from "components/header"
import { getOrderById } from 'services/channel-engine'

export default function Order({ order }) {
  return (
    <div >
      <Head>
        <title>xxx</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Layout>

      </Layout>
    </div>
  )
}

Order.getInitialProps = async ({ query }) => {
  const order = await getOrderById(query.id)

  return {
    order: order
  }
}
