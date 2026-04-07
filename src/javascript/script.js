// 🔥 Função principal (controle das páginas)
function trocarPagina(idPagina) {

  // Oculta todas as seções
  document.querySelectorAll('.pagina').forEach(sec => sec.classList.remove('active'));

  // Mostra a seção correta
  document.getElementById(idPagina).classList.add('active');

  // 🔥 Volta pro topo
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// 🔐 FUNÇÃO DE SENHA
function protegerAcesso(secaoId) {
  let senhaCorreta = "";

  if (secaoId === "material_apoio") {
    senhaCorreta = "125";
  } else if (secaoId === "curriculo") {
    senhaCorreta = "999";
  }

  const senha = prompt("Digite a senha para acessar:");

  if (senha === senhaCorreta) {
    return true;
  } else {
    alert("Senha incorreta!");
    return false;
  }
}


// 🔗 LINKS DO MENU (topo)
document.querySelectorAll('.link-inicio, .link-sobre, .link-contato, .link-curriculo, .link-cursos').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    if (link.classList.contains('link-inicio')) {
      trocarPagina('inicio');

    } else if (link.classList.contains('link-sobre')) {
      trocarPagina('sobre');

    } else if (link.classList.contains('link-contato')) {
      trocarPagina('contato');

    } else if (link.classList.contains('link-curriculo')) {

      // 🔐 PROTEGIDO
      if (!protegerAcesso('curriculo')) return;

      trocarPagina('curriculo');

    } else if (link.classList.contains('link-cursos')) {
      trocarPagina('cursos');
    }
  });
});


// 🔘 BOTÕES (ícones da home)
document.getElementById('btn-professores').addEventListener('click', function(e) {
  e.preventDefault();
  trocarPagina('professores');
});

document.getElementById('btn-biblioteca').addEventListener('click', function(e) {
  e.preventDefault();
  trocarPagina('biblioteca');
});

document.getElementById('btn-certificado').addEventListener('click', function(e) {
  e.preventDefault();
  trocarPagina('certificado');
});

document.getElementById('btn-material').addEventListener('click', function(e) {
  e.preventDefault();

  // 🔐 PROTEGIDO
  if (!protegerAcesso('material_apoio')) return;

  trocarPagina('material_apoio');
});