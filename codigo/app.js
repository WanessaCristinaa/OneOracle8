let amigos = [];


function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim(); 

  if (nome === "") {
    alert("ERRO! Por favor, insira um nome válido!");
    return;
  }

  if (amigos.includes(nome)) {
    alert("ERRO! Esse nome já foi adicionado!");
    return;
  }

  amigos.push(nome);
  input.value = ""; 
  atualizarLista();
}

const input = document.getElementById("amigo");
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    adicionarAmigo(); 
  }
});


function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; 

  amigos.forEach((nome) => {
    const item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um nome antes de sortear!");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[indiceSorteado];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${nomeSorteado}</strong></li>`;
}