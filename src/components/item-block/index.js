import OrderStatus from "components/order-status";

export default function ItemBlock ({ order }) {
  return (
    <>
      {order.items?.map(item => (
        <div className="item-block">
          <p className="item-block__row"><strong>{item.description}</strong></p>
          <p className="item-block__row">{item.quantity}x {item.price}</p>
          <div className="item-block__status">
            <OrderStatus status={item.status} />
          </div>
          <p className="item-block__row">Expected delivery on {item.expectedDeliveryDate}</p>
        </div>
      ))}
    </>
  )
}
