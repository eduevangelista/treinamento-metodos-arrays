const elementoParaInserirLivros = document.querySelector('#livros')
const elementoComValorTotalDeLivrosDisponiveis = document.querySelector('#valor_total_livros_disponiveis')

function exibirLivrosNaTela(listaDeLivros) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
  elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
        //let disponibilidade = verificarDisponibilidade(livro)
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livros__imagens indisponivel'
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}"  src="${livro.imagem}" alt="${livro.alt}"/>
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
  `
    });
}

/* cria uma funçao para deixar dinamico os livros que nao tem disponivel em estoque ( quantidade <= 0)
function verificarDisponibilidade(livro) {
  if (livro.quantidade > 0 ){
    return 'livro__imagens'
  }else{
    return 'livros__imagens indisponivel'
  }
}
*/