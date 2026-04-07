const carrossel = document.querySelector('.carrossel');
const esquerda = document.querySelector('.seta.esquerda');
const direita = document.querySelector('.seta.direita');
let scrollPos = 0;

function atualizarItemWidth() {
  return carrossel.querySelector('.turma').offsetWidth;
}

direita.addEventListener('click', () => {
  const itemWidth = atualizarItemWidth();
  const maxScroll = carrossel.scrollWidth - carrossel.offsetWidth;
  scrollPos = Math.min(scrollPos + itemWidth * 1, maxScroll); // mudar *1 se quiser mover mais
  carrossel.style.transform = `translateX(-${scrollPos}px)`;
});

esquerda.addEventListener('click', () => {
  const itemWidth = atualizarItemWidth();
  scrollPos = Math.max(scrollPos - itemWidth * 1, 0);
  carrossel.style.transform = `translateX(-${scrollPos}px)`;
});
