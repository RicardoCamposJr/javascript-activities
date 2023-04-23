//Entrada de dados:
let firstCarName = window.prompt("Nome do primeiro carro:")
let firstCarSpeed = parseFloat(window.prompt("Velocidade do carro " + firstCarName + ": "))
let secondCarName = window.prompt("Nome do segundo carro:")
let secondCarSpeed = parseFloat(window.prompt("Velocidade do carro " + secondCarName + ": "))

//Lógica:
if (firstCarSpeed > secondCarSpeed) {
    alert("O carro " + firstCarName + " é mais veloz que o carro " + secondCarName + "!")
} else if (firstCarSpeed < secondCarSpeed) {
    alert("O carro " + secondCarName + " é mais veloz que o carro " + firstCarName + "!")
} else {
    alert("O carro " + firstCarName + " tem a mesma velocidade que o carro " + secondCarName + "!")
}