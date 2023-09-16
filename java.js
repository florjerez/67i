
const bonoGer = 25000;
const bonoBar = 15000;
const bonoDj = 10000;
let cargo = prompt ("Ingrese el cargo en la empresa - Gerente - Barman - Dj");

switch (cargo) {
    case "gerente":
        let sueldo = prompt ("ingrese su sueldo:");
        let resultado = +sueldo + +bonoGer;
        if (resultado > 770000){
            sueldo = (resultado * 0.75);
            alert ("su sueldo supera el impuesto a las ganancias -  se realizo un descuanto del 25% - su nuevo sueldo es:" + sueldo);
        }else{
            alert ("Su nuevo sueldo es:" `${resultado}`);
        }
        break;

    case "barman":
        let suelBar = prompt ("ingrese su sueldo:");
        let resulBar = +suelBar + +bonoBar;
        if (resulBar > 770000){
            suelBar = (resulBar * 0.75);
            alert ("su sueldo supera el impuesto a las ganancias -  se realizo un descuanto del 25% - su nuevo sueldo es:" + suelBar);
        }else{
            alert ("Su nuevo sueldo es:" ` ${resulBar}`);
        }
        break;

    case "dj":
        let suelDj = prompt ("ingrese su sueldo:");
        let resulDj = +suelDj + +bonoDj;
        if (resulDj > 770000){
            suelDj = (resulDj * 0.75);
            alert ("su sueldo supera el impuesto a las ganancias -  se realizo un descuanto del 25% - su nuevo sueldo es:" + suelDj);
        }else{
            alert ("Su nuevo sueldo es:" `${resulDj}`);
        }
        break;

    default:
        alert("No ingreso un cargo valido");
        break;
} 







