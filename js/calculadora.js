function realizarCalculo() {
    // Obtener los elementos HTML por su ID
    const input1 = document.getElementById("numero1");
    const input2 = document.getElementById("numero2");

    // Extraer el valor del campo (siempre es un string)
    const valor1_string = input1.value;
    const valor2_string = input2.value;

    // Convertir el string a número para poder calcular
    const num1 = parseFloat(valor1_string);
    const num2 = parseFloat(valor2_string);
    

       //consumo en kwh
       const consumo = (num1 * num2)/1000; 
       //valor del consumo 
       const costo = consumo * 900;

    mostrarResultado(consumo);
    mostrarconumo(costo);

}


function mostrarResultado(consumo) {
    const elementoConsumo = document.getElementById("consumo");
    elementoConsumo.textContent = consumo;
}

function mostrarconumo(costo) {
    const elementoCosto = document.getElementById("costo");
    elementoCosto.textContent = costo;
}