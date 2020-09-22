import OrderStatus from "components/order-status";

export default function ItemTable ({ order }) {
  return (
    <table className="item-table">
      <tr className="item-table__row">
        <th className="item-table__header">Itemno.</th>
        <th className="item-table__header">Description</th>
        <th className="item-table__header">Delivery date</th>
        <th className="item-table__header">Status</th>
        <th className="item-table__header">Condition</th>
        <th className="item-table__header">Quantity</th>
        <th className="item-table__header">Subtotal</th>
        <th className="item-table__header">Total</th>
      </tr>

      {order.items?.map(item => (
        <tr className="item-table__row">
          <td>{item.itemNumber}</td>
          <td>{item.description}</td>
          <td>{item.expectedDeliveryDate}</td>
          <td><OrderStatus status={item.status} /></td>
          <td>{item.condition}</td>
          <td>{item.quantity}</td>
          <td>{item.price}</td>
          <td>{item.totalPrice}</td>
        </tr>
      ))}
    </table>
  )
}
