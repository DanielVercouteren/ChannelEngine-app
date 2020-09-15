import React from 'react'
import Orders from 'components/orders'

export default function Homepage ({ orders }) {
  return (
    <div className='row'>
      <div className='col-sm-12 col-md-6 col-lg-4'>
        <h1 className="title">My orders</h1>
        <Orders orders={orders} />
      </div>
    </div>
  )
}
