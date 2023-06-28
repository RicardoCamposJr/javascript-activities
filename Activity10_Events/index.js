function createLabel(text, htmlFor) {
  const label = document.createElement('label')
  label.innerText = text
  label.htmlFor = htmlFor
  return label
}

function createInput(id, name, value, type = 'text') {
  const input = document.createElement('input')
  input.id = id
  input.name = name
  input.value = value
  input.type = type
  input.name = name
  return input
}


function signUp(event) {

  //Recebendo o index da linha em que está sendo criada a tecnologia:
  const rowIndex = rows

  //Atualizando o numero de linhas que existem na lista:
  rows++

  //Recebendo a lista das tecnologias:
  const technologies = document.getElementById('techList')

  //Criando uma linha para adicionar uma tecnologia:
  const techRow = document.createElement('li')
  //O id da linha será o index dela:
  techRow.id = rowIndex
  //Adicionando a linha na classe referente às tecnologias:
  techRow.className = 'technologies'

  //Criando o label para pôr na linha da lista:
  const technologyLabel = createLabel("Tecnologia: ", rows)

  //Criando o input do label criado acima:
  const technologyInput = createInput(rowIndex, 'tech', null, 'text')

  //Criando o form tipo radio:

  /*Nos inputs do tipo radio, os ids precisam se diferir entre os inputs da mesma linha e de outras.
  Já os names, precisam sesr iguais entre os inputs da mesma linha e diferir das outras, caso contrário,
  os valores marcados serão duplicados aos demais inputs por conta do name ser igual.*/
  const expLabel = createLabel('Experiência: ')
  const radioButton0 = createInput('radioId0-' + rowIndex, 'radioName-' + rowIndex, '0-2 anos', 'radio')
  const labelRadioButton0 = createLabel('0-2 anos', 'radioId0-' + rowIndex)
  const radioButton1 = createInput('radioId1-' + rowIndex, 'radioName-' + rowIndex, '3-4 anos', 'radio')
  const labelRadioButton1 = createLabel('3-4 anos', 'radioId1-' + rowIndex)
  const radioButton2 = createInput('radioId2-' + rowIndex, 'radioName-' + rowIndex, '5+ anos', 'radio')
  const labelRadioButton2 = createLabel('5+ anos', 'radioId2-' + rowIndex)

  //Criando um botão para a remoção:
  const removeBtn = document.createElement('button')
  removeBtn.type = 'button'
  removeBtn.innerText = "Excluir"
  removeBtn.addEventListener('click', function() {
    technologies.removeChild(techRow)
  })

  //Inserindo os elementos criados na linha da lista:
  techRow.append(technologyLabel,technologyInput, expLabel, radioButton0, labelRadioButton0, radioButton1, labelRadioButton1, radioButton2, labelRadioButton2, removeBtn)

  //Inserindo a linha na lista:
  technologies.appendChild(techRow)
  
}

//Recebendo o botão de cadastro do usuário:
const signUpButton = document.getElementById("btn-user");

//Adicionando o evento ao botão:
signUpButton.addEventListener('click', signUp);

//Array que armazena os devs:
const arrayDevs = []

//Linhas da lista de tecnologias:
let rows = 0


//Armazenando as informações do form ao array de devs:


//Recebendo o form:
const form = document.getElementById('formDev')

//Adicionando um evento ao form:

/*Esse evento é disparado quando uma ação do tipo submit é realizada na página, por isso é adicionado
um evento ao form.*/
form.addEventListener('submit', function(event) {
  event.preventDefault()
  let dev = {}
  const fullname = document.getElementById('username').value
  const rowsTech = document.querySelectorAll('.technologies')

  let technologies = []

  rowsTech.forEach(function(row){
    const techName = document.querySelector('#' + row.id + ' input[name="tech"]').value
    console.log(techName)
  })
})
