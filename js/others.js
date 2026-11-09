// Pega os elementos usados para controlar a tela inicial e o chat
const menu = document.getElementById("menu");
const chat = document.getElementById("chat");
const iniciar = document.getElementById("iniciar");
const imagemMenu = document.getElementById("imagemMenu");

// Quando o botão "Iniciar" for clicado, chama a função iniciarJogo
iniciar.addEventListener("click", iniciarJogo);

// Faz a transição da tela inicial para o chat
function iniciarJogo() {
  // Guarda a posição atual da imagem antes de começar a animação
  const rect = imagemMenu.getBoundingClientRect();

  // Muda a imagem para uma posição fixa na tela
  imagemMenu.style.position = "fixed";
  imagemMenu.style.left = rect.left + "px";
  imagemMenu.style.top = rect.top + "px";
  imagemMenu.style.width = rect.width + "px";
  imagemMenu.style.height = rect.height + "px";

  // Esconde o botão de iniciar
  iniciar.style.opacity = "0";
  iniciar.style.pointerEvents = "none";

  // Começa a animação da imagem
  requestAnimationFrame(() => {
    // Diminui a imagem até o tamanho do avatar do chat
    imagemMenu.style.width = "65px";
    imagemMenu.style.height = "65px";

    // Move a imagem para onde ficará o avatar do bot
    imagemMenu.style.left = "20px";
    imagemMenu.style.top = "133px";
  });

  // Depois de meio segundo, começa a mostrar o chat
  setTimeout(() => {
    menu.style.opacity = "0";
    chat.style.display = "flex";

    requestAnimationFrame(() => {
      chat.style.opacity = "1";
    });
  }, 500);

  // Depois que a transição termina, remove a tela inicial
  setTimeout(() => {
    menu.style.display = "none";
    imagemMenu.style.display = "none";

    // Primeira mensagem automática do SimSimi
    criarMensagemBot("Olá!");

    // Coloca o cursor no campo de mensagem
    entrada.focus();
  }, 1000);
}