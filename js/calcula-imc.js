// selecionando todas as classe que tem o nome .pacientes/retonar uma lista de arrays
let pacientes = document.querySelectorAll('.paciente')

//Criando o loop pra percorrer a lista da tabela , i começa com 0 , vai percorrer enquanto i for menor que a lista de pacientes, e sempre adiciona i++ ao fim
for (let i = 0; i < pacientes.length; i++) {
  // criando a variavel paciente , dizendo que é uma lista de arrays com indice i que começa em 0
  let paciente = pacientes[i]

  // selecionando a tdpeso dentro de Paciente , que é uma Tr
  let tdPeso = paciente.querySelector('.info-peso')
  // pegando o conteudo de texto da tdPeso
  let peso = tdPeso.textContent

  // selecionando a tdAltura dento do Paciente ,que é uma Tr
  let tdAltura = paciente.querySelector('.info-altura')
  // pegando o conteudo de texto da TdAltura
  let altura = tdAltura.textContent

  // selecionando a td imc dentro da tr Paciente
  let tdImc = paciente.querySelector('.info-imc')

  let pesoEhValido = validaPeso(peso) // funcao validaPeso retorna true ou false
  let alturaEhValida = validaAltura(altura) // funcao validaAltura retorna true ou false

  if (!pesoEhValido) {
    console.log('Peso Invalido!') // verificando se peso é valido com If
    pesoEhValido = false // se nao for valido , PesoEhValido muda pra false.
    tdImc.textContent = 'Peso Inválido!' // e aparece essa mensagem no conteudo da Td
    paciente.classList.add('paciente-invalido') // Adicionando uma classe ao paciente invalido com css
  }

  if (!alturaEhValida) {
    console.log('Altura Invalida!') // Verificando se altura é valida com If
    alturaEhValida = false // se nao for valido , AlturaEhValido muda pra false.
    tdImc.textContent = 'Altura Inválida!' // e aparece essa mensagem no conteudo da Td
    paciente.classList.add('paciente-invalido') // Adicionando uma classe ao paciente invalido com css
  }

  // Validando se peso e altura é valido
  if (pesoEhValido && alturaEhValida) {
    let imc = calculaImc(peso, altura) // se for valido chama a função calculaImc
    tdImc.textContent = imc // alterando o conteudo da td Imc com o calculo do imc
  }
}

// função para validar se o peso esta correto
function validaPeso(peso) {
  if (peso > 0 && peso < 1000) {
    return true
  } else {
    return false
  }
}

//função para validar se a altura esta correta
function validaAltura(altura) {
  if (altura > 0 && altura < 3.0) {
    return true
  } else {
    return false
  }
}

// Criando a funçao pra calcular Imc pra aproveitar em outra parte do codigo
function calculaImc(peso, altura) {
  let imc = 0 // a variavel começa com 0 porque ainda nao foi calculada
  imc = peso / (altura * altura) // passando oque o calculo que a funçao vai executar
  return imc.toFixed(2) // retonar o valor do calculo com tofixed 2casas decimais
}
