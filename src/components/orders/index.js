import React, { useState } from 'react'
import Order from 'components/order'

export default function Orders({ orders }) {
  const [openedOrder, setOpenedOrder] = useState(0)

  const openCloseOrders = (orderId) => {
    const openOrder = orderId === openedOrder ? 0 : orderId
    setOpenedOrder(openOrder)
  }
  return (
    <div className="orders">
      {orders && orders.map(order => (
        <Order
          onClickIcon={() => openCloseOrders(order.id)}
          isOpen={openedOrder === order.id}
          order={order}
        />
      ))}
    </div>
  )
}
