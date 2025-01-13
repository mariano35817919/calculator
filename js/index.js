// Elementos
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Variable para almacenar la operación actual
let operacionActual = "";


//Escuchar eventos click en los botones

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;

        if (value === "c") {
            // Limpiar el display
            operacionActual = "";
            display.value = "";
        } else if (value === "=") {
            // Evaluar la expresión usando eval
            try {
                display.value = eval(operacionActual);
                operacionActual = display.value; // Actualizar la expresión
            } catch (error) {
                display.value = "Error"; // Manejar errores en la evaluación
            }
        } else {
            // Agregar el valor del botón a la expresión actual
            operacionActual += value;
            display.value = operacionActual;
            console.log(operacionActual);
        }
    });
});



