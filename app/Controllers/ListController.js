import ListService from "../Services/ListService.js";
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  console.log("drawn");
  let lists = store.State.lists;
  let template = ""
  lists.forEach(list => {
    template += list.Template});
    document.getElementById("list").innerHTML = template;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems

  addList(event){
    event.preventDefault();
    let form = event.target;
    let rawList = {
      title: form.title.value
    };
    ListService.addList(rawList);
_drawLists();
  }

  removeList(id){
    ListService.removeList(id);
    _drawLists();
  }

  addListItem(event, id){
    event.preventDefault();
    let item = event.target.item.value;
    ListService.addListItem(id, item);
_drawLists();
  }

  removeListItem(listID, itemIndex){
    ListService.removeListItem(listID, itemIndex);
    _drawLists();
  }
}
