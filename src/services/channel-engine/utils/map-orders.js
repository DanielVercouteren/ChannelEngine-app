import {mapCurrency} from "./map-currency";
import {mapAddress} from "./map-address";
import {mapItems} from "./map-items";
import {mapDate} from "./map-date";

export const mapOrders = (data) => {
  if (!data) return null
  return data.map(order => mapOrder(order))
}

const mapOrder = (data) => {
  return {
    id: data.Id,
    status: data.Status,
    billingAddress: mapAddress(data.BillingAddress),
    shippingAddress: mapAddress(data.ShippingAddress),
    subtotalVat: mapCurrency(data.SubTotalVat, data.CurrencyCode),
    subtotalInclVat: mapCurrency(data.SubTotalInclVat, data.CurrencyCode),
    shippingCostsVat: mapCurrency(data.ShippingCostsVat, data.CurrencyCode),
    shippingCostsInclVat: mapCurrency(data.ShippingCostsInclVat, data.CurrencyCode),
    totalVat: mapCurrency(data.TotalVat, data.CurrencyCode),
    totalInclVat: mapCurrency(data.TotalInclVat, data.CurrencyCode),
    channelOrderNo: data.ChannelOrderNo,
    items: mapItems(data.Lines),
    phoneNumber: data.Phone,
    emailAddress: data.Email,
    paymentMethod: data.PaymentMethod,
    orderDate: mapDate(data.OrderDate),
    extraData: data.ExtraData
  }
}
