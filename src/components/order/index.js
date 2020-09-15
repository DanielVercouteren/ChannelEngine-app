import React from 'react'

export default function Order(order) {
  return (
    <div className="order">
      <p className="order__name">{order.name}</p>
      <span className="order__status">{order.status}</span>
    </div>
  )
}
