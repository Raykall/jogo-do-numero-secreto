function verificarChuteValorValido(chute){
    const numero = +chute

    if (chuteForInvalido(numero)){

        if (chute === "game over") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        } else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
      return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML +=`<div>Valor invalido: Fale um numero entre ${menorValor} e ${maiorValor}</div>`

        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
         <h2> Você Acertou!</h2>
         <h3> O numero secreto era ${numeroSecreto} -
         Parabéns Cabrito(a)!</h3>

         <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `

    }else if(numero += chute > numeroSecreto){
        elementoChute.innerHTML += `
        <div class="numero-secreto">O Numero secreto é menor <i class="fa-solid fa-arrow-down"></i></div> `
    } else {
        elementoChute.innerHTML += `
        <div class="numero-secreto">O Numero secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }

}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}




document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})
