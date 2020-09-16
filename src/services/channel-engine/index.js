import axios from 'axios'
import { mapOrders } from './utils/map-orders'

export const getOrders = async () => {
  try {
    const res = await axios.get('https://api-dev.channelengine.net/api/v2/orders', {
      params: {
        apikey: process.env.CHANNEL_ENGINE_API_KEY
      }
    })
    const orders = mapOrders(res.data.Content)
    const totalCount = res.data.TotalCount
    return {orders, totalCount}
  } catch (err) {
    console.log(err.response)
  }
}

export const getOrderById = async (id) => {
  try {
    const res = await axios.get('https://api-dev.channelengine.net/api/v2/orders', {
      params: {
        apikey: process.env.CHANNEL_ENGINE_API_KEY,
        channelOrderNos: id
      }
    })
    console.log(res.data.Content)
    return mapOrders(res.data.Content)[0]
  } catch (err) {
    console.log(err.response)
  }
}
