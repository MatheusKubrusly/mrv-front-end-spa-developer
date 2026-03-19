// 1. Selecionar o elemento da foto
const profilePhoto = document.querySelector('#main_photo'); //aqui estamos buscando pelo elemento html que contém o seletor ID "#main_photo" existente dentro do arquivo css

//console.log(typeof profilePhoto);

// 2. Adicionar um "ouvinte" de evento de clique
profilePhoto.addEventListener('click', () => {
  // 3. Reagir ao clique: exibir um alerta
  alert('Olá! Esta é a minha foto de perfil.');
});
