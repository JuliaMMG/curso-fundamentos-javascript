//Switch

/*
switch (expresion) {
    case valor1:
        //Código a ejecutar...
        break
    case valor2:
        //Código a ejecutar...
        break
    default:
        //Código a ejecutar...
}
*/

const dia = "Septiembre";

switch (dia) {
    case "Lunes":
        console.log("Hoy es Lunes...");
        break
    case "Martes":
    case "Miercoles":
    case "Jueves":
    case "Viernes":
        console.log("Dia Laboral");
        break
    case "Sábado":
    case "Domingo":
        console.log("Fin de semana");
        break
    default:
        console.log("Dia no válido")
}