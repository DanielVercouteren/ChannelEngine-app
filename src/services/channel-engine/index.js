import axios from 'axios'
import { mapOrders } from './utils/map-orders'

export const getOrders = async () => {
  try {
    const res = await axios.get('https://api-dev.channelengine.net/api/v2/orders', {
      params: {
        apikey: process.env.CHANNEL_ENGINE_API_KEY
      }
    })
    return mapOrders(res.data.Content)
  } catch (err) {
    console.log(err.response)
  }
}
