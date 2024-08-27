const textArea = document.querySelector(".area__encriptado");
const mensajeDesencriptado = document.querySelector(".mensaje__desencriptado");
const textoDestacado = document.querySelector("h3");
const textoConsigna = document.querySelector("h4");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensajeDesencriptado.value = textoEncriptado;
    mensajeDesencriptado.style.backgroundImage = "none";
    textArea.value = "";
    textoDestacado.innerHTML = "";
    textoConsigna.innerHTML = "";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes (matrizCodigo [i][0])){
            stringEncriptada = stringEncriptada.replaceAll (matrizCodigo [i][0], matrizCodigo [i][1]); 
        }
    }
    return stringEncriptada;
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensajeDesencriptado.value = textoDesencriptado;
    textArea.value = "";
    textoDestacado.innerHTML = "";
    textoConsigna.innerHTML = "";
    mensajeDesencriptado.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();


    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes (matrizCodigo [i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll (matrizCodigo [i][1], matrizCodigo [i][0]); 
        }
    }
    return stringDesencriptada;
}
    
function botonCopiar(){
    const textoCopiado = mensajeDesencriptado.value;
    textArea.value = textoCopiado;
    mensajeDesencriptado.value = "";

    function asignarTextoElemento(){
        const textoDestacado = document.querySelector("h3");
        const textoConsigna = document.querySelector("h4");
        textoDestacado.innerHTML = "Ningún mensaje fue encontrado";
        textoConsigna.innerHTML = "Ingrese el texto que desea encriptar o desencriptar";
        mensajeDesencriptado.style.backgroundImage = "url(/assets/imagen.png)";
    }
    asignarTextoElemento();
}
