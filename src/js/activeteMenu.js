document.addEventListener("scroll", (event) => {
  const position = window.scrollY;
  acitivateMenu(position, "hero", 0);
  acitivateMenu(position, "promotion", 1);
  acitivateMenu(position, "food-category", 2);
  acitivateMenu(position, "faq", 3);
});

function acitivateMenu(currentPosition, elementId, menuOrder) {
  const menu = document.querySelectorAll("#menu li a");
  const element = document.getElementById(elementId);

  const elementStartXPosition = element.offsetTop - 1;
  const elementEndXPosition = element.offsetTop + element.offsetHeight - 1;
  if (currentPosition > elementStartXPosition && currentPosition < elementEndXPosition) {
    menu[menuOrder].classList.add("active");
    setAriaCurrent(menuOrder);
  } else {
    menu[menuOrder].classList.remove("active");
    removeAriaCurrent(menuOrder);
  }
}

function setAriaCurrent(menuOrder) {
  const menu = document.querySelectorAll("#menu li a");
  menu[menuOrder].ariaCurrent = true;
}

function removeAriaCurrent(menuOrder) {
  const menu = document.querySelectorAll("#menu li a");
  menu[menuOrder].ariaCurrent = false;
}
