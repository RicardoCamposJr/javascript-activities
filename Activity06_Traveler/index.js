//Entrada inicial de dados:
let turistName = window.prompt("Nome:")
let choice = window.prompt("Já visitou alguma cidade?\n[1] Sim\n[2] Não")
let citiesNames = null
let amountCities = 0

//Estrutura de repetição:
while (choice == 1) {
    if (amountCities === 0){
        citiesNames = window.prompt("Qual o nome da cidade?")
        amountCities++
    } else {
        citiesNames += ", " + window.prompt("Qual o nome da cidade?")
        amountCities++
    }
    choice = window.prompt("Já visitou mais alguma cidade?\n[1] Sim\n[2] Não")
}

//Saída de dados:
alert("O turista " + turistName + " já visitou " + amountCities + " cidades!")
alert("Aqui estão elas: " + citiesNames)