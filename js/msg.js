// Pega os elementos da página que serão usados pelo JavaScript
const mensagens = document.getElementById("mensagens");
const entrada = document.getElementById("entrada");
const enviar = document.getElementById("enviar");

// Cria e mostra uma mensagem enviada pelo usuário
function criarMensagemUsuario(texto) {
  const mensagem = document.createElement("div");
  mensagem.classList.add("mensagem", "usuario");

  const bolha = document.createElement("div");
  bolha.classList.add("bolha");
  bolha.textContent = texto;

  mensagem.appendChild(bolha);
  mensagens.appendChild(mensagem);

  rolarParaBaixo();
}

// Cria e mostra uma mensagem enviada pelo bot
function criarMensagemBot(texto) {
  const mensagem = document.createElement("div");
  mensagem.classList.add("mensagem", "bot");

  // Cria o avatar do SimSimi
  const avatar = document.createElement("img");
  avatar.src = "simsimi.png"; //Fiquei 30 min tentando entender pq não funcionava... ERA PNG E NÃO JPG
  avatar.alt = "SimSimi";

  // Cria a caixa com o texto da resposta
  const bolha = document.createElement("div");
  bolha.classList.add("bolha");
  bolha.textContent = texto;

  mensagem.appendChild(avatar);
  mensagem.appendChild(bolha);
  mensagens.appendChild(mensagem);

  rolarParaBaixo();
}

// Faz a conversa descer automaticamente até a mensagem mais recente
function rolarParaBaixo() {
  setTimeout(() => {
    mensagens.scrollTo({
      top: mensagens.scrollHeight,
      behavior: "smooth"
    });
  }, 50);
}

// Envia a mensagem digitada pelo usuário
function enviarMensagem() {
  // Pega o texto e remove espaços no começo e no final
  const texto = entrada.value.trim();

  // Não envia mensagens vazias
  if (texto === "") {
    return;
  }

  // Mostra a mensagem do usuário na tela
  criarMensagemUsuario(texto);

  // Aumenta o contador de mensagens
  contadorMensagens++;

  // Ativa o modo estranho quando chega ao limite definido
  if (contadorMensagens >= limiteEstranho) {
    modoEstranho = true;
  }

  // Espera entre 500 e 1200 milissegundos antes de responder
  setTimeout(() => {
    const resposta = responderBot(texto);
    criarMensagemBot(resposta);
  }, 500 + Math.random() * 700);

  // Limpa o campo de texto
  entrada.value = "";

  // Coloca o cursor novamente no campo
  entrada.focus();
}

// Envia a mensagem quando o botão é clicado 
enviar.addEventListener("click", enviarMensagem);

// Também permite enviar pressionando Enter... COMO QUE ESQUECEM DE FAZER ISSO?
entrada.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    enviarMensagem();
  }
});