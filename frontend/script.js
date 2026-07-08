const API = "http://localhost:3000";

const perguntas = [
  {
    pergunta: "Qual rio passa pela cidade de Itajubá?",
    opcoes: ["Rio Sapucaí", "Rio Tietê", "Rio Doce", "Rio Abunã"],
    correta: 0,
  },

  {
    pergunta: "O que significa APP?",
    opcoes: [
      "Área de Preservação Permanente",
      "Área Particular Protegida",
      "Área de Proteção Popular",
      "Área Protegida de Pobres",
    ],
    correta: 0,
  },

  {
    pergunta: "Qual problema ambiental pode ser agravado pelo desmatamento?",
    opcoes: [
      "Enchentes",
      "Internet lenta",
      "Energia solar",
      "Lotação de hospitais",
    ],
    correta: 0,
  },

  {
    pergunta: "As APPs ajudam a proteger:",
    opcoes: [
      "Rios e nascentes",
      "Estacionamentos",
      "Prédios abandonados",
      "O governo",
    ],
    correta: 0,
  },

  {
    pergunta: "Uma atitude sustentável é:",
    opcoes: [
      "Jogar lixo no rio",
      "Fazer coleta seletiva",
      "Queimar lixo",
      "Fumar",
    ],
    correta: 1,
  },

  {
    pergunta: "Qual é uma função das APPs?",
    opcoes: [
      "Evitar erosões",
      "Construir estradas",
      "Aumentar o desmatamento",
      "Proteger ONGs",
    ],
    correta: 0,
  },

  {
    pergunta: "As matas ciliares ficam próximas de:",
    opcoes: ["Rios", "Rodovias", "Prédios", "LAN-Houses"],
    correta: 0,
  },

  {
    pergunta: "O descarte irregular de lixo pode causar:",
    opcoes: [
      "Enchentes",
      "Mais árvores",
      "Ar mais limpo",
      "Problemas psicológicos",
    ],
    correta: 0,
  },

  {
    pergunta: "Qual destes ajuda a preservar o meio ambiente?",
    opcoes: ["Reciclagem", "Queimadas", "Desmatamento", "Comércio"],
    correta: 0,
  },

  {
    pergunta: "As APPs são protegidas por:",
    opcoes: ["Lei", "Sorteio", "Empresas privadas", "Super-Heróis"],
    correta: 0,
  },

  {
    pergunta: "O desmatamento afeta diretamente:",
    opcoes: ["A biodiversidade", "O Wi-Fi", "Os satélites", "Os professores"],
    correta: 0,
  },

  {
    pergunta: "Qual destes é um recurso natural?",
    opcoes: ["Água", "Concreto", "Asfalto", "PVC"],
    correta: 0,
  },

  {
    pergunta: "Uma consequência das enchentes é:",
    opcoes: [
      "Prejuízos à população",
      "Aumento da vegetação",
      "Melhoria do solo",
      "Concentração desbalanceada de riqueza",
    ],
    correta: 0,
  },

  {
    pergunta: "As árvores ajudam a:",
    opcoes: [
      "Melhorar a qualidade do ar",
      "Produzir plástico",
      "Aumentar a poluição",
      "Planejar uma revolução comunista",
    ],
    correta: 0,
  },

  {
    pergunta: "Qual desses é uma APP de Itajubá?",
    opcoes: [
      "Horto Florestal",
      "Clube 16 de Junho",
      "E.E João XXIII",
      "Praça do Soldado",
    ],
    correta: 0,
  },
];

perguntas.sort(() => Math.random() - 0.7);
const perguntasSelecionadas = perguntas.slice(0, 7);

let atual = 0;
let pontos = 0;

function carregarPergunta() {
  document.getElementById("pergunta").innerText =
    perguntasSelecionadas[atual].pergunta;

  document.getElementById("btn0").innerText =
    perguntasSelecionadas[atual].opcoes[0];

  document.getElementById("btn1").innerText =
    perguntasSelecionadas[atual].opcoes[1];

  document.getElementById("btn2").innerText =
    perguntasSelecionadas[atual].opcoes[2];
  document.getElementById("btn3").innerText =
    perguntasSelecionadas[atual].opcoes[3];
}

function responder(opcao) {
  if (opcao === perguntasSelecionadas[atual].correta) {
    pontos++;
  }

  atual++;

  if (atual < perguntasSelecionadas.length) {
    carregarPergunta();
  } else {
    document.getElementById("pergunta").innerText = "Quiz finalizado!";

    document.getElementById("resultado").innerText =
      `Você acertou ${pontos} de ${perguntasSelecionadas.length} perguntas!`;

    document.getElementById("btn0").style.display = "none";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn3").style.display = "none";
  }
}

carregarPergunta();
