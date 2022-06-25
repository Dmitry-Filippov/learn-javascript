// 1
const scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// 2
const div = document.createElement("div");
div.style.overflowY = "scroll";
div.style.width = "50px";
div.style.height = "50px";
document.body.append(div);
const scrollWidth = div.offsetWidth - div.clientWidth;
div.remove();
console.log(scrollWidth);

