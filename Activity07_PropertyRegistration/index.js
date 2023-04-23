let properties = []
let choice = window.prompt("Número de propriedades cadastradas: " + properties.length + "\nO que deseja realizar?\n[1] - Cadastrar propriedade\n[2] - Mostrar imóveis cadastrados\n[3] - Sair")

while (choice !== "3"){

    if (choice === "1") {
        let property = {}
        property.owner = window.prompt("Nome do proprietário:")
        property.amountBedrooms = parseInt(window.prompt("Quantidade de quartos:"))
        property.amountBathrooms = parseInt(window.prompt("Quantidade de banheiros:"))
        property.garage = confirm("O imóvel possui garagem?")
        properties.push(property)

    } else if (choice === "2") {
        alert("Imóveis cadastrados:")
        let i = 0
        for (i; i < properties.length; i++) {
            alert("Propriedade n°" + (i + 1) + "\nNome do proprietário: " + properties[i].owner + "\nQuantidade de quartos: " + properties[i].amountBedrooms + "\nQuantidade de banheiros: " + properties[i].amountBathrooms)
        }
    }
    choice = window.prompt("Número de propriedades cadastradas: " + properties.length + "\nO que deseja realizar?\n[1] - Cadastrar propriedade\n[2] - Mostrar imóveis cadastrados\n[3] - Sair")
}