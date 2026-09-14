// Interação dos botões da página
document.querySelectorAll('.cta, .top-button').forEach(button => {
  button.addEventListener('click', () => {
    button.style.transform = 'scale(.98)';
    setTimeout(() => button.style.transform = '', 120);
  });
});

// Prévia educativa da Greedity.
// É uma demonstração local: não envia dados para nenhum servidor.
const input = document.getElementById('chatInput');
const send = document.getElementById('sendChat');
const messages = document.getElementById('chatMessages');

function addMessage(text, type) {
  const div = document.createElement('div');
  div.className = 'msg ' + type;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function answerQuestion(question) {
  const q = question.toLowerCase();

  if (q.includes('organizar') || q.includes('começo') || q.includes('começar')) {
    return 'Comece anotando tudo que entra e sai durante um mês. Depois separe gastos essenciais, variáveis e supérfluos. O objetivo inicial é enxergar sua realidade, não cortar tudo de uma vez.';
  }
  if (q.includes('dívida') || q.includes('divida')) {
    return 'Primeiro liste cada dívida, o valor, os juros e o vencimento. Priorize as dívidas mais caras e evite criar novas enquanto organiza as anteriores. Se a situação estiver difícil, procure orientação profissional.';
  }
  if (q.includes('reserva') || q.includes('emergência')) {
    return 'Uma reserva serve para imprevistos. Comece com uma meta possível e faça aportes regulares. Antes de investir pensando em retorno, é importante entender sua segurança financeira e sua necessidade de liquidez.';
  }
  if (q.includes('invest') || q.includes('ações') || q.includes('ação')) {
    return 'Investimentos têm riscos diferentes. Antes de escolher um produto, entenda liquidez, risco, prazo e custos. Esta prévia é educativa e não indica investimentos específicos.';
  }
  if (q.includes('juros')) {
    return 'Juros são o custo do dinheiro ao longo do tempo. Em dívidas, juros podem fazer o valor crescer; em investimentos, podem ajudar o patrimônio a crescer. Entender juros é uma das bases da educação financeira.';
  }
  if (q.includes('guardar') || q.includes('economizar')) {
    return 'Uma boa estratégia é definir primeiro um valor pequeno e sustentável para guardar assim que receber. Automatizar esse hábito pode ajudar, mas o valor precisa caber no seu orçamento real.';
  }
  return 'Boa pergunta! Na versão completa, a Greedity ajuda a explorar esse tema com explicações e passos práticos. Para começar, pense em três coisas: quanto entra, quanto sai e qual é sua prioridade financeira agora.';
}

function sendQuestion() {
  const question = input.value.trim();
  if (!question) return;
  addMessage(question, 'user');
  input.value = '';
  setTimeout(() => addMessage(answerQuestion(question), 'bot'), 300);
}

send.addEventListener('click', sendQuestion);
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') sendQuestion();
});

document.querySelectorAll('.suggestions button').forEach(button => {
  button.addEventListener('click', () => {
    input.value = button.dataset.question;
    sendQuestion();
  });
});
// JANELA PIX

const pixModal = document.getElementById("pixModal");
const pixClose = document.getElementById("pixClose");
const pixCopiar = document.getElementById("pixCopiar");
const pixMensagem = document.getElementById("pixMensagem");

// Botão de compra
const botaoCompra = document.querySelector(".price-card .cta");

botaoCompra.addEventListener("click", function(event) {

    event.preventDefault();

    pixModal.classList.add("ativo");

});

// Fechar no X
pixClose.addEventListener("click", function() {

    pixModal.classList.remove("ativo");

});

// Fechar clicando fora da janela
pixModal.addEventListener("click", function(event) {

    if (event.target === pixModal) {

        pixModal.classList.remove("ativo");

    }

});

// Copiar chave PIX
pixCopiar.addEventListener("click", function() {

    navigator.clipboard.writeText("+55 85 99121-3668");

    pixMensagem.textContent = "Chave PIX copiada!";

});