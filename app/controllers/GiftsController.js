import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { giftsService } from "../services/GiftsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawGift() {
  const gifts = AppState.gift

  let template = ''

  gifts.forEach(gift => template += gift.CardTemplate)

  setHTML('giftsList', template)


}

export class GiftsController {
  constructor() {
    console.log('this is my gifts controller');
    this.getGifts()
    AppState.on('gift', _drawGift)
  }

  async getGifts() {
    try {
      giftsService.getGifts()
    } catch (error) {
      console.log(error);
      Pop.error(error.message)

    }
  }

  async createGift(event) {
    try {
      event.preventDefault()
      const form = event.target
      const giftData = getFormData(form)
      console.log('gift data', giftData);
      await giftsService.createGift(giftData)

    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }

  async openedGift(giftId, giftData) {
    try {
      await giftsService.openedGift(giftId, giftData)
      console.log('giftData');
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }

  }

}