const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarlivrosPorPreco)
//funcao para ordenar os livros por preço 
function ordenarlivrosPorPreco(){
    let livrosOrdenados = livros.sort((a, b ) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenados)
}