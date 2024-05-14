let numeroAleatorio = [];

function sortear(){
    const botaoSortear = document.getElementById('btn-sortear')
    if (botaoSortear.classList.contains('container__botao-desabilitado')) {
        return;
    }
    let quantidadeDeElementos = parseInt(document.getElementById('quantidade').value);
    let numeroMin = parseInt(document.getElementById('de').value);
    let numeroMax = parseInt(document.getElementById('ate').value);
    let condicionalWhile = quantidadeDeElementos;
    while (condicionalWhile >= 1) {
        numeroAleatorio.push(gerarNumeroAleatorio(numeroMin, numeroMax));
        condicionalWhile--
    }
    console.log(numeroAleatorio.join(", "));
    alterarTextoPosSorteio();
    numeroAleatorio = [];
}

function gerarNumeroAleatorio(min, max) {
    numeroGerado =  Math.floor(Math.random() * (max - min + 1)) + min;
    if (numeroAleatorio.includes(numeroGerado)){
        numeroGerado = gerarNumeroAleatorio(min, max);
    } else return numeroGerado;
    return numeroGerado;
}   

function alterarTextoPosSorteio() {
    let textoParagrafo = document.getElementById('resultado');
    textoParagrafo.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numeroAleatorio.join(", ")}</label>`
    alterarAcessibilidadeDosBotoes();
}   

function alterarAcessibilidadeDosBotoes(){
    const botaoReiniciar = document.getElementById('btn-reiniciar');
    const botaoSortear = document.getElementById('btn-sortear');
    botaoReiniciar.classList.remove('container__botao-desabilitado');
    botaoReiniciar.classList.add('container__botao');
    botaoSortear.classList.remove('container__botao');
    botaoSortear.classList.add('container__botao-desabilitado');
}

function reiniciar(){
    const botaoReiniciar = document.getElementById('btn-reiniciar');
    const botaoSortear = document.getElementById('btn-sortear');
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        return
    }
    botaoReiniciar.classList.remove('container__botao');
    botaoReiniciar.classList.add('container__botao-desabilitado');
    botaoSortear.classList.remove('container__botao-desabilitado');
    botaoSortear.classList.add('container__botao');
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

}
