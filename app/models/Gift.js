



export class Gift {
  constructor(data) {
    this.id = data._id || ''
    this.tag = data.tag
    this.url = data.url || 'https://plus.unsplash.com/premium_photo-1661265933321-3bdd9ec114ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    this.opened = data.opened
    this.creatorId = data.creatorId
  }


  get CardTemplate() {
    return `
    
    <div class="col-4 d-flex">
      <div class="card" style="width: 18rem;">
        <img src="${this.url}"
          class="card-img-top" alt="picture">
        <div class="card-body">
          <h5 class="card-title">${this.tag}</h5>
          <button onclick="app.GiftsController.openedGift('${this.id}')" class="btn btn-success">Open Gift</button>
        </div>
      </div>
    </div>
  
    `
  }


}


