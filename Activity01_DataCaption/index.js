//Recebimento dos dados:
let firstName = window.prompt('Insira o primeiro nome do recruta:')
let lastName = window.prompt('Insira o sobrenome do recruta:')
let studyField = window.prompt('Campo de estudo:')
let yearBirth = parseInt(window.prompt('Ano de nascimento:'))

//Processamento de dados:
age = 2023 - yearBirth

//Exibição na tela:
window.confirm('Essas informações procedem?\nNome Completo: ' + firstName + ' ' + lastName + '\nCampo de estudo: ' + studyField + '\nData de nascimento: ' + age + ' anos')