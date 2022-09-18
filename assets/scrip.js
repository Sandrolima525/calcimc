
/*let alturaa = window.document.getElementById('alturra');
let pesoo = window.document.getElementById('peso')
document.write(peso.inneer)

let imc = alturaa + pesoo;
console.log(pesoo);*/
/*
function clicar (){
    return 2+2;
}
console.log(clicar())*/


const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resul = document.getElementById('resul');

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(2);
        let classificacao = '';
        if( valorIMC < 18.5){
            classificacao = 'Abaixo do peso'
        } else if (valorIMC < 25 ){
            classificacao = 'com peso ideal'

        }else if(valorIMC < 30){
            classificacao = 'levemente acima do peso'
        }  else if(valorIMC < 35){
            classificacao = 'obsidade grau 1.'
        }else if(valorIMC < 40){
            classificacao = 'com obesidade grau 2 '
        }else {
            classificacao = 'com obesidade grau 3. Cuidado!!'
        }

        resul.textContent = ` ${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
    }else{
        resul.textContent = 'Preencha todos os campo!!'
    }

}

calcular.addEventListener('click', imc);



