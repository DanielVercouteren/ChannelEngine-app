import React from 'react'
import { faCaretDown, faCaretUp, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OrderStatus from "components/order-status";
import Address from "components/address";
import Link from 'next/link'

export default function Order({order, onClickIcon, isOpen}) {
  return (
    <div className={`order ${isOpen ? 'order--is-open' : ''}`}>
      <div className="row">
        <p className="col-xs-8 col-sm-5 order__name">{order.orderDate} | Order #{order.channelOrderNo}</p>
        <div className='col-xs-6 col-sm-3'>
          <OrderStatus status={order.status} />
        </div>
        <div className="col-xs-6 offset-sm-1 col-sm-3">
          {order.totalInclVat}
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
            <div className="col-xs-12 col-sm-3">
              <Address title="Shipping address" {...order.shippingAddress} />
            </div>
            <div className="col-xs-12 col-sm-3">
              <Address title="Billing address" {...order.billingAddress} />
            </div>
            <div className="col-xs-12 offset-sm-3 col-sm-3">
              Payment method<br/>
              {order.paymentMethod}
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
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
