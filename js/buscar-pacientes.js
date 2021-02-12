let botaoBuscar = document.querySelector('#buscar-pacientes')

//colocando escutador de envento no botao
botaoBuscar.addEventListener('click', function () {
  console.log('Buscando pacientes...')

  // Criando uma Requisicao http
  let xhr = new XMLHttpRequest()

  //abrindo a conexao GET com a api
  xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')

  //Escutando a resposta quando estiver carregada
  xhr.addEventListener('load', function () {
    let erroAjax = document.querySelector('#erro-ajax')
    if (xhr.status == 200) {
      erroAjax.classList.add('invisivel')
      let resposta = xhr.responseText // é a resposta em texto da requisição
      let pacientes = JSON.parse(resposta) // transforma a api que vem em formato de string para um array js , ou objeto

      //passando por todos pacientes com forEach
      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTebela(paciente) // usando a função de adicionar pacientes na tabela
      })
    } else {
      console.log(xhr.status)
      console.log(xhr.responseText)
      erroAjax.classList.remove('invisivel')
    }
  })

  //enviando a requisição
  xhr.send()
})
