const perguntas = [
  {
    texto: "Qual é o seu objetivo principal?",
    opcoes: [
      { texto: "Ganhar massa muscular", valor: "massa" },
      { texto: "Emagrecer com saúde", valor: "emagrecer" },
      { texto: "Ser mais saudável", valor: "saude" }
    ]
  },
  {
    texto: "Café da manhã pré-treino:",
    opcoes: [
      { texto: "Apenas café preto", valor: "ruim" },
      { texto: "Banana com aveia e ovo mexido", valor: "bom" },
      { texto: "Pulo o café da manhã", valor: "ruim" }
    ]
  },
  {
    texto: "Almoço durante a semana:",
    opcoes: [
      { texto: "Marmita equilibrada com arroz, feijão, frango e legumes", valor: "bom" },
      { texto: "Lanche da padaria", valor: "ruim" },
      { texto: "Apenas salada com frango grelhado", valor: "regular" }
    ]
  },
  {
    texto: "Lanche da tarde:",
    opcoes: [
      { texto: "Mix de castanhas e uma fruta", valor: "bom" },
      { texto: "Biscoito recheado e refrigerante", valor: "ruim" },
      { texto: "Não lancho", valor: "regular" }
    ]
  },
  {
    texto: "Final de semana:",
    opcoes: [
      { texto: "Mantenho equilíbrio", valor: "bom" },
      { texto: "Tudo liberado", valor: "ruim" },
      { texto: "Sigo a dieta à risca", valor: "regular" }
    ]
  }
];

let etapa = 0;
let escolhas = [];

function responder(valor) {
  escolhas.push(valor);
  etapa++;
  if (etapa < perguntas.length) {
    atualizarPergunta();
  } else {
    mostrarResultado();
  }
}

function atualizarPergunta() {
  const pergunta = perguntas[etapa];
  document.getElementById('pergunta').innerText = pergunta.texto;
  const botoes = document.getElementById('botoes');
  botoes.innerHTML = "";
  pergunta.opcoes.forEach(opcao => {
    const btn = document.createElement('button');
    btn.innerText = opcao.texto;
    btn.onclick = () => responder(opcao.valor);
    botoes.appendChild(btn);
  });
}

function mostrarResultado() {
  let bons = escolhas.filter(e => e === 'bom').length;
  let regulares = escolhas.filter(e => e === 'regular').length;
  let ruins = escolhas.filter(e => e === 'ruim').length;
  let objetivo = escolhas[0];

  let resultado = '';

  if (bons >= 3) {
    resultado = "Parabéns! Você fez escolhas consistentes e alinhadas ao seu objetivo. Seu corpo está mais saudável e você está no caminho certo!";
  } else if (bons >= 1 && ruins <= 2) {
    resultado = "Você está no caminho certo, mas algumas decisões precisam de mais atenção. Com um pouco mais de equilíbrio, seus resultados virão!";
  } else {
    resultado = "Seu corpo está pedindo mais cuidado! Muitas escolhas ruins podem estar afetando sua saúde. Que tal recomeçar com mais consciência?";
  }

  document.getElementById('pergunta').innerText = resultado;
  document.getElementById('botoes').innerHTML = '<button onclick="location.reload()">Recomeçar</button>';
}

// Cursor customizado
document.addEventListener('mousemove', (e) => {
  const cursor = document.getElementById('cursor');
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});
