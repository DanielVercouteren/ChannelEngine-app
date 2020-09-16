import React from 'react'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OrderStatus from "components/order-status";
import Link from 'next/link'

export default function Order(order) {
  console.log(order)

  const convertDate = (date) => {
    const parseDate = new Date(date)
    return `${parseDate.getDate()}-${parseDate.getMonth()}-${parseDate.getFullYear()}`
  }

  return (
    <div className="order">
      <p className="order__name">{convertDate(order.orderDate)} | Order #{order.id}</p>
      <OrderStatus status={order.status} />
      <Link href='order/[id]' as={`order/${order.id}`}>
        <a>
          <FontAwesomeIcon icon={faCaretRight} className="order__icon"/>
        </a>
      </Link>
    </div>
  )
}
