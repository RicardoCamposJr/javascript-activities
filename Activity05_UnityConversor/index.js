//Entrada de dados:
let lengthMeters = parseFloat(window.prompt("Insira um comprimento em metros:"))
let choice = window.prompt("Escolha a unidade de medida para a conversão:\n[a] Milímetros\n[b] Centímetros\n[c] Decímetros\n[d] Decâmetros\n[e] Hectômetros\n[f] Quilômetros")
let convertedLength = null

//Processamento de dados:
switch (choice) {
    case "a":
        convertedLength = lengthMeters*1000
        alert(lengthMeters + " metros são equivalentes a " + convertedLength + " milímetros.")
        break
    case "b":
        convertedLength = lengthMeters*100
        alert(lengthMeters + " metros são equivalentes a " + convertedLength + " centímetros.")
        break
    case "c":
        convertedLength = lengthMeters*10
        alert(lengthMeters + " metros são equivalentes a " + convertedLength + " decímetros.")
        break
    case "d":
        convertedLength = lengthMeters/10
        alert(lengthMeters + " metros são equivalentes a " + convertedLength + " decâmetros.")
        break
    case "e":
        convertedLength = lengthMeters/100
        alert(lengthMeters + " metros são equivalentes a " + convertedLength + " hectômetros.")
        break
    case "f":
        convertedLength = lengthMeters/1000
        alert(lengthMeters + " metros são equivalentes a " + convertedLength + " quilômetros.")
        break
    default:
        alert("Escolha inválida!")
}