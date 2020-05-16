const strap = document.querySelector('.main-area__strap');
const leftMenu = document.querySelector('.left-side__section');
console.log(strap);

strap.addEventListener('click', collapseLeftMenu)

function collapseLeftMenu(event) {
  leftMenu.classList.toggle('collapse')
}
