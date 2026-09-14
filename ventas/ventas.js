const VENTAS_BASE=5;

function calcularComision(numeroVentas,precioProducto){
    let comision=0;
    if (numeroVentas>VENTAS_BASE){
        let ventasExtras = numeroVentas-VENTAS_BASE;
        comision = ventasExtras * (precioProducto*0.1);
    }
    return comision;

}
function calcular(){
    //recuperamos propiedades de las cajas de texto
    let componenteSueldoBase=document.getElementById("txtSueldoBase");
    let componenteVenta=document.getElementById("txtVentas");
    let componentePrecio=document.getElementById("txtPrecio");

    //recuperamos el valor de las cajas de texto
    let sueldoBaseStr=componenteSueldoBase.value;
    let numeroVentasStr=componenteVenta.value;
    let precioProductoStr=componentePrecio.value;

    //convertimoos el texto a numero
    let sueldoBase=parseFloat(sueldoBaseStr);
    let numeroVentas=parseFloat(numeroVentasStr);
    let precioProducto=parseFloat(precioProductoStr);

    let comision= calcularComision(numeroVentas,precioProducto);
    let total=sueldoBase+comision;
    

    let spSueldoBase= document.getElementById("spSueldoBase");
    let spComision= document.getElementById("spComision");
    let spTotal= document.getElementById("spTotal");
  
    spSueldoBase.textContent=sueldoBase;
    spComision.textContent=comision;
    spTotal.textContent=total;
}