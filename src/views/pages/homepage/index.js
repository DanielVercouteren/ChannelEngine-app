import React from 'react'
import Orders from 'components/orders'

export default function Homepage ({ orders }) {
  return (
    <div className='row'>
      <div className='col-xs-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2'>
        <h1 className="title">My orders</h1>
        <Orders orders={orders} />
      </div>
    </div>
  )
}
