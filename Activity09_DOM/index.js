function insertPlayer() {
  //Recebendo o elemento pai do HTML.
  const ul = document.getElementById("list");

  //Recebendo os dados.
  const name = document.getElementById("name").value;
  const position = document.getElementById("position").value;
  const number = document.getElementById("numberShirt").value;

  //Criando uma linha para adicionar o jogador.
  const newPlayer = document.createElement("li")

  //Criando um id para esse jogador em específico:
  newPlayer.id = number

  //Adicionando os valores lidos na linha da lista.
  newPlayer.innerText = "Nome: " + name + " / Posição: " + position + " / Número: " + number

  //Inserindos o elemento filho no elemento pai.
  ul.appendChild(newPlayer)
}

function removePlayer() {
  //Recebendo o elemento pai:
  const ul = document.getElementById("list")

  //Recebendo o número da camisa do jogador:
  const number = document.getElementById("numberShirt").value;

  //Recebendo o elemento filho a ser removido:
  const player = document.getElementById(number)

  //Removendo o jogador da lista pai:
  ul.removeChild(player)
}