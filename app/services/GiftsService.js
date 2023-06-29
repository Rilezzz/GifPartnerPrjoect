import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api, giftsApi } from "./AxiosService.js"



class GiftsService {

  async createGift(giftData) {
    const res = await api.post('api/gifts', giftData)
    debugger
    console.log('I created a gift', res.data);

    const newGift = new Gift(res.data)

    AppState.gift.push(newGift)

    AppState.emit('gift')

  }
  async getGifts() {
    const res = await giftsApi.get('api/gifts')
    console.log('got my gifts', res.data);

    const newGift = res.data.map(giftPojo => new Gift(giftPojo))

    AppState.gift = newGift

  }


  async openedGift(giftData, giftId) {
    const res = await api.put(`api/gifts/${giftId}`, giftData)
    console.log('opened gift', res.data);

  }


}

export const giftsService = new GiftsService()