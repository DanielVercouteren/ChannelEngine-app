import Head from 'next/head'
import Layout from "components/layout";
import Header from "components/header"
import ItemTable from "components/item-table";
import ItemBlock from "components/item-block";
import InfoBlock from "components/info-block";
import { getOrderById } from 'services/channel-engine'

export default function Order({ order }) {
  return (
    <div>
      <Head>
        <title>{order.channelOrderNo ? order.channelOrderNo : 'Your Order'}</title>
      </Head>
      <Header />
      <Layout>
        <div className="row">
          <div className="col-sm-12 col-md-10 offset-md-1">
            <h1>Order {order.channelOrderNo}</h1>
            <ItemBlock order={order} />
            <ItemTable order={order} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-10 offset-md-1">
            <div className="row">
              <div className="col-sm-12">
                Order details
              </div>
              <div className="col-sm-12">
                <InfoBlock title="Order date">
                  {order.orderDate}
                </InfoBlock>
              </div>
              <div className="col-sm-6 col-md-4">
                <InfoBlock title="Shipping address">
                  {order.shippingAddress.firstName} {order.shippingAddress.lastName} <br />
                  {order.shippingAddress.streetName} {order.shippingAddress.houseNumber}{order.shippingAddress.addition} <br />
                  {order.shippingAddress.zipCode} {order.shippingAddress.city}
                </InfoBlock>
              </div>
              <div className="col-sm-6 col-md-4">
                <InfoBlock title="Billing address">
                  {order.billingAddress.firstName} {order.billingAddress.lastName} <br />
                  {order.billingAddress.streetName} {order.billingAddress.houseNumber}{order.billingAddress.addition} <br />
                  {order.billingAddress.zipCode} {order.billingAddress.city}
                </InfoBlock>
              </div>
              <div className="col-sm-12 col-md-4">
                <InfoBlock title="Contact details">
                  E: <a href={`mailto:${order.emailAddress}`}>{order.emailAddress}</a><br />
                  T: <a href={`tel:${order.phoneNumber}`}>{order.phoneNumber}</a>
                </InfoBlock>
              </div>
              <div className="col-sm-12">
                <InfoBlock title="Cost overview">
                  Amount of articles ({order.items.length}): {order.subtotalInclVat} <br />
                  Shipping costs: {order.shippingCostsInclVat ? order.shippingCostsInclVat : '€0.00'} <br />
                  <br />
                  Total: {order.totalInclVat}
                </InfoBlock>
              </div>
              <div className="col-sm-12 col-md-3">
                <InfoBlock title="Payment method">
                  {order.paymentMethod}
                </InfoBlock>
              </div>
              {order.extraData && (
                <div className="col-sm-12">
                  <InfoBlock title={Object.keys(order.extraData)}>
                    {Object.values(order.extraData)}
                  </InfoBlock>
                </div>
              )}
            </div>
          </div>
        </div>
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
