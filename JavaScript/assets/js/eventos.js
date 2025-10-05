function consumoElectricoTotal () {
    // datos recogidos del input
    var consumoAparato = parseFloat(document.getElementById('consumo').value);
    var horasDiarias = parseFloat(document.getElementById('horas_dia').value);
    var diasAnuales = parseFloat(document.getElementById('dias_anio').value);
    var consumoTotal;

    // cálculos
    var consumoKw = consumoAparato/1000;
    var hDias = consumoKw * horasDiarias;
    consumoTotal = hDias * diasAnuales;

    // resultado
    document.getElementById('resultado').value = "Consumo eléctrico total: " + consumoTotal.toFixed(2) + "kW"
}
