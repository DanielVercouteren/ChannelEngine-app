export const mapOrders = (data) => {
  if (!data) return null
  return data.map(order => mapOrder(order))
}

const mapOrder = (data) => {
  return {
    id: data.Id,
    status: data.Status,
    // billingAddress: mapAddress(data.BillingAddress),
    // shippingAddress: mapAddress(data.ShippingAddress),
    subtotalVat: data.SubTotalVat,
    subtotalInclVat: data.SubTotalInclVat,
    shippingCostsVat: data.ShippingCostsVat,
    shippingCostsInclVat: data.ShippingCostsInclVat,
    totalVat: data.TotalVat,
    totalInclVat: data.TotalInclVat,
    // items: mapItems(data.Lines),
    phoneNumber: data.Phone,
    emailAddress: data.Email,
    paymentMethod: data.PaymentMethod,
    currencyCode: data.CurrencyCode,
    orderDate: data.OrderDate,
    extraData: data.ExtraData

  }
}
