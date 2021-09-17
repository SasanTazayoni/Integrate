// function menu() {
//     var list = document.getElementsByClassName('list')[0]
//     var display = list.style.display
//     if (!display) {
//         list.style.display = 'block'
//     } else {
//         list.style.display = ''
//     } 
// }

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

// const dropDown = () => {
//   const collapsible__icon = document.querySelector('.collapsible__icon');
//   const collapsible__content = document.querySelector('.collapsible__content');

//   collapsible__icon.addEventListener('click', () => {
//     collapsible__content.classList.toggle("collapsible--expanded");

//   });
// }

// dropDown();