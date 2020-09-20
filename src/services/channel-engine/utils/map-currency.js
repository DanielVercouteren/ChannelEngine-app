import Intl from 'intl'

export const mapCurrency = (price, currency = 'EUR') => {
  if (!price) return null
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(price)
}
