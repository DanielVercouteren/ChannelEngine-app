import React, {useEffect, useState} from 'react'
import Orders from 'components/orders'
import Filter from 'components/filter'
import Aside from 'components/aside'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Homepage({orders}) {
  const [statuses, setStatuses] = useState([
    {title: 'In progress', name: 'IN_PROGRESS', isSelected: true},
    {title: 'In combi', name: 'IN_COMBI', isSelected: true},
    {title: 'In backorder', name: 'IN_BACKORDER', isSelected: true},
    {title: 'Shipped', name: 'SHIPPED', isSelected: true},
    {title: 'Lost in transit', name: 'MANCO', isSelected: true},
    {title: 'Canceled', name: 'CANCELED', isSelected: true},
    {title: 'Closed', name: 'CLOSED', isSelected: true},
    {title: 'Open', name: 'NEW', isSelected: true},
    {title: 'Returned', name: 'RETURNED', isSelected: true},
    {title: 'Requires correction', name: 'REQUIRES_CORRECTION', isSelected: true}
  ])
  const [dates, setDates] = useState([])
  const [asideIsOpen, setAsideOpen] = useState(false)
  const [orderItems, setOrders] = useState([])
  useEffect(() => {
    const dates = new Set(orders.map(order => order.orderDate))
    setDates([...dates].map(date => {
      return {name: date, isSelected: true}
    }))
  }, [orders])

  const filterStatus = ({target}) => {
    const newStatuses = statuses.reduce((acc, curr) => {
      if (curr.name === target.name) {
        curr.isSelected = !curr.isSelected
      }
      return acc.concat(curr)
    }, [])
    setStatuses(newStatuses)
  }
  const filterDates = ({target}) => {
    const newDates = dates.reduce((acc, curr) => {
      if (curr.name === target.name) {
        curr.isSelected = !curr.isSelected
      }
      return acc.concat(curr)
    }, [])
    setDates(newDates)
  }
  const toggleAside = () => setAsideOpen(!asideIsOpen)

  useEffect(() => {
    const newOrders = orders
    .filter(order => statuses.find(item => item.name === order.status)?.isSelected)
    .filter(order => dates.find(item => item.name === order.orderDate)?.isSelected)
    setOrders(newOrders)
  }, [dates, statuses, orders])

  return (
    <>
      <div className="row">
        <div className="col-sm-12 offset-md-1 col-md-10">
          <div className="page__heading">
            <h1 className="page__title">My orders</h1>
            <div className="page__heading-icon">
              <FontAwesomeIcon icon={faFilter} onClick={toggleAside} />
            </div>
          </div>
          <Orders orders={orderItems}/>
        </div>
      </div>
      <Aside
        isOpen={asideIsOpen}
        onClick={toggleAside}
        title="Filters"
      >
        <Filter
          title="Status"
          options={statuses}
          onFilter={filterStatus}
        />
        <Filter
          title="Date"
          options={dates}
          onFilter={filterDates}
        />
      </Aside>
    </>
  )
}
