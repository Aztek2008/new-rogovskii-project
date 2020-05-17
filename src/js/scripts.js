const strap = document.querySelector('.main-area__strap');
const leftMenu = document.querySelector('.left-side__section');
console.log(strap);

strap.addEventListener('click', collapseLeftMenu);

function collapseLeftMenu(event) {
  if (leftMenu.dataset.id === 'collapse-to-left') {
    leftMenu.dataset.id = '';
  } else {
    leftMenu.dataset.id = 'collapse-to-left';
  }
}
