//pegando a tabela no html
var tabela = document.querySelector('#tabela-pacientes')

//colocando um evendo de 2x clicks , criando a função anonima com parametro de event
tabela.addEventListener('dblclick', function (event) {
  //adicionando uma classe ao pai do alvo clicado
  event.target.parentNode.classList.add('fadeOut')

  //pedindo pro js aguardar 500ms até remover o elemento da pagina
  setTimeout(function () {
    event.target.parentNode.remove() //removendo o pai do alvo clicado
  }, 500)
})
