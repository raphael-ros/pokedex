/*
quando clicar no pokemon listagem, tenho que esconder o cartao do pokemon aberto e mostrar o cartao correspondendo ao que foi selecionado

para isso vamos usar dois elementos
1 - listagem
2 - cartao pokemon

preciso criar duas variaveis no JS para trabalhar os elementos da tela

quando clicar na listagem, trocar o cartao, evento de clique

- remover a classe 'aberto' só do cartao que está sendo visualizado
- ao clicar em um pokemon da listagem. pegar o id dele para saber qual cartao mostrar
- remover a classe 'ativo' que marca o pokemon selecionado
- adicionar a classe 'ativo' no item da listagem selecionado
 */

//criar duas variaveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemon.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        //remover a classe 'aberto' só do cartao que está sendo visualizado
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokemon da listagem, pegar o id desse pokemon para saber qual cartao mostar
        //a const de nome 'idPokemonSelecionado = valor do atributo id da classe 'pokemon' da lista 
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')


        //remover a classe 'ativo' que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe 'ativo' no item da listagem selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})