import React, { useEffect } from 'react'

export default function OrderStatus ({ status }) {
  let title
  let className

  useEffect(() => {
    switch (status) {
      case 'IN_PROGRESS':
      case 'IN_COMBI':
      case 'IN_BACKORDER':
        title = "In progress"
        className = "info"
        break;
      case 'SHIPPED':
        title = "Shipped"
        className = "success"
        break;
      case 'MANCO':
        title = "Lost in transit"
        className = "warning"
        break;
      case 'CANCELED':
        title = "Canceled"
        className = "error"
        break;
      case 'CLOSED':
        title = "Closed";
        className = "error"
        break;
      case 'NEW':
        title = "Open"
        className = "info"
        break;
      case 'RETURNED':
        title = "Returned"
        className = "success"
        break;
      case 'REQUIRES_CORRECTION':
        title = "Requires correction"
        className = "warning"
        break;
    }
  }, [status, title, className])

  console.log('data::', className, title)
  return (
    <div className={`order-status order-status--${className}`}>
      {title}
    </div>
  )
}
