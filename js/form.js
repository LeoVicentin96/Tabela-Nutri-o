// selecionando o botão na pagina
let botaoAdicionar = document.querySelector('#adicionar-paciente')

//Adicionando uma evendo de click no botão , que vai executar uma função , event serve pra tirar comportamento padrão da pag
botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault()

  //selecionando o formulario
  let form = document.querySelector('#form-adiciona')

  // Chamando a funçao pra pegar dados do form
  let paciente = obtemInformacaoDoForm(form)

  //Variavel de validação antes de adicionar na tabela
  let erros = validaPaciente(paciente)
  console.log(erros)

  // exibe mensagens de erros no html , atraves do arrays de erros.
  if (erros.length > 0) {
    exibeMensagensDeErro(erros)
    return
  }

  adicionaPacienteNaTebela(paciente)

  //Limpa o form depois de add
  form.reset()

  //limpa as mensagens de erro
  let mensagemErro = document.querySelector('#mensagens-erro')
  mensagemErro.innerHTML = ''
})

//-----//
function adicionaPacienteNaTebela(paciente) {
  // chamando a função pra montar a Tr do paciente
  let pacienteTr = montaTr(paciente)

  // Selecionando o Tbody para inserir a Tr dentro
  let tabela = document.querySelector('#tabela-pacientes')

  // colocando a Tr como dentro do Tbody (Colocando a Tr como filho do Tbody)//
  tabela.appendChild(pacienteTr)
}

//função criada para exibir os erros na pagina
function exibeMensagensDeErro(erros) {
  var ul = document.querySelector('#mensagens-erro')
  ul.innerHTML = ''

  //percorre a lista de erros do arrays , igual ao for e cria o elemento no html
  erros.forEach(function (erro) {
    var li = document.createElement('li')
    li.textContent = erro
    ul.appendChild(li)
  })
}

//----------------FUNÇOES--------------- //

// Pegando os valores de dentro dos inputs do formulario
// utilizando os names dos inputs e colocando a propriedade de value
//Criando a funçao para pegar os dados do paciente e criando um objeto
//que é o paciente com varias propriedades

function obtemInformacaoDoForm(form) {
  let paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  }

  return paciente
}

// Criando a função de montar a Tr e add uma classe a ela.
function montaTr(paciente) {
  let pacienteTr = document.createElement('tr')
  pacienteTr.classList.add('paciente')

  // Colocando as Tds dentros da Tr como filhos , as tds estao sendo criadas com a função monta td que recebe um dado e add uma classe//
  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
  pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
  pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

  return pacienteTr
}

//Criando a funçao pra montar as td , ela cria a td , e recebe dois parametros (dado = nome,peso,altura,gordura,imc e tbm a classe que vai ser add)
function montaTd(dado, classe) {
  let td = document.createElement('td')
  td.textContent = dado
  td.classList.add(classe)

  return td
}

//função para validação de paciente
function validaPaciente(paciente) {
  let erros = []

  if (paciente.nome.length == 0) {
    erros.push('O nome não pode ser em branco !')
  }

  if (!validaPeso(paciente.peso)) {
    erros.push('Peso Inválido !')
  }

  if (paciente.peso.length == 0) {
    erros.push('Peso não pode ser em branco !')
  }

  if (!validaAltura(paciente.altura)) {
    erros.push('Altura Inválida !')
  }

  if (paciente.altura.length == 0) {
    erros.push('Altura não pode ser em branco !')
  }

  if (paciente.gordura.length == 0) {
    erros.push('Gordura não pode ser em branco !')
  }

  return erros
}
