// 1
function getDiv() {
  return document.body.firstElementChild;
}

function getUl() {
  return document.body.lastElementChild;
}

function getPete() {
  return document.body.lastElementChild.lastElementChild;
}

// 2
const table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.background = "red";
}
