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
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);