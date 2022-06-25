// 1
function clear(elem) {
  elem.innerHTML = "";
}

// 2
function createList() {
  const list = document.createElement("ul");
  while (true) {
    let input = prompt();
    if (input) {
      let li = document.createElement("li");
      li.textContent = input;
      list.append(li);
    } else {
      break;
    }
  }
}

// 3
function createTree(container, obj) {
  container.append(createTreeDom(obj));
}
function createTreeDom(obj) {
  if (!Object.keys(obj).length) return;
  let ul = document.createElement("ul");
  for (let key in obj) {
    let li = document.createElement("li");
    li.innerHTML = key;
    let childrenUl = createTreeDom(obj[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }
    ul.append(li);
  }
  return ul;
}

// 4
let lis = document.getElementsByTagName("li");
for (let li of lis) {
  let descendantsCount = li.getElementsByTagName("li").length;
  if (!descendantsCount) continue;
  li.firstChild.data += " [" + descendantsCount + "]";
}

// 5
function createCalendar(elem, year, month) {
  let mon = month - 1;
  let d = new Date(year, mon);
  let table =
    "<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>";
  for (let i = 0; i < getDay(d); i++) {
    table += "<td></td>";
  }
  while (d.getMonth() == mon) {
    table += "<td>" + d.getDate() + "</td>";
    if (getDay(d) % 7 == 6) {
      table += "</tr><tr>";
    }
    d.setDate(d.getDate() + 1);
  }
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += "<td></td>";
    }
  }
  table += "</tr></table>";
  elem.innerHTML = table;
}
function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

// 6
const one = document.querySelector("li");
one.insertAdjacentHTML("afterend", "<li>2</li><li>3</li>");

// 7
let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((rowA, rowB) =>
    rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1
  );
table.tBodies[0].append(...sortedRows);
