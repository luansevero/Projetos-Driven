function seletorPrato(elemento){
    const selecionado = document.querySelector(".selecionado")
    if(selecionado !== null){
        selecionado.classList.toggle("selecionado")
    }
    elemento.classList.add("selecionado")
}
function seletorBebida(elemento){
    const selecionado = document.querySelector(".selecionado")
    if(selecionado !== null){
        selecionado.classList.toggle("selecionado")
    }
    elemento.classList.add("selecionado")
}
function seletorSobremesa(elemento){
    const selecionado = document.querySelector(".selecionado")
    if(selecionado !== null){
        selecionado.classList.toggle("selecionado")
    }
    elemento.classList.add("selecionado")
}
