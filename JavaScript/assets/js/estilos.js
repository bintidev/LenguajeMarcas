// cambiar el tamaño de texto
function tamanioTexto (t) {
    var txt = document.getElementById('cabecera');
    var est = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    var tamanioActual = parseFloat(est);

    if (t == 1) {
        txt.style.fontSize = (tamanioActual+5) + "px";
    } else {
        txt.style.fontSize = (tamanioActual-5) + "px";
    }
}

// poner el texto en cursiva
function enCursiva() {
    var campo = document.getElementById('cursiva');
    var selec = campo.checked;

    if (selec) {
        document.getElementById('cabecera').style.fontStyle = "italic";
    } else {
        document.getElementById('cabecera').style.fontStyle = "normal";
    }
    
}

// poner marco alrededor de texto
function mostrarMarco() {
    var campo = document.getElementById('marco');
    var selec = campo.checked;

    if (selec) {
        document.getElementById('cabecera').style.border = "1.5px solid white";
    } else {
        document.getElementById('cabecera').style.border = "none"
    }
}

// cambiar color de texto
function cambiarColor() {
    var r = Math.ceil(Math.random()*255);
    var g = Math.ceil(Math.random()*255);
    var b = Math.ceil(Math.random()*255);

    document.getElementById('cabecera').style.color = "rgb(" + r + "," + g + "," + b + ")";
}
