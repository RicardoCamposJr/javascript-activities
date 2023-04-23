//Trabalhando com funções
function menu() {
    choice = window.prompt("Qual a figura geométrica que deseja calcular a área?\n[1] - Triângulo\n[2] - Retângulo\n[3] - Quadrado\n[4] - Trapézio\n[5] - Círculo\n[6] - Sair")
    return choice
}

function triangleArea(base, height) {
    return (base * height)/2
}

function rectangleArea(base, height) {
    return base * height
}

function squareArea(side) {
    return side ** 2
}

function trapezeArea(biggerBase, smallerBase, height) {
    return ((biggerBase + smallerBase) * height) / 2
}

function circleArea(radius) {
    return 3.14 * (radius ** 2)
}

//main:
let area
alert("Bem vindo à calculadora de áreas geométricas!")
do {
    let choice = menu()
    switch (choice) {
        case "1":
            base = parseFloat(window.prompt("Insira a base do triângulo:"))
            height = parseFloat(window.prompt("Insira a altura do triângulo:"))
            area = triangleArea(base, height)
            alert("A área é: " + area + " und.")
            break;
        case "2":
            base = parseFloat(window.prompt("Insira a base do retângulo:"))
            height = parseFloat(window.prompt("Insira a altura do retângulo:"))
            area = rectangleArea(base, height)
            alert("A área é: " + area + " und.")
            break;
        case "3":
            side = parseFloat(window.prompt("Insira o lado do quadrado:"))
            area = squareArea(side)
            alert("A área é: " + area + " und.")
            break;
        case "4":
            biggerBase = parseFloat(window.prompt("Insira a base maior do trapézio:"))
            smallerBase = parseFloat(window.prompt("Insira a base menor do trapézio:"))
            height = parseFloat(window.prompt("Insira a altura do trapézio:"))
            area = trapezeArea(biggerBase, smallerBase, height)
            alert("A área é: " + area + " und.")
            break;
        case "5":
            radius = parseFloat(window.prompt("Insira o raio do cículo:"))
            area = circleArea(radius)
            alert("A área é: " + area + " und.")
            break;
    }
} while (choice !== "6")