// 1
document
  .querySelector("[data-widget-name]")
  .elem.getAttribute("data-widget-name");

// 2
const links = document.querySelectorAll("a");
links.forEach((link) => {
  if (
    link.href.includes("://") &&
    !link.href.startsWith("http://internal.com")
  ) {
    link.style.color = "orange";
  }
});
