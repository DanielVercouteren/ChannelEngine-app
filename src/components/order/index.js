import React from 'react'
import { faCaretDown, faCaretUp, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OrderStatus from "components/order-status";
import InfoBlock from "components/info-block";
import Link from 'next/link'

export default function Order({order, onClickIcon, isOpen}) {
  return (
    <div className={`order ${isOpen ? 'order--is-open' : ''}`}>
      <div className="row order__row">
        <p className="col-sm-12 col-md-8 col-lg-5 order__name">{order.orderDate} | Order #{order.channelOrderNo}</p>
        <div className='col-sm-6 col-lg-3'>
          <OrderStatus status={order.status} />
        </div>
        <div className="col-sm-5 col-lg-3">
          <div className="order__price">
            {order.totalInclVat}
          </div>
        </div>
        <FontAwesomeIcon
          icon={isOpen ? faCaretUp : faCaretDown}
          className="order__icon"
          onClick={onClickIcon}
        />
      </div>
      {isOpen && (
        <>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <InfoBlock title="Shipping address">
                {order.shippingAddress.firstName} {order.shippingAddress.lastName} <br />
                {order.shippingAddress.streetName} {order.shippingAddress.houseNumber}{order.shippingAddress.addition} <br />
                {order.shippingAddress.zipCode} {order.shippingAddress.city}
              </InfoBlock>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <InfoBlock title="Billing address">
                {order.billingAddress.firstName} {order.billingAddress.lastName} <br />
                {order.billingAddress.streetName} {order.billingAddress.houseNumber}{order.billingAddress.addition} <br />
                {order.billingAddress.zipCode} {order.billingAddress.city}
              </InfoBlock>
            </div>
            <div className="col-sm-12 offset-md-1 col-md-3 offset-lg-3">
              <InfoBlock title="Payment method">
                {order.paymentMethod}
              </InfoBlock>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Link href="order/[id]" as={`order/${order.channelOrderNo}`}>
                <a>
                  <div className="order__link">
                    Get more information <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
