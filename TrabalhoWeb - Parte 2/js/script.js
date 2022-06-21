/* Aula 24 Desafio Refatoracao */

// ELEMENTOS DA 1a CARTA APENAS
let imgFoto       = document.querySelector('#foto')
let nacao          = document.querySelector('#nacao')
let casa            = document.querySelector('#casa')
let descricao         = document.querySelector('#descricao')
let personagens          = document.querySelector('#personagens')


// section que acomoda todas as cartas
let sectionConteudos = document.querySelector('.conteudos')
let urlDeBusca = '${window}'
// ENDERECO DO ARQUIVO JSON

const url = 'cards.json'


function pegarDados(i) {
  fetch(url)
    .then( response => response.json() )
    .then( dados => {
        if(dados.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }
        // console.log(dados)
        // Quantidade de personagens
        let qtdPersonagens = (dados.personagens.length)
        console.log("Quant. de Personagens " + qtdPersonagens)
        // passe o valor de i no parametro
        atribuirDados2(dados, i)
    })
} // fim pegarDados

// atribuir dados individualmente, ou seja, so para uma carta
// ela so funciona se for chamada dentro da funcao pegarDados
function atribuirDados(dados, i) {
    imgFoto.setAttribute('src', "images/pride/"+dados.personagens[i].foto)
    nacao.textContent          = dados.personagens[i].nacao
    casa.textContent           = dados.personagens[i].casa
    descricao.textContent          = dados.personagens[i].descricao + " anos"
    personagens.textContent           = (dados.personagens[i].personagens).toString(2) + " Kg"
} 


// SELECIONAR TODOS OS CARDS por class
let imgsFoto                 = document.getElementsByClassName('foto')
let nacaoPersonagens         = document.getElementsByClassName('nacao')
let casaPersonagens            = document.getElementsByClassName('casa')
let descricaoPersonagens        = document.getElementsByClassName('descricao')
let personagensPersonagens       = document.getElementsByClassName('personagens')


// ATRIBUIR DADOS PARA TODOS OS CARDs
// Selecionamos eles por class, com isso temos um array para cada elemento
// agora vamos atribuir para cada posicao os valores que pegamos
function atribuirDados2(dados, i) {
    imgsFoto[i].setAttribute('src', "images/pride/"+dados.personagens[i].foto)
    nacaoPersonagens[i].textContent         = dados.personagens[i].nacao
    casaPersonagens[i].textContent            = dados.personagens[i].casa
    descricaoPersonagens[i].textContent         = dados.personagens[i].descricao
    personagensPersonagens[i].textContent          = dados.personagens[í].personagens
   
}


// usamos as funcoes createElement e appendChild
// para criar article (elemento html que vai acomodar cada carta)
// criamos tambem img, h2 e h3. Depois colocamos eles dentro do article
function desenharCarta(id) {

    
    pegarDados(id)
}

// 1a carta pegamos os dados. Ela ja esta desenhada na tela
pegarDados(0)

// 2a carta em diante desenhamos em tela usando as funcoes

 desenharCarta(1) 
 {

    // CARD
    let carta = document.createElement("article")
    carta.setAttribute('class', 'card')
    sectionConteudos.appendChild(carta)

    // NOME DO PERSONAGENS
    let nacaoPersonagens = document.createElement("h2")
    nacaoPersonagens.setAttribute('class', 'nacao')
    carta.appendChild(nacaoPersonagens)
    nacaoPersonagens.textContent = "FLORESTA"

    // IMAGEM DENTRO DO CARD
    let foto = document.createElement("img")
    carta.appendChild(foto)
    foto.setAttribute('class', 'foto')
    foto.setAttribute('src', 'imagens/elfo.jpg')

    // CASA DO PERSONAGENS
    let casaPersonagens = document.createElement("h3")
    casaPersonagens.setAttribute('class', 'casa')
    carta.appendChild(casaPersonagens)
    casaPersonagens.textContent = "Casa: ÉPICA"

    // DESCRICAO DO PERSONAGENS
    let descricaoPersonagens = document.createElement("h3")
    descricaoPersonagens.setAttribute('class', 'descricao')
    carta.appendChild(descricaoPersonagens)
    descricaoPersonagens.textContent = "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 

    // PERSONAGENS DA SAGA
    let personagensPersonagens = document.createElement("h3")
    personagensPersonagens.setAttribute('class', 'personagens')
    carta.appendChild(personagensPersonagens)
    personagensPersonagens.textContent = "Personagens: Elfos e Gnomos" 

    
    pegarDados(1)
}

  
desenharCarta(2)
 {
    // CARD
    let carta = document.createElement("article")
    carta.setAttribute('class', 'card')
    sectionConteudos.appendChild(carta)

    // NOME DO PERSONAGENS
    let nacaoPersonagens = document.createElement("h2")
    nacaoPersonagens.setAttribute('class', 'nacao')
    carta.appendChild(nacaoPersonagens)
    nacaoPersonagens.textContent = "CIDADE"

    // IMAGEM DENTRO DO CARD
    let foto = document.createElement("img")
    carta.appendChild(foto)
    foto.setAttribute('class', 'foto')
    foto.setAttribute('src', 'imagens/humano.png')

    // CASA DO PERSONAGENS
    let casaPersonagens = document.createElement("h3")
    casaPersonagens.setAttribute('class', 'casa')
    carta.appendChild(casaPersonagens)
    casaPersonagens.textContent = "Casa: CLÉRIGA"

    // DESCRICAO DO PERSONAGENS
    let descricaoPersonagens = document.createElement("h3")
    descricaoPersonagens.setAttribute('class', 'descricao')
    carta.appendChild(descricaoPersonagens)
    descricaoPersonagens.textContent = "dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 

    // PERSONAGENS DA SAGA
    let personagensPersonagens = document.createElement("h3")
    personagensPersonagens.setAttribute('class', 'personagens')
    carta.appendChild(personagensPersonagens)
    personagensPersonagens.textContent = "Personagens: Humanos E Anões" 

   
    pegarDados(2)
}
desenharCarta(3)
 {
    // CARD
    let carta = document.createElement("article")
    carta.setAttribute('class', 'card')
    sectionConteudos.appendChild(carta)

    // NOME DO PERSONAGENS
    let nacaoPersonagens = document.createElement("h2")
    nacaoPersonagens.setAttribute('class', 'nacao')
    carta.appendChild(nacaoPersonagens)
    nacaoPersonagens.textContent = "MAGIA"

    // IMAGEM DENTRO DO CARD
    let foto = document.createElement("img")
    carta.appendChild(foto)
    foto.setAttribute('class', 'foto')
    foto.setAttribute('src', 'imagens/mago.jpg')

    // CASA DO PERSONAGENS
    let casaPersonagens = document.createElement("h3")
    casaPersonagens.setAttribute('class', 'casa')
    carta.appendChild(casaPersonagens)
    casaPersonagens.textContent = "Casa: Magnanima"

    // DESCRICAO DO PERSONAGENS
    let descricaoPersonagens = document.createElement("h3")
    descricaoPersonagens.setAttribute('class', 'descricao')
    carta.appendChild(descricaoPersonagens)
    descricaoPersonagens.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 

    // PERSONAGENS DA SAGA
    let personagensPersonagens = document.createElement("h3")
    personagensPersonagens.setAttribute('class', 'personagens')
    carta.appendChild(personagensPersonagens)
    personagensPersonagens.textContent = "Personagens: Magos e Bruxos" 

   
    pegarDados(3)
}
desenharCarta(4)
 {
    // CARD
    let carta = document.createElement("article")
    carta.setAttribute('class', 'card')
    sectionConteudos.appendChild(carta)

    // NOME DO PERSONAGENS
    let nacaoPersonagens = document.createElement("h2")
    nacaoPersonagens.setAttribute('class', 'nacao')
    carta.appendChild(nacaoPersonagens)
    nacaoPersonagens.textContent = "DRUIDAS"

    // IMAGEM DENTRO DO CARD
    let foto = document.createElement("img")
    carta.appendChild(foto)
    foto.setAttribute('class', 'foto')
    foto.setAttribute('src', 'imagens/druida.jpg')

    // CASA DO PERSONAGENS
    let casaPersonagens = document.createElement("h3")
    casaPersonagens.setAttribute('class', 'casa')
    carta.appendChild(casaPersonagens)
    casaPersonagens.textContent = "Casa: Nordica"

    // DESCRICAO DO PERSONAGENS
    let descricaoPersonagens = document.createElement("h3")
    descricaoPersonagens.setAttribute('class', 'descricao')
    carta.appendChild(descricaoPersonagens)
    descricaoPersonagens.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 

    // PERSONAGENS DA SAGA
    let personagensPersonagens = document.createElement("h3")
    personagensPersonagens.setAttribute('class', 'personagens')
    carta.appendChild(personagensPersonagens)
    personagensPersonagens.textContent = "Personagens: Bárbaros e Monges" 

   
    pegarDados(4)
}

desenharCarta(5)
 {
    // CARD
    let carta = document.createElement("article")
    carta.setAttribute('class', 'card')
    sectionConteudos.appendChild(carta)

    // NOME DO PERSONAGENS
    let nacaoPersonagens = document.createElement("h2")
    nacaoPersonagens.setAttribute('class', 'nacao')
    carta.appendChild(nacaoPersonagens)
    nacaoPersonagens.textContent = "GUARDIA"

    // IMAGEM DENTRO DO CARD
    let foto = document.createElement("img")
    carta.appendChild(foto)
    foto.setAttribute('class', 'foto')
    foto.setAttribute('src', 'imagens/guerreiro.jpg')

    // CASA DO PERSONAGENS
    let casaPersonagens = document.createElement("h3")
    casaPersonagens.setAttribute('class', 'casa')
    carta.appendChild(casaPersonagens)
    casaPersonagens.textContent = "Casa: Guerreira"

    // DESCRICAO DO PERSONAGENS
    let descricaoPersonagens = document.createElement("h3")
    descricaoPersonagens.setAttribute('class', 'descricao')
    carta.appendChild(descricaoPersonagens)
    descricaoPersonagens.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 

    // PERSONAGENS DA SAGA
    let personagensPersonagens = document.createElement("h3")
    personagensPersonagens.setAttribute('class', 'personagens')
    carta.appendChild(personagensPersonagens)
    personagensPersonagens.textContent = "Personagens: Draconato e Clérigo" 

   
    pegarDados(5)
}
desenharCarta(6)
 {
    // CARD
    let carta = document.createElement("article")
    carta.setAttribute('class', 'card')
    sectionConteudos.appendChild(carta)

    // NOME DO PERSONAGENS
    let nacaoPersonagens = document.createElement("h2")
    nacaoPersonagens.setAttribute('class', 'nacao')
    carta.appendChild(nacaoPersonagens)
    nacaoPersonagens.textContent = "CASTELOS"

    // IMAGEM DENTRO DO CARD
    let foto = document.createElement("img")
    carta.appendChild(foto)
    foto.setAttribute('class', 'foto')
    foto.setAttribute('src', 'imagens/bruxo.jpg')

    // CASA DO PERSONAGENS
    let casaPersonagens = document.createElement("h3")
    casaPersonagens.setAttribute('class', 'casa')
    carta.appendChild(casaPersonagens)
    casaPersonagens.textContent = "Casa: Monges"

    // DESCRICAO DO PERSONAGENS
    let descricaoPersonagens = document.createElement("h3")
    descricaoPersonagens.setAttribute('class', 'descricao')
    carta.appendChild(descricaoPersonagens)
    descricaoPersonagens.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 

    // PERSONAGENS DA SAGA
    let personagensPersonagens = document.createElement("h3")
    personagensPersonagens.setAttribute('class', 'personagens')
    carta.appendChild(personagensPersonagens)
    personagensPersonagens.textContent = "Personagens: Mago e Bruxos" 

   
    pegarDados(6)
}
desenharCarta(7)
 {
    // CARD
    let carta = document.createElement("article")
    carta.setAttribute('class', 'card')
    sectionConteudos.appendChild(carta)

    // NOME DO PERSONAGENS
    let nacaoPersonagens = document.createElement("h2")
    nacaoPersonagens.setAttribute('class', 'nacao')
    carta.appendChild(nacaoPersonagens)
    nacaoPersonagens.textContent = "ARCANJOS"

    // IMAGEM DENTRO DO CARD
    let foto = document.createElement("img")
    carta.appendChild(foto)
    foto.setAttribute('class', 'foto')
    foto.setAttribute('src', 'imagens/anjo.jpg')

    // CASA DO PERSONAGENS
    let casaPersonagens = document.createElement("h3")
    casaPersonagens.setAttribute('class', 'casa')
    carta.appendChild(casaPersonagens)
    casaPersonagens.textContent = "Casa: Alada"

    // DESCRICAO DO PERSONAGENS
    let descricaoPersonagens = document.createElement("h3")
    descricaoPersonagens.setAttribute('class', 'descricao')
    carta.appendChild(descricaoPersonagens)
    descricaoPersonagens.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 

    // PERSONAGENS DA SAGA
    let personagensPersonagens = document.createElement("h3")
    personagensPersonagens.setAttribute('class', 'personagens')
    carta.appendChild(personagensPersonagens)
    personagensPersonagens.textContent = "Personagens: Fada e Anjos" 

   
    pegarDados(7)
}

desenharCarta(8)
 {
    // CARD
    let carta = document.createElement("article")
    carta.setAttribute('class', 'card')
    sectionConteudos.appendChild(carta)

    // NOME DO PERSONAGENS
    let nacaoPersonagens = document.createElement("h2")
    nacaoPersonagens.setAttribute('class', 'nacao')
    carta.appendChild(nacaoPersonagens)
    nacaoPersonagens.textContent = "PALADINOS"

    // IMAGEM DENTRO DO CARD
    let foto = document.createElement("img")
    carta.appendChild(foto)
    foto.setAttribute('class', 'foto')
    foto.setAttribute('src', 'imagens/paladino.jpg')

    // CASA DO PERSONAGENS
    let casaPersonagens = document.createElement("h3")
    casaPersonagens.setAttribute('class', 'casa')
    carta.appendChild(casaPersonagens)
    casaPersonagens.textContent = "Casa: Picos"

    // DESCRICAO DO PERSONAGENS
    let descricaoPersonagens = document.createElement("h3")
    descricaoPersonagens.setAttribute('class', 'descricao')
    carta.appendChild(descricaoPersonagens)
    descricaoPersonagens.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 

    // PERSONAGENS DA SAGA
    let personagensPersonagens = document.createElement("h3")
    personagensPersonagens.setAttribute('class', 'personagens')
    carta.appendChild(personagensPersonagens)
    personagensPersonagens.textContent = "Personagens: Ladino e Bardo" 

   
    pegarDados(8)
}



