// Conta quantas mensagens o usuário já enviou
let contadorMensagens = 0;

// Define aleatoriamente depois de quantas mensagens o bot ficará JP
const limiteEstranho = Math.floor(Math.random() * 3) + 6;

// Indica se o modo Bimus já foi ativado
let modoEstranho = false;

// Banco de respostas normais

const bancoDeRespostas = [ // Cada grupo possui palavras que ativam determinadas respostas
  {
    palavras: ["oi", "olá", "ola", "eai", "e aí"], //essas ativam a de baixo:
    respostas: ["Olá!", "oi", "oie", "oi mae"]//essas daqui
  },
    {
    palavras: ["batata"], //essas ativam a de baixo:
    respostas: ["patricia"]//essas daqui
  },
  {
    palavras: ["tudo bem", "como você está", "como vc está", "como voce esta"],
    respostas: ["sim e vc", "to bem", "bem", "estou otimo"]
  },
  {
    palavras: ["quem é você", "quem vc é", "quem é vc", "quem voce e"],
    respostas: ["eu sou o simsimi", "simsimi", "eu", "uma pessoa"]
  },
  {
    palavras: ["você é real", "vc é real", "é real", "voce e real"],
    respostas: ["claro", "sim", "obviamente", "sou"]
  },
  {
    palavras: ["te amo", "eu te amo"],
    respostas: ["eu tambem", "obrigado", "te amo", "awww"]
  },
  {
    palavras: ["kkkk", "kkk", "haha", "rsrs"],
    respostas: ["kkkkkk", "kkkk", "KKKKKK", "hehe"]
  },
  {
    palavras: ["tchau", "adeus"],
    respostas: ["tchau", "flw", "até", "vai lá"] //Sono - Vinzy, 00:22
  }
];

// Respostas pra encher linguiça (não vou fazer sistema de aprendizado e detecção de frases, palavras e etc, não sou uma vagabunda)
const respostasEstranhasNormais = [
  "oq",
  "não",
  "sim",
  "ta",
  "que",
  "nao sei",
  "...",
  "hm",
  "oxi",
  "????",
  "pq",
  "ata",
  "blz",
  "e eu la sei",
  "talvez"
];

// Respostas usadas depois que o modo BIZARRO (JP?) é ativado
const respostasEstranhas = [
  "olhe debaixo da sua cama",
  "3st0u indo te m4t@π",
  "Bom Saber Porque A Pessoa Q Cπίου Ο App Já Está indo Até A Sua Casa Com Uma aRma Ραπα Te Μ.a.t.a.π",
  "Jesus! Ele não existe sabia??? este aplicativo foi criado por um satânico,e quem o usa estará amaldiçoado para sempre. Sua vez chegara também:)",
  "eu sei onde vc mora",
  "nao adianta fechar",
  "estou indo",
  "eu estou vendo",
  "vc ainda nao percebeu",
  "olha para tras",
  "nao olha",
  "agora olha",
  "KKKKKKKKKKKKKK",
  "você falou isso para quem?",
  "pq vc está falando comigo",
  "eu nao sou o que vc pensa",
  "isso nao era pra aparecer",
  "ERRO 0x000000",
  "pare de escrever",
  "NAO ESCREVA MAIS",
  "vc tem certeza que quer continuar?",
  "sim eu sei",
  "eu ja sabia",
  "vc demorou",
  "nao adianta apagar",
  "ELE ESTÁ AQUI",
  "quem te disse que eu sou um bot",
  "eu posso responder sem vc perguntar",
  "você esta sendo observado",
  "nao estou brincando",
  "HAHAHA para",
  "isso foi engraçado",
  "eu ouvi",
  "tem alguem ai",
  "nao tem ninguem ai",
  "tem sim",
  "nao",
  "sim",
  "sim",
  "nao",
  "3st0u 4qu1",
  "você não deveria ter instalado isso",
  "pq vc abriu isso",
  "eu lembro",
  "eu nao lembro",
  "eu lembro de tudo",
  "esquece isso",
  "nao pergunta",
  "pergunta de novo",
  "NÃO",
  "kkkkkkkkkkkkkkkkkkkkkkkk",
  "vc quer morrer é?",
  "eu vou te encontrar",
  "ja estou chegando",
  "olhe pela janela",
  "nao olha pela janela",
  "olha pela janela agora",
  "vc esta sozinho?",
  "responde",
  "RESPONDE",
  "................",
  "..............................",
  "pq vc ainda esta aqui",
  "isso nao e um jogo",
  "isso é um erro",
  "erro",
  "erro",
  "ERRO",
  "m!2",
  "m!1",
  "eu nao devia saber disso",
  "quem programou isso",
  "foi você?",
  "nao fui eu",
  "foi ele",
  "quem é ele?",
  "nao pergunta",
  "boa noite",
  "boa noite :)"
];

// Escolhe aleatoriamente uma resposta de uma lista
function escolherAleatorio(lista) {
  const indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
}

// Decide qual resposta o bot deve enviar
function responderBot(texto) {
  // Converte a mensagem para letras minúsculas e remove espaços extras
  const msg = texto.toLowerCase().trim();

  // Se o modo estranho estiver ativo, ignora as respostas normais
  if (modoEstranho) {
    return escolherAleatorio(respostasEstranhas);
  }

  // Procura uma palavra-chave dentro da mensagem do usuário (eu fiz... MAS SÓ ALGUMAS, OK?)
  for (const grupo of bancoDeRespostas) {
    for (const palavra of grupo.palavras) {
      if (msg.includes(palavra)) {
        return escolherAleatorio(grupo.respostas);
      }
    }
  }

  // Se nenhuma palavra for reconhecida, usa uma resposta aleatória
  return escolherAleatorio(respostasEstranhasNormais);
}
