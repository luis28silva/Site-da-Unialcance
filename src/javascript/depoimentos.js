// Depoimentos dos alunos
  const feedbacks = document.querySelectorAll('.feedback');
  let current = 0;

  function trocarDepoimento() {
    feedbacks[current].classList.remove('active');
    current = (current + 1) % feedbacks.length;
    feedbacks[current].classList.add('active');
  }

  setInterval(trocarDepoimento, 30000); // Troca a cada 30 segundos
document.addEventListener("DOMContentLoaded", function () {
  const feedbacks = document.querySelectorAll('.feedback');
  let current = 0;

  function trocarDepoimento() {
    feedbacks[current].classList.remove('active');
    current = (current + 1) % feedbacks.length;
    feedbacks[current].classList.add('active');
  }

  setInterval(trocarDepoimento, 30000); // Troca a cada 30 segundos
});
