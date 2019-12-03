import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.items = data.items || [];
    this.title = data.title;
  }

  get Template() {
    return /*html*/`
      
<div class="col-12 col-md-6 col-lg-4 mt-2 mb-2">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${this.title}</h5>
      <div class="card-text">
        <ul>
          ${this.getItemTemplate()}
        </ul>
      </div>
      <form onsubmit="app.listController.addListItem(event, '${this.id}')">
        <input type="text" name="item" placeholder="New item" required />
        <button class="btn btn-primary" type="submit">Add Item</button>
      </form>
      <button class="btn btn-primary" onclick="app.listController.removeList('${this.id}')">Delete List</button>
    </div>
  </div>
</div>
    `;
  }

  getItemTemplate() {
    let template = "";
    this.items.forEach((item, index) => {
      template += /*html*/ `<li>${item} <span onclick="app.listController.removeListItem('${this.id}', ${index})">(remove)</span></li>`;
    });
    return template;
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
