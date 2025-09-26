function esDniValido() {
    var dni = parseInt(document.getElementById('dni').value);
    var letra = document.getElementById('letra_dni').value.toUpperCase();

    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const indice = dni % 23;
    const letraCorrecta = letras[indice];

    if (letra === letraCorrecta) {
        document.getElementById('msjDniValido').style.color = "#39ff14";
        document.getElementById('msjDniValido').innerHTML = "La letra es correcta";
    } else {
        document.getElementById('msjDniValido').style.color = "#ff0000";
        document.getElementById('msjDniValido').innerHTML = "La letra correcta es: " + letraCorrecta;
    }
}