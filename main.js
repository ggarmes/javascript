

let numero1 = parseInt(prompt("Ingresa un primer numero: "))
let numero2 = parseInt(prompt("Ingresa un segundo numero: "))

let operacion = parseInt(prompt("Que desea hacer con los numero ingresados 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir y 5 para salir: "))

while(operacion != 5 ){
    switch (operacion){
        case 1:
            resultSuma = numero1 + numero2
            alert("La suma de los 2 numeros es: " + resultSuma);
            break;
        case 2:
            resultResta = numero1 - numero2
            alert("La resta de los numeros es: " + resultResta);
            break;
        case 3:
            resultMultiplicar = numero1 * numero2
            alert("La multiplicacion de los numeros es: " + resultMultiplicar);
            break;
        case 4:
            resultDividir = numero1 / numero2
            alert("La division de los numeros es: " + resultDividir);
            break;
        default:
            alert("Introduzca una operacion correcta")
            break;
    }
    operacion = parseInt(prompt("Que desea hacer con los numero ingresados 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir y 5 para salir: "))
}

alert("Gracias por usar nuestro sistema.")


let horario = parseInt(prompt("Ingrese el horario en el que quiera visitar la tienda de 00 a 23 horas (debe ser un numero entero): "))

if (horario > 8 && horario < 12){
    alert("La tienda esta abierta, ¡TE ESPERAMOS!")
}else if(horario > 15 && horario < 20){
    alert("La tienda esta abierta, ¡TE ESPERAMOS!")
}else if (horario >= 24){
    alert("ERROR en el horario")
}else{
    alert("La tienda NO esta abierta, ¡LO SENTIMOS!")
}
