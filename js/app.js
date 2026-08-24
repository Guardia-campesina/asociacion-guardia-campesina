document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // AÑO AUTOMÁTICO
    // ==========================================

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // ==========================================
    // AFILIADOS DE PRUEBA
    // TODOS LOS DATOS SON FICTICIOS
    // EL NÚMERO DE DOCUMENTO ES EL CÓDIGO
    // ==========================================

    const afiliados = {

        "1234567890": {
            nombre: "Carlos Andrés Pérez",
            documento: "1234567890",
            municipio: "Montelíbano",
            vereda: "La Esperanza",
            fecha: "15/01/2026",
            tipo: "Guardia Campesina",
            estado: "ACTIVO"
        },

        "987654321": {
            nombre: "María Fernanda López",
            documento: "987654321",
            municipio: "Puerto Libertador",
            vereda: "El Paraíso",
            fecha: "20/01/2026",
            tipo: "Afiliada",
            estado: "ACTIVO"
        },

        "1122334455": {
            nombre: "José Manuel Torres",
            documento: "1122334455",
            municipio: "San José de Uré",
            vereda: "Las Palmas",
            fecha: "05/02/2026",
            tipo: "Guardia Campesina",
            estado: "SUSPENDIDO"
        },

        "5566778899": {
            nombre: "Ana Sofía Martínez",
            documento: "5566778899",
            municipio: "Montelíbano",
            vereda: "Nueva Esperanza",
            fecha: "10/02/2026",
            tipo: "Afiliada",
            estado: "ACTIVO"
        },

        "4455667788": {
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


    // Comprobar que existen los elementos

    if (!formulario || !codigo || !resultado) {

        console.error(
            "No se encontró el formulario de verificación."
        );

        return;
    }


    // ==========================================
    // VERIFICAR DOCUMENTO
    // ==========================================

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();


        // Obtener número escrito

        const documentoIngresado =
            codigo.value.trim();


        // Mostrar resultado

        resultado.hidden = false;


        // ==========================================
        // CAMPO VACÍO
        // ==========================================

        if (documentoIngresado === "") {

            resultado.className =
                "result invalid";

            resultado.innerHTML =
                "<strong>⚠ INGRESA EL NÚMERO DE DOCUMENTO</strong><br><br>" +
                "Escribe el número de documento para realizar la consulta.";

            return;
        }


        // ==========================================
        // VALIDAR QUE SOLO SEAN NÚMEROS
        // ==========================================

        if (!/^\d+$/.test(documentoIngresado)) {

            resultado.className =
                "result invalid";

            resultado.innerHTML =
                "<strong>⚠ DOCUMENTO NO VÁLIDO</strong><br><br>" +
                "El código de verificación debe contener únicamente números.";

            return;
        }


        // ==========================================
        // BUSCAR AFILIADO
        // ==========================================

        const afiliado =
            afiliados[documentoIngresado];


        // ==========================================
        // DOCUMENTO NO ENCONTRADO
        // ==========================================

        if (!afiliado) {

            resultado.className =
                "result invalid";

            resultado.innerHTML =
                "<strong>✕ DOCUMENTO NO ENCONTRADO</strong><br><br>" +

                "El número de documento <strong>" +
                documentoIngresado +
                "</strong> no corresponde a un registro.";

            return;
        }


        // ==========================================
        // AFILIACIÓN NO VIGENTE
        // ==========================================

        if (afiliado.estado !== "ACTIVO") {

            resultado.className =
                "result invalid";

            resultado.innerHTML =

                "<strong>⚠ AFILIACIÓN NO VIGENTE</strong><br><br>" +

                "<strong>Nombre:</strong> " +
                afiliado.nombre +
                "<br>" +

                "<strong>Documento:</strong> " +
                afiliado.documento +
                "<br>" +

                "<strong>Municipio:</strong> " +
                afiliado.municipio +
                "<br>" +

                "<strong>Vereda:</strong> " +
                afiliado.vereda +
                "<br>" +

                "<strong>Fecha de afiliación:</strong> " +
                afiliado.fecha +
                "<br>" +

                "<strong>Tipo de afiliado:</strong> " +
                afiliado.tipo +
                "<br><br>" +

                "<strong>Estado:</strong> " +
                afiliado.estado;

            return;
        }


        // ==========================================
        // AFILIACIÓN ACTIVA
        // ==========================================

        resultado.className =
            "result valid";

        resultado.innerHTML =

            "<strong>✓ AFILIACIÓN ACTIVA</strong><br><br>" +

            "<strong>Nombre:</strong> " +
            afiliado.nombre +
            "<br>" +

            "<strong>Documento:</strong> " +
            afiliado.documento +
            "<br>" +

            "<strong>Municipio:</strong> " +
            afiliado.municipio +
            "<br>" +

            "<strong>Vereda:</strong> " +
            afiliado.vereda +
            "<br>" +

            "<strong>Fecha de afiliación:</strong> " +
            afiliado.fecha +
            "<br>" +

            "<strong>Tipo de afiliado:</strong> " +
            afiliado.tipo +
            "<br><br>" +

            "<strong>Estado:</strong> ACTIVO" +
            "<br><br>" +

            "Asociación Guardia Campesina";

    });

});
