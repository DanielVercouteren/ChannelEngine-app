import Intl from 'intl'

export const mapCurrency = (currency, price) => {
  if (!currency || !price) return null
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(price)
}
