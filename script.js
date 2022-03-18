var listaPokemon = document.querySelectorAll('.pokemon')          // Desse jeito, eu pego a lista inteira pela classe ".pokemon" e jogo dentro da variável
var cartoesPokemon = document.querySelectorAll('.cartao-pokemon') // A mesma coisa aqui, só que com outra classe, a classe dos cartões 

listaPokemon.forEach(pokemon => {            // como dito acima, já que pegou a lista inteira e jogou dentro dessa variável, utilizamos o comando .forEach() para operar dentro dessa lista, ou seja, para cada elemento presente na variável junto do comando, será feita determinada ação que está dentro das chaves. Esse sinal "=>" é uma arrow function, é a mesma coisa de uma função normal, só que mais "moderna", o "pokemon" é o parametro da função (o que ficaria entre parênteses na função tradicional) 
    pokemon.addEventListener('click', clicar)

    function clicar(){

       var cartaoPokemonAberto = document.querySelector('.aberto')      // Em vez do querySelectorAll, esse só pega 1 elemento da classe .aberto, o que serve para nós, pois só tem 1 elemento com a classe .aberto (que é o Pikachu)
       cartaoPokemonAberto.classList.remove('aberto')                  // Aqui retiramos a classe .aberto da tag, tirando ela da exibição 

       var idPokemonSelecionado = pokemon.attributes.id.value         // Com esse comando, eu busco o id do pokemon que foi clicado e tenho ele declarado na variável 'idPokemonSelecionado' automaticamente

      var cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)    // Com a variável, eu só teria o nome declarado na id (que é o nome do pokemon), por isso tenho que concatenar com o "cartao-"
      cartaoPokemonParaAbrir.classList.add('aberto')


      var listaPokemonAtivo = document.querySelector('.ativo')
      listaPokemonAtivo.classList.remove('ativo')

      var listaPokemonParaAbrir = document.getElementById(idPokemonSelecionado)
      listaPokemonParaAbrir.classList.add('ativo')

    }

})


