document.addEventListener("DOMContentLoaded", function () {

    // Año automático
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // ==========================================
    // AFILIADOS DE PRUEBA - DATOS FICTICIOS
    // ==========================================

    const afiliados = {

        "AGC1234567890": {
            nombre: "Carlos Andrés Pérez",
            documento: "1234567890",
            municipio: "Montelíbano",
            vereda: "La Esperanza",
            fecha: "15/01/2026",
            tipo: "Guardia Campesina",
            estado: "ACTIVO"
        },

        "AGC987654321": {
            nombre: "María Fernanda López",
            documento: "987654321",
            municipio: "Puerto Libertador",
            vereda: "El Paraíso",
            fecha: "20/01/2026",
            tipo: "Afiliada",
            estado: "ACTIVO"
        },

        "AGC1122334455": {
            nombre: "José Manuel Torres",
            documento: "1122334455",
            municipio: "San José de Uré",
            vereda: "Las Palmas",
            fecha: "05/02/2026",
            tipo: "Guardia Campesina",
            estado: "SUSPENDIDO"
        },

        "AGC5566778899": {
            nombre: "Ana Sofía Martínez",
            documento: "5566778899",
            municipio: "Montelíbano",
            vereda: "Nueva Esperanza",
            fecha: "10/02/2026",
            tipo: "Afiliada",
            estado: "ACTIVO"
        },

        "AGC4455667788": {
            nombre: "Luis Eduardo Gómez",
            documento: "4455667788",
            municipio: "Tierralta",
            vereda: "El Progreso",
            fecha: "18/02/2026",
            tipo: "Afiliado",
            estado: "INACTIVO"
        }

    };


    // ==========================================
    // ELEMENTOS DEL FORMULARIO
    // ==========================================

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


    // ==========================================
    // VERIFICACIÓN DEL CARNET
    // ==========================================

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        let codigoIngresado =
            codigo.value.trim().toUpperCase();

        resultado.hidden = false;


        // Si está vacío
        if (codigoIngresado === "") {

            resultado.className = "result invalid";

            resultado.innerHTML =
                "<strong>⚠ Ingresa un código.</strong><br>" +
                "Escribe el código de verificación.";

            return;
        }


        // ==========================================
        // ACEPTAR AGC CON O SIN GUION
        // ==========================================

        codigoIngresado =
            codigoIngresado.replace(/-/g, "");


        // Buscar afiliado
        const afiliado =
            afiliados[codigoIngresado];


        // ==========================================
        // CÓDIGO NO ENCONTRADO
        // ==========================================

        if (!afiliado) {

            resultado.className = "result invalid";

            resultado.innerHTML =
                "<strong>✕ AFILIADO NO ENCONTRADO</strong><br><br>" +
                "El código <strong>" +
                codigoIngresado +
                "</strong> no corresponde a un registro de prueba.";

            return;
        }


        // ==========================================
        // AFILIACIÓN SUSPENDIDA O INACTIVA
        // ==========================================

        if (afiliado.estado !== "ACTIVO") {

            resultado.className = "result invalid";

            resultado.innerHTML =
                "<strong>⚠ AFILIACIÓN NO VIGENTE</strong><br><br>" +

                "<strong>Nombre:</strong> " +
                afiliado.nombre + "<br>" +

                "<strong>Documento:</strong> " +
                afiliado.documento + "<br>" +

                "<strong>Código:</strong> " +
                codigoIngresado + "<br>" +

                "<strong>Municipio:</strong> " +
                afiliado.municipio + "<br>" +

                "<strong>Vereda:</strong> " +
                afiliado.vereda + "<br>" +

                "<strong>Fecha de afiliación:</strong> " +
                afiliado.fecha + "<br>" +

                "<strong>Tipo:</strong> " +
                afiliado.tipo + "<br><br>" +

                "<strong>Estado:</strong> " +
                afiliado.estado;

            return;
        }


        // ==========================================
        // AFILIACIÓN ACTIVA
        // ==========================================

        resultado.className = "result valid";

        resultado.innerHTML =
            "<strong>✓ AFILIACIÓN ACTIVA</strong><br><br>" +

            "<strong>Nombre:</strong> " +
            afiliado.nombre + "<br>" +

            "<strong>Documento:</strong> " +
            afiliado.documento + "<br>" +

            "<strong>Código:</strong> " +
            codigoIngresado + "<br>" +

            "<strong>Municipio:</strong> " +
            afiliado.municipio + "<br>" +

            "<strong>Vereda:</strong> " +
            afiliado.vereda + "<br>" +

            "<strong>Fecha de afiliación:</strong> " +
            afiliado.fecha + "<br>" +

            "<strong>Tipo:</strong> " +
            afiliado.tipo + "<br><br>" +

            "<strong>Estado:</strong> ACTIVO<br><br>" +

            "Asociación Guardia Campesina";

    });

});
