
function Entrar() {

    let inputTabuada = prompt('Digite qual tabuada você quer saber:')

        if (inputTabuada === '') {
            alert('Digite o número corretamente!')
            return
        }


    let tabuada = parseInt(inputTabuada)



        for (let contador = 1; contador <= 10; contador++) {
            let resultado = tabuada * contador

            
            let mensagem = `${tabuada} x ${contador} = ${resultado}<br>`

            document.write(mensagem)
            
        }

}

