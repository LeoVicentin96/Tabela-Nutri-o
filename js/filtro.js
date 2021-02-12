//selecionando o campo input
let campoFiltro = document.querySelector('#filtra-paciente')

//colocando um escutador e evendo no input do tipo de input
campoFiltro.addEventListener('input', function () {
  console.log(this.value)
  let pacientes = document.querySelectorAll('.paciente') //selecionando o arrays pacientes

  //colocando se o valor do input digitado for diferente de 0 adiciona ou remove uma classe
  if (this.value.length > 0) {
    for (let i = 0; i < pacientes.length; i++) {
      let paciente = pacientes[i]
      let tdNome = paciente.querySelector('.info-nome') // buscando a td info-nome
      let nome = tdNome.textContent // selecionando o texto da td

      //criando uma expressão regular para filtrar a tebela, ela busca o valor do input , e decide se é i = case insensitive ou case sensitive
      let expressao = new RegExp(this.value, 'i')
      // testando se a expressao regular é diferente ou igual ao nome
      if (!expressao.test(nome)) {
        paciente.classList.add('invisivel') //adicionando a classe display none em quem for diferenteo do input
      } else {
        paciente.classList.remove('invisivel') // removendo a classe display none
      }
    }
  } else {
    for (let i = 0; i < pacientes.length; i++) {
      let paciente = pacientes[i]
      paciente.classList.remove('invisivel')
    }
  }
})
