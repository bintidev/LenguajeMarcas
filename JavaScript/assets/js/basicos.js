// Función para determinar si un número es par o impar
function par_Impar() {
    var num = parseInt(document.getElementById('num_par_impar').value);
    var msj1;
    if (num % 2 == 0) {
        msj1 = "Este número es par";
    } else {
        msj1 = "Este número es impar";
    }
    document.getElementById('msj_parimpar').innerHTML = msj1;
}

// Función que devuelve si un número es par (booleano)
function esPar() {
    var num = parseInt(document.getElementById('num_par').value)
    var msj2;
    msj2 = (num % 2 === 0) ? true : false;
    document.getElementById('msj_espar').innerHTML = msj2;
}

// Función para calcular el área de un rectángulo
function areaRectangulo() {
    var alto = parseFloat(document.getElementById('alto').value);
    var ancho = parseFloat(document.getElementById('ancho').value);
    var msj3 = "El área del rectángulo es " + (alto * ancho);
    document.getElementById('msj_area_rec').innerHTML = msj3;
}

// Función combinada para calcular y verificar la letra del DNI
function verificarYCalcularDNI() {
    var dni = parseInt(document.getElementById('dni').value);
    var letra = document.getElementById('letra_dni').value.toUpperCase();

    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const indice = dni % 23;
    const letraCorrecta = letras[indice];

    if (letra === letraCorrecta) {
        document.getElementById('msj_dni').innerHTML = "La letra es correcta";
    } else {
        document.getElementById('msj_dni').innerHTML = "La letra correcta es: " + letraCorrecta;
    }
}