function F_Sumar() {
    var x, y, suma, text;

    // Obtén los valores de los inputs
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;

    // Convierte los valores a números
    x = Number(x);
    y = Number(y);

    // Verifica si ambos valores son números válidos
    if (isNaN(x) || isNaN(y)) {
        text = "Es necesario introducir dos números válidos";
    } else {
        // Realiza la suma
        suma = parseFloat(x) + parseFloat(y);
        text = "Resultado: " + suma;
    }

    // Muestra el resultado en el HTML
    document.getElementById("sumando").innerHTML = text;
}

function F_Restar() {
    var x, y, resta, text;

    // Obtén los valores de los inputs
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;

    // Convierte los valores a números
    x = Number(x);
    y = Number(y);

    // Verifica si ambos valores son números válidos
    if (isNaN(x) || isNaN(y)) {
        text = "Es necesario introducir dos números válidos";
    } else {
        // Realiza la suma
        resta = parseFloat(x) - parseFloat(y);
        text = "Resultado: " + resta;
    }

    // Muestra el resultado en el HTML
    document.getElementById("restando").innerHTML = text;
}

function F_Multiplicar() {
    var x, y, multi, text;

    // Obtén los valores de los inputs
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;

    // Convierte los valores a números
    x = Number(x);
    y = Number(y);

    // Verifica si ambos valores son números válidos
    if (isNaN(x) || isNaN(y)) {
        text = "Es necesario introducir dos números válidos";
    } else {
        // Realiza la suma
        multi = parseFloat(x) * parseFloat(y);
        text = "Resultado: " + multi;
    }

    // Muestra el resultado en el HTML
    document.getElementById("multiplicando").innerHTML = text;
}

function F_Dividir() {
    var x, y, div, text;

    // Obtén los valores de los inputs
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;

    // Convierte los valores a números
    x = Number(x);
    y = Number(y);

    // Verifica si ambos valores son números válidos
    if (isNaN(x) || isNaN(y)) {
        text = "Es necesario introducir dos números válidos";
    } else {
        // Realiza la suma
        div = parseFloat(x) / parseFloat(y);
        text = "Resultado: " + div;
    }

    // Muestra el resultado en el HTML
    document.getElementById("dividiendo").innerHTML = text;
}