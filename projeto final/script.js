const produtos = [
    {
        "imagem": "./cards/indice.jpg",
        "descricao": "Roupeiro de madeira rústica",
        "preco": "1100.00"
    },
    {
        "imagem": "./cards/indice1.jpg",
        "descricao": "Cadeira imperial ",
        "preco": "400.00"
    },
    {
        "imagem": "./cards/indice2.jpg",
        "descricao": "Jaqueta jeans",
        "preco": "60.00"
    },
    {
        "imagem": "./cards/indice3.jpg",
        "descricao": "Lote de roupas usadas",
        "preco": "150.00"

    },
    {
        "imagem": "./cards/indice4.jpg",
        "descricao": "Guarda Roupa simples",
        "preco": "550.00"
    },
    {

        "imagem": "./cards/indice5.jpg",
        "descricao": "6 cadeiras estampadas",
        "preco": "300.00"

    },
];
const input = document.querySelector(".input");
const button = document.querySelector(".button-submit");
const divCard = document.querySelector(".cards-principais");
const divprincipal = document.getElementById("principal")
const idprodutos = document.getElementById("produtos")
const divCarrinho = document.getElementById("carrinho")
const divfim = document.getElementById("fim")
const divcarrinho2 = document.getElementById("carrinho2")
const carrinho = []


for (let produto of produtos) {
    const div = document.createElement("div")
    div.classList.add("card")

    const img = document.createElement("img")
    img.setAttribute("src", produto.imagem);
    img.classList.add("card-img")
    div.appendChild(img)

    const divdescricao = document.createElement("div")
    const titulo = document.createElement("h3")
    titulo.innerText = produto.descricao
    const paragrafo = document.createElement("p")
    paragrafo.innerText = produto.preco
    divdescricao.appendChild(titulo)
    divdescricao.appendChild(paragrafo)

    div.appendChild(divdescricao);

    const divDosBotoes = document.createElement('div');
    divDosBotoes.classList.add('div-dos-botoes');

    const comprar = document.createElement("button")
    const button = document.createElement("button")
    button.innerHTML = "adicionar ao carrinho"
    button.onclick = function () {
        carrinho.push(produto)

        const paragrafocomprar = document.createElement("p")
        paragrafocomprar.innerText = `${produto.descricao} ${produto.preco}`
        divcarrinho2.appendChild(paragrafocomprar)
        button.disabled = true
        comprar.disabled = true
    };

    divDosBotoes.appendChild(button)

    comprar.innerHTML = "comprar"
    comprar.onclick = function () {
        const confirmacaodecompra = confirm(`Deseja comprar ${produto.descricao}?`)
        if (confirmacaodecompra) {
            divprincipal.removeChild(div)
        } else {

        }
    };

    divfim.onclick = function () {
        const finalizarcarinho = confirm(`deseja finalizar compra?`)
        if (finalizarcarinho) {
            divcarrinho2.innerText = null

        } else {

        }

    }

    divDosBotoes.appendChild(comprar);

    div.appendChild(divDosBotoes)


    divprincipal.appendChild(div)
}


