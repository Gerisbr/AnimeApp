function ConsultaAPI() {
    const animeAPI = "https://api.jikan.moe/v3/season/2021/spring";
    let objetoAnimes = [];
    $.ajax({
        url: animeAPI,
        async: false,
        success: function(dados) {
            objetoAnimes = dados.anime;

        }
    });

    return objetoAnimes;
}

ConsultaAPI();

/*
ANIMES FIXOS - PREPARADOS
let objetoAnimes = [{
        foto: "black-clover.jpg",
        nome: "Black Clover"
    },
    {
        foto: "boku-no-hero.jpg",
        nome: "Boku No Hero Academy"
    },
    {
        foto: "nanatsu.jpg",
        nome: "Nanatsu No Taizai"
    },
    {
        foto: "tokyo.jpg",
        nome: "Tokyo Ghoul"
    },
    {
        foto: "naruto-ship.jpg",
        nome: "Naruto Shippuuden"
    },
    {
        foto: "one-piece.jpg",
        nome: "One Piece"
    }
]
*/

function MontarCartao(foto, nome, score, url) {
    let cartao = "";
    cartao += "<button class='botao' href='" + url + "'>";
    cartao += "<div class='cartao'>";
    cartao += "<img class='botao-img'  src='" + foto + "'>";
    cartao += "<h4 class='title-card'>" + nome + "</h4>";
    cartao += "<h4>" + score + "</h4>"

    cartao += "</div>"
    cartao += "</button>";
    return cartao;
}

function CarregarAnimes() {

    let listaAnimes = document.querySelector(".lista-animes");
    let conjuntoDeCartoes = "";
    let todosAnimes = ConsultaAPI();

    todosAnimes.forEach(animeAtivo => {
        conjuntoDeCartoes += MontarCartao(animeAtivo.image_url, animeAtivo.title, animeAtivo.score, animeAtivo.url);
    });
    listaAnimes.innerHTML = conjuntoDeCartoes;
}

//Carregar por botão
//document.querySelector("#btAnimes").onclick = function() {
//CarregarAnimes();
//}

//Carregar só por abrir a página
window.onload = function() {
    CarregarAnimes();
}