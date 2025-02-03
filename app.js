let nomesAdicionados = [];
let nomesParaSortear = [];
let nomesSorteados = [];
let nome;
let amigoSorteado;
let listaAmigosTela;


function adicionarAmigo(){ 
    nome = document.querySelector('#amigo').value;

    if(nome == '' || nome.trim() == '') {
        alert("Por favor, insira um nome!");
       
    } else {
        nomesAdicionados.push(nome);
        nomesParaSortear.push(nome);
        limparCampoNome('#amigo');
        percorrerAmigos(nomesAdicionados);
    }
}

function limparCampoNome(idCampo) {
    nome = document.querySelector(idCampo);
    nome.value = '';
}

function percorrerAmigos() {
    listaAmigosTela = document.querySelector('#listaAmigos');
    listaAmigosTela.innerHTML = '';

    for(nome of nomesAdicionados) {
        let li = document.createElement("li"); 
        li.textContent = nome; 
        listaAmigosTela.appendChild(li); 
    };
}

function sortearAmigo() {
    if(nomesAdicionados.length == 0) {
        alert("Insira os nomes para sorteio!");
    } else if(nomesSorteados.length == nomesAdicionados.length) {
        alert("Todos os nomes foram sorteados");
        limparVariaveis();
        exibirMensagemTela('');
    } 
    else {
        amigoSorteado = nomesParaSortear[Math.floor(Math.random() * nomesParaSortear.length)];
        nomesParaSortear = nomesParaSortear.filter(nome => nome !== amigoSorteado);
        nomesSorteados.push(amigoSorteado);
        exibirMensagemTela(`O amigo secreto sorteado é ${amigoSorteado}`);
    }

    ocultarListaAmigos();
}

function ocultarListaAmigos() {
    listaAmigosTela.innerHTML = '';
}

function exibirMensagemTela(texto) {
    document.querySelector('#resultado').innerHTML = texto;
}

function limparVariaveis() {
    nomesAdicionados = [];
    nomesParaSortear = [];
    nomesSorteados = [];
    amigoSorteado = '';
}
