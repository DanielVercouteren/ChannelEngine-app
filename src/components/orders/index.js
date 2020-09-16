import React from 'react'
import Order from 'components/order'

export default function Orders({ orders }) {
  return (
    <div className="orders">
      {orders && orders.map(order => <Order {...order} />)}
    </div>
  )
}
