import React, { useEffect, useState } from 'react'

export default function OrderStatus ({ status }) {
  const [title, setTitle] = useState('')
  const [className, setClassName] = useState('')

  useEffect(() => {
    switch (status) {
      case 'IN_PROGRESS':
      case 'IN_COMBI':
      case 'IN_BACKORDER':
        setTitle("In progress")
        setClassName("info")
        break;
      case 'SHIPPED':
        setTtitle("Shipped")
        setClassName("success")
        break;
      case 'MANCO':
        setTitle("Lost in transit")
        setClassName("warning")
        break;
      case 'CANCELED':
        setTitle("Canceled")
        setClassName("error")
        break;
      case 'CLOSED':
        setTitle("Closed")
        setClassName("error")
        break;
      case 'NEW':
        setTitle("Open")
        setClassName("info")
        break;
      case 'RETURNED':
        setTitle("Returned")
        setClassName("success")
        break;
      case 'REQUIRES_CORRECTION':
        setTitle("Requires correction")
        setClassName("warning")
        break;
    }
  }, [status])

  return (
    <p className={`order-status order-status--${className}`}>
      {title}
    </p>
  )
}
