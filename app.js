function sortear(){
    let numeroSorteados = [];
    let qntNum = parseInt(document.getElementById('quantidade').value);
    let deNum = parseInt(document.getElementById('de').value);
    let ateNum = parseInt(document.getElementById('ate').value);


    if (isNaN(qntNum) || isNaN(deNum) || isNaN(ateNum)) {
        alert('Erro! Campo(s) não informado(s)');
        return;
    }

    if (deNum >= ateNum) {
        alert('Erro! campo "do número" não pode ser maior/igual que "até o número"');
        return;
    }

    if (quantidade > (ateNum - deNum + 1)) {
        alert('Erro! campo "quantidade" maior que o intervalo entre os campos "do número" e o "até o número');
        return;
    }

    for (let i = 0; i < qntNum; i++ ){
        let numSorteado = sortearNumero(deNum, ateNum);
        while (numeroSorteados.includes(numSorteado)){
            numSorteado = sortearNumero(deNum, ateNum);
        }
        numeroSorteados.push(numSorteado);
    }


    exibirSorteados(numeroSorteados);
    alterarStatusDoBotao('habilitar');
}

function sortearNumero(min, max){
    return parseInt(Math.random() * (max - min + 1) + min);
}

function exibirSorteados(mensagem){
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números Sorteados:  ${mensagem}</label>`;
}

function alterarStatusDoBotao(status){
    let botao = document.getElementById('btn-reiniciar');

    if (status == 'habilitar'){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } 
    
    if (status == 'desabilitar') {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    alterarStatusDoBotao('desabilitar');
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    exibirSorteados('nenhum');
}