const formAdicionar = document.getElementById('form-adicionar');
const inputItem = document.getElementById('input-item');
const listaItens = document.getElementById('lista-itens');
const btnLimpar = document.getElementById('btn-limpar');
const contador = document.getElementById('contador'); // <span id="contador">
const filtro = document.getElementById('filtro'); // <select id="filtro">
const ordenar = document.getElementById('ordenar'); // <select id="ordenar">

let items = [];
let filtroAtivo = 'todos';

function salvarDados() {
  localStorage.setItem('lista-compras', JSON.stringify(items));
}

function atualizarContador() {
  const total = items.length;
  const comprados = items.filter(i => i.comprado).length;
  contador.textContent = `Total: ${total} | Comprados: ${comprados}`;
}

function renderizarLista() {
  listaItens.innerHTML = '';

  let itensFiltrados = items.filter(item => {
    if (filtroAtivo === 'pendentes') return !item.comprado;
    if (filtroAtivo === 'comprados') return item.comprado;
    return true;
  });

  if (ordenar.value === 'nome') {
    itensFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
  } else if (ordenar.value === 'status') {
    itensFiltrados.sort((a, b) => a.comprado - b.comprado);
  }

  itensFiltrados.forEach((item, index) => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.comprado;
    checkbox.addEventListener('change', () => {
      item.comprado = checkbox.checked;
      salvarDados();
      renderizarLista();
    });

    const span = document.createElement('span');
    span.textContent = item.nome;
    if (item.comprado) span.style.textDecoration = 'line-through';

    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'X';
    btnExcluir.className = 'btn-red';
    btnExcluir.addEventListener('click', () => {
      items.splice(index, 1);
      salvarDados();
      renderizarLista();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnExcluir);
    listaItens.appendChild(li);
  });

  atualizarContador();
}

formAdicionar.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = inputItem.value.trim();
  if (nome === '') return;
  items.push({ nome, comprado: false });
  inputItem.value = '';
  salvarDados();
  renderizarLista();
});

btnLimpar.addEventListener('click', () => {
  if (confirm('Deseja apagar toda a lista?')) {
    items = [];
    salvarDados();
    renderizarLista();
  }
});

filtro.addEventListener('change', () => {
  filtroAtivo = filtro.value;
  renderizarLista();
});

ordenar.addEventListener('change', renderizarLista);

window.addEventListener('load', () => {
  const dados = localStorage.getItem('lista-compras');
  if (dados) {
    items = JSON.parse(dados);
  }
  renderizarLista();
});
