import React, { useState, useEffect } from 'react'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OrderStatus from "components/order-status";
import Address from "components/address";

export default function Order({order, onClickIcon, isOpen}) {
  const convertDate = (date) => {
    const parseDate = new Date(date)
    return `${parseDate.getDate()}-${parseDate.getMonth()}-${parseDate.getFullYear()}`
  }

  return (
    <div className={`order ${isOpen ? 'order--is-open' : ''}`}>
      <div className="row">
        <p className="col-xs-8 col-sm-4 order__name">{convertDate(order.orderDate)} | Order #{order.id}</p>
        <div className='col-xs-6 col-sm-3'>
          <OrderStatus status={order.status} />
        </div>
        <div className="col-xs-6 offset-sm-2 col-sm-3">
          {order.totalInclVat}
        </div>
        <FontAwesomeIcon
          icon={isOpen ? faCaretUp : faCaretDown}
          className="order__icon"
          onClick={onClickIcon}
        />
      </div>
      {isOpen && (
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <Address title="Shipping address" {...order.shippingAddress} />
          </div>
          <div className="col-xs-12 col-sm-4">
            <Address title="Billing address" {...order.billingAddress} />
          </div>
          <div className="col-xs-12 col-sm-3">
            Payment method<br/>
            {order.paymentMethod}
          </div>
        </div>
      )}
    </div>
  )
}
