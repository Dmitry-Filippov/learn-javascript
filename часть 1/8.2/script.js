// 1
function ObjectItem(name) {
  this.name = name;
}

const obj = new ObjectItem("objectItemOne");
const obj2 = new obj.constructor("objectItemTwo");
