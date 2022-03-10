$(function(){


    $("#boton-calcular").click(function(){


        const iva   = x => x * 65;
        const iva2  = x => x / 100;
        const total = x => x + Valor;

      
        Valor = parseInt($("#precio-iva").val());
        

        let impuestoAgregado =iva2(iva(Valor)); 
        
        $("#resultadoVa").text(impuestoAgregado + "$");  
        
        let precioTotal = total(impuestoAgregado);

        $("#resultadoTotal").text(precioTotal + "$");   


    })


    $("#boton-borrar").click(function (){

        $("#resultadoVa").text("0$"); 

        $("#resultadoTotal").text("0$");

    })

    $("#boton-calcular-doble").click(function() {


        

        const iva1  = x => x * 65;
        const iva22 = x => x / 100;
        const total = x => x + valor1;
        const total2 = x => x + valor2;
        const general = x=> x + precioTotal2;

        valor1 = parseInt($("#precio-doble").val());
        valor2 = parseInt($("#precio-doble2").val());

        
        let impuestoAgregado1 =iva22(iva1(valor1)); 
        let impuestoAgregado2 =iva22(iva1(valor2));
        
        $("#resultadoVaDoble1").text(impuestoAgregado1 + "$");  
        
        $("#resultadoVaDoble2").text(impuestoAgregado2 + "$");  
        
        let precioTotal1 = total(impuestoAgregado1);
        let precioTotal2 = total2(impuestoAgregado2);

        $("#resultadoTotalDoble1").text(precioTotal1 + "$"); 
       
        $("#resultadoTotalDoble2").text(precioTotal2 + "$");

        let final = general(precioTotal1);

        $("#valorFinal").text(final + "$");

    })

    
    $("#boton-borrar-doble").click(function (){


        $("#resultadoVaDoble1").text("0$"); 

        $("#resultadoVaDoble2").text("0$"); 

        $("#resultadoTotalDoble1").text("0$");

        $("#resultadoTotalDoble2").text("0$");

        $("#valorFinal").text("0$");

    })
    
    
    $("#btn-Aviso").click(function(){


        $("#Aviso").fadeOut();
    
    })

    $("#btn-Agregar").click(function(){
    
    
        "El juego se añadio con exito ";
    
    
    })
    
});
/*



//iva agregado en mas de una carga
const suma  = (a,b) => a + b;


let cargaEnSteam1 = prompt("ingrese un monto para añadir a steam"); 
let cargaEnSteam2 = prompt("ingrese otro monto para añadir a steam");  



let totalAPagar2 =iva2(iva(suma(cargaEnSteam1, cargaEnSteam2))); 

console.log("Precio final:" + totalAPagar2);




//descuentos
class productoDeSteam {
    constructor(nombre, precio){
        
        this.nombre  = nombre;
        this.precio  = precio;
    }

    descuento1() {
        this.valorAhorrado = this.precio - 550; 

    }
    descuento2(){
        this.valorAhorrado2= this.precio - 191; 

    }
}
const productoDeSteam1 = new productoDeSteam ("FIFA", "5499");
const productoDeSteam2 = new productoDeSteam ("GTAV", "636");

productoDeSteam1.descuento1();
productoDeSteam2.descuento2();

console.log(productoDeSteam1.valorAhorrado);
console.log(productoDeSteam2.valorAhorrado2);








let PrecioiVa = document.getElementById("precio-iva");



$("#boton-calcular").click(function(){


    const iva   = x => x * 65;
    const iva2  = x => x / 100;
    const total = x => x + valor;

    valor = parseInt(precio-iva.value);
    


    let impuestoAgregado =iva2(iva(valor)); 

    
    resultadoVa.innerHTML = impuestoAgregado + "$";
    
    let precioTotal = total(impuestoAgregado);

    resultadoTotal.innerHTML = precioTotal + "$";   


})





let botoncalculo2 = document.getElementById("boton-calcular-doble");

let  PrecioiVa1 = document.getElementById("precio-doble");
let  PrecioiVa2 = document.getElementByid("precio-doble2");

botoncalculo2.addEventListener("click" , alpresionarenter2);

function alpresionarenter2(){


    

    const iva1  = x => x * 65;
    const iva22 = x => x / 100;
    const total = x => x + valor1;
    const total2 = x => x + valor2;

    valor1 = parseInt(PrecioiVa1.value);
    valor2 = parseInt(PrecioiVa2.value);

    
    let impuestoAgregado1 =iva22(iva1(valor1)); 
    let impuestoAgregado2 =iva22(iva1(valor2));
    
    resultadoVaDoble1.innerHTML = impuestoAgregado1 + "$";
    resultadoVaDoble2.innerHTML = impuestoAgregado1 + "$";
    
    let precioTotal1 = total(impuestoAgregado1);
    let precioTotal2 = total2(impuestoAgregado2);

    resultadoTotalDoble1.innerHTML = precioTotal1 + "$";   
    resultadoTotalDoble2.innerHTML = precioTotal2 + "$";  

}


/*
const suma  = (a,b) => a + b;


let cargaEnSteam1 = prompt("ingrese un monto para añadir a steam"); 
let cargaEnSteam2 = prompt("ingrese otro monto para añadir a steam");  



let totalAPagar2 =iva2(iva(suma(cargaEnSteam1, cargaEnSteam2))); 

console.log("Precio final:" + totalAPagar2);

*/



