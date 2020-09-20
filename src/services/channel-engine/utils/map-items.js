import {mapCurrency} from "./map-currency";
import {mapDate} from "./map-date";

export const mapItems = (data) => {
  if (!data) return null
  return data.map(item => mapItem(item))
}

const mapItem = (item) => {
  if (!item) return null
  return {
    status: item.Status,
    description: item.Description,
    originalPrice: mapCurrency(item.OriginalUnitPriceInclVat),
    price: mapCurrency(item.UnitPriceInclVat),
    totalPrice: mapCurrency(item.LineTotalInclVat),
    quantity: item.Quantity,
    itemNumber: item.Gtin,
    extraData: item.ExtraData,
    condition: item.Condition,
    expectedDeliveryDate: mapDate(item.ExpectedDeliveryDate)
  }
}
