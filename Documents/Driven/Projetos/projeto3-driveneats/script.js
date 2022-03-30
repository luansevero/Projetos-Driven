//Armazenamento do Pedido
let prato = ""
let valorprato = 0
let bebida = ""
let valorbebida = 0
let sobremesa = ""
let valorsobremesa = 0
//Alerta para pedido fora de ordem!
let alertaprato = ""
let alertabebida = ""
//Sistema para desselecionar e para mudança do texto do botão!
let systemprato = 0
let systembebida = 0
let systemsobremesa = 0
//Arrays com Nome e Valores dos Pratos!
let arraypratos = ["", "", ""]
let arrayvalorespratos = ["", "", ""]
var quantidadepratos = document.querySelectorAll("div.prato");

function seletorPrato(nprato){
    if(systemprato == nprato){
        document.getElementById(`prato-${nprato}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040";
        systemprato = 0
        prato = ""
        valorprato = 0
        document.getElementById(`bebida-${systembebida}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040";
        document.getElementById(`sobremesa-${systemsobremesa}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040";
    } else {
        systemprato = nprato
        valorprato = arrayvalorespratos[nprato - 1]
        prato = arraypratos[nprato - 1]
        for(let i = 1; i <= quantidadepratos.length; i++){
            if( i != nprato){
                    document.getElementById(`prato-${i}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040"; 
            } else {
                    document.getElementById(`prato-${nprato}`).style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";    
            }
        }
    }
}

let arraybebidas = ["", "", ""]
let arrayvaloresbebidas = ["", "", ""]
var quantidadebebidas = document.querySelectorAll("div.bebida");
function seletorBebida(nbebida){
    if(systemprato <= 0){
        alert(`Selecione um Prato antes`)
    } else if(systembebida == nbebida){
        document.getElementById(`bebida-${nbebida}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040";
        systembebida = 0
        bebida = ""
        valorbebida = 0
        document.getElementById(`sobremesa-${systemsobremesa}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040";
    } else {
        systembebida = nbebida
        valorbebida = arrayvaloresbebidas[nbebida - 1]
        bebida = arraybebidas[nbebida - 1]
        for(let i = 1; i <= quantidadebebidas.length; i++){
            if( i != nbebida){
                    document.getElementById(`bebida-${i}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040"; 
            } else {
                    document.getElementById(`bebida-${nbebida}`).style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";    
            }
        }
    }
}

let arraysobremesas = ["", "", ""]
let arrayvaloressobremesas = ["", "", ""]
var quantidadesobremesas = document.querySelectorAll("div.sobremesa");
function seletorSobremesa(nsobremesa){
    if(systemprato <= 0 && systembebida <= 0){
        alert(`Selecione um Prato e uma Bebida antes`)
    }
    else if(systembebida <= 0){
        alert(`Selecione uma Bebida antes`)
    } else {
        if(systemsobremesa == nsobremesa){
            document.getElementById(`sobremesa-${nsobremesa}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040";
            systemsobremesa = 0
            sobremesa = ""
            valorsobremesa = 0
        } else {
            systemsobremesa = nsobremesa
            valorsobremesa = arrayvaloressobremesas[nsobremesa - 1]
            sobremesa = arraysobremesas[nsobremesa - 1]
            for(let i = 1; i <= quantidadesobremesas.length; i++){
                if( i != nsobremesa){
                        document.getElementById(`sobremesa-${i}`).style.boxShadow = "inset 0px 0px 10px -4px #00000040"; 
                } else {
                        document.getElementById(`sobremesa-${nsobremesa}`).style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";    
                }
            }
        }
    }
}