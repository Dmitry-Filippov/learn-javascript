// 1
const liItems = document.querySelectorAll("li");
liItems.forEach((item) => {
  console.log(item.textContent);
  console.log(item.getElementsByTagName("li").length);
});

