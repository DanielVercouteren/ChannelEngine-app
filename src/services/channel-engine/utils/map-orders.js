import {mapCurrency} from "./map-currency";
import {mapAddress} from "./map-address";

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
    subtotalVat: mapCurrency(data.CurrencyCode, data.SubTotalVat),
    subtotalInclVat: mapCurrency(data.CurrencyCode, data.SubTotalInclVat),
    shippingCostsVat: mapCurrency(data.CurrencyCode, data.ShippingCostsVat),
    shippingCostsInclVat: mapCurrency(data.CurrencyCode, data.ShippingCostsInclVat),
    totalVat: mapCurrency(data.CurrencyCode, data.TotalVat),
    totalInclVat: mapCurrency(data.CurrencyCode, data.TotalInclVat),
    channelOrderNo: data.ChannelOrderNo,
    // items: mapItems(data.Lines),
    phoneNumber: data.Phone,
    emailAddress: data.Email,
    paymentMethod: data.PaymentMethod,
    orderDate: convertDate(data.OrderDate),
    extraData: data.ExtraData

  }
}

const convertDate = (date) => {
  const parseDate = new Date(date)
  return `${parseDate.getDate()}-${parseDate.getMonth()}-${parseDate.getFullYear()}`
}
