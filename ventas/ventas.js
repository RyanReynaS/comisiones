// Calculadora de Comisiones — lógica de cálculo

// Ventas mínimas antes de empezar a ganar comisión
const VENTAS_BASE = 3;

// Comisión = 15% del precio, por cada venta por encima de VENTAS_BASE
function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0.15);
    }

    return comision;
}

// Convierte un número a texto con formato de moneda (ej: 125.5 → "$125.50")
function formatearMoneda(valor) {
    return new Intl.NumberFormat("es-EC", {
        style: "currency",
        currency: "USD"
    }).format(valor);
}

// Muestra un mensaje de error en pantalla. Pasa "" para limpiarlo.
function mostrarMensaje(texto) {
    document.querySelector(".mensaje").textContent = texto;
}

// Se ejecuta al hacer clic en "Calcular Comisión"
function calcular() {
    // 1. Leer valores del formulario
    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarEntero("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");
    let bonoMeses = recuperarEntero("txtMeses");

    // 2. Validar que sean números
    if (!Number.isFinite(sueldoBase) || !Number.isFinite(numeroVentas) || !Number.isFinite(precioProducto) || !Number.isFinite(bonoMeses)) {
        mostrarMensaje("⚠️ Completa los tres campos con valores numéricos.");
        return;
    }

    // 3. Validar que sean positivos
    if (sueldoBase < 0 || numeroVentas < 0 || precioProducto < 0) {
        mostrarMensaje("⚠️ Los valores deben ser iguales o mayores que cero.");
        return;
    }

    mostrarMensaje("");

    // 4. Calcular bono, comisión y total (bono antes del total, porque total lo usa)
    let bono = bonoMeses * 2;
    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision + bono;

    // 5. Mostrar resultados
    mostrarEnSpan("spSueldoBase", formatearMoneda(sueldoBase));
    mostrarEnSpan("spComision", formatearMoneda(comision));
    mostrarEnSpan("spTotal", formatearMoneda(total));
    mostrarEnSpan("spBono", formatearMoneda(bono));
}
