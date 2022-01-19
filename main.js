`use strict`//torna o navegador mais rigoroso com o codigo

function calcularImc(){
    const nome = document.querySelector('#nome').value;//pegar em elemento do HTML e transf. em um valor
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;
    const resultado = document.querySelector('#resultado');

    if(nome==='' || altura===''||peso==='' ){
        resultado.textContent='Preencha todos os campos';
    }
    else{
        const imc= peso/(altura*altura);
        let mensagem= '';

        if(imc<18.5)
            mensagem =`e voce esta abaixo do peso`;
        else if(imc<25)
            mensagem = ` e voce esta com o peso normal. <div class="verde">Parabens!!!</div>`;
        else if(imc<30)
            mensagem= `e levemente acima do peso`;
        else if(imc<35)
            mensagem = `, você está com obesidade grau 1`;
        else if(imc<40)
            mensagem= `, você está com obesidae grau 2`;
        else
            mensagem=`, você está com obesidade grau 3.<div class= "vermelho">Cuidado</div>`;

        resultado.innerHTML= `${nome}  seu imc é: ${imc.toFixed(2)} ${mensagem}`;//prestar atencao nas tags, 
        //porem nao é a melhor opcao
    }

}

document.querySelector("#calcular").addEventListener('click',calcularImc);
