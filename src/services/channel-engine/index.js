import axios from 'axios'
import { mapOrders } from './utils/map-orders'

export const getOrders = async () => {
  try {
    const res = await axios.get('https://api-dev.channelengine.net/api/v2/orders', {
      params: {
        apikey: '541b989ef78ccb1bad630ea5b85c6ebff9ca3322'
      }
    })
    return mapOrders(res.data.Content)
  } catch (err) {
    console.log(err.response)
  }
}
