const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) =>
  item.querySelector('.collapsible__icon .icon').addEventListener("click", function (event) {
    console.log({event});
    item.classList.toggle("collapsible--expanded");
  })
);

/*
// Fire only if target is nav...
collapsibles.forEach((item) =>
  item.addEventListener("click", function (event) {
    console.log({event});
    if (event.target === item) {
      item.classList.toggle("collapsible--expanded");
    }
  })
);*/

/*
// Stop propagation of click event
document.querySelectorAll('.nav__item').forEach(li => {
  li.addEventListener('click', (event) => {
    event.stopPropagation();
  })
})*/