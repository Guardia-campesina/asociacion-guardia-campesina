document.addEventListener("DOMContentLoaded", function () {

    // Año automático
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // CÓDIGOS DE PRUEBA
    const afiliados = {

        "AGC-000001": {
            estado: "ACTIVO"
        },

        "AGC-000002": {
            estado: "ACTIVO"
        },

        "AGC-000003": {
            estado: "SUSPENDIDO"
        }

    };


    const formulario =
        document.getElementById("verificationForm");

    const codigo =
        document.getElementById("codigo");

    const resultado =
        document.getElementById("resultado");


    if (!formulario || !codigo || !resultado) {
        console.error("No se encontró el formulario de verificación.");
        return;
    }


    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        const codigoIngresado =
            codigo.value.trim().toUpperCase();


        resultado.hidden = false;


        if (codigoIngresado === "") {

            resultado.className = "result invalid";

            resultado.innerHTML =
                "<strong>⚠ Ingresa un código.</strong><br>" +
                "Escribe el código del carnet.";

            return;
        }


        const afiliado =
            afiliados[codigoIngresado];


        if (!afiliado) {

            resultado.className = "result invalid";

            resultado.innerHTML =
                "<strong>✕ Carnet no encontrado</strong><br>" +
                "El código no coincide con un registro de prueba.";

            return;
        }


        if (afiliado.estado !== "ACTIVO") {

            resultado.className = "result invalid";

            resultado.innerHTML =
                "<strong>⚠ AFILIACIÓN NO VIGENTE</strong><br>" +
                "Código: " + codigoIngresado + "<br>" +
                "Estado: " + afiliado.estado;

            return;
        }


        resultado.className = "result valid";

        resultado.innerHTML =
            "<strong>✓ AFILIACIÓN ACTIVA</strong><br>" +
            "Código: " + codigoIngresado + "<br>" +
            "Estado: ACTIVO<br>" +
            "Asociación Guardia Campesina";

    });

});
