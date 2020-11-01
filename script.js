var display = document.getElementById("display")

function calculo (numero) {
    display.textContent += numero
}

function deleta () {
    var arr = [display.textContent]
    var novoArr = arr[0].split('')
    novoArr.pop()

    display.textContent = novoArr.join('')
    console.log(novoArr)
}

function reset () {
    display.textContent = ''
}


function resultado () {
    var res = eval(display.textContent)
    display.textContent = res.toLocaleString('pt-BR')
}