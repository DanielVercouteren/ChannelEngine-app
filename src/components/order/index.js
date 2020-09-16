import React from 'react'
import OrderStatus from "components/order-status";

export default function Order(order) {
  return (
    <div className="order">
      <p className="order__name">{order.name}</p>
      <OrderStatus status={order.status} />
    </div>
  )
}
