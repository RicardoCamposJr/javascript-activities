//Entrada de dados:
let nameMainCharacter = window.prompt("Qual o nome do seu personagem?")
let damageMainCharacter = parseFloat(window.prompt("Qual o dano de seu personagem?"))
let nameEnemy = window.prompt("Qual o nome do personagem inimigo?")
let healthEnemy = parseFloat(window.prompt("Qual a saúde do personagem inimigo?"))
let defenseEnemy = parseFloat(window.prompt("Qual a defesa do personagem inimigo?"))

//Abaixo, se encontra uma forma variada de se construir uma estrutura if - else:
let shieldEnemy = window.confirm("O personagem inimigo possui escudo?") ? 50 : 0
let damageSuffered = null

//Lógica:
if (damageMainCharacter > defenseEnemy && shieldEnemy === 0) {
    damageSuffered = damageMainCharacter - defenseEnemy
} else if (damageMainCharacter > defenseEnemy && shieldEnemy !== 0) {
    damageSuffered = (damageMainCharacter - defenseEnemy)/2
    shieldEnemy /= 2
} else {
    damageSuffered = 0
}

//Resultado:
healthEnemy -= damageSuffered

//Saída de dados:
alert("O dano sofrido pelo inimigo foi de " + damageSuffered + " pontos")
alert("Informações do personagem " + nameMainCharacter + ":\nPoder de dano: " + damageMainCharacter + " pontos\n\nInformações do inimigo " + nameEnemy + ":\nDefesa: " + defenseEnemy + "\nSaúde: " + healthEnemy + "\nEscudo: " + shieldEnemy)