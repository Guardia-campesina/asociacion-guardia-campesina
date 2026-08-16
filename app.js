const carnets = {
  "AGC-000001": {
    estado: "VÁLIDO",
    nombre: "Miembro de la Asociación",
    codigo: "AGC-000001",
    organizacion: "Asociación Guardia Campesina"
  },

  "AGC-000002": {
    estado: "VÁLIDO",
    nombre: "Miembro de la Asociación",
    codigo: "AGC-000002",
    organizacion: "Asociación Guardia Campesina"
  },

  "AGC-000003": {
    estado: "SUSPENDIDO",
    nombre: "Miembro de la Asociación",
    codigo: "AGC-000003",
    organizacion: "Asociación Guardia Campesina"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#codigo");
  const boton = document.querySelector("#verificar");
  const resultado = document.querySelector("#resultado");

  if (!input || !boton || !resultado) {
    console.error("No se encontraron los elementos de verificación.");
    return;
  }

  boton.addEventListener("click", () => {
    const codigo = input.value.trim().toUpperCase();

    if (!codigo) {
      resultado.innerHTML = `
        <div class="resultado error">
          <strong>Ingrese un código</strong>
          <p>Escriba el código que aparece en el carnet.</p>
        </div>
      `;
      return;
    }

    const carnet = carnets[codigo];

    if (!carnet) {
      resultado.innerHTML = `
        <div class="resultado error">
          <strong>Carnet no encontrado</strong>
          <p>El código <b>${codigo}</b> no aparece en el registro.</p>
        </div>
      `;
      return;
    }

    if (carnet.estado === "VÁLIDO") {
      resultado.innerHTML = `
        <div class="resultado valido">
          <h3>✓ CARNET VÁLIDO</h3>
          <p><strong>Nombre:</strong> ${carnet.nombre}</p>
          <p><strong>Código:</strong> ${carnet.codigo}</p>
          <p><strong>Organización:</strong> ${carnet.organizacion}</p>
          <p><strong>Estado:</strong> ${carnet.estado}</p>
        </div>
      `;
    } else {
      resultado.innerHTML = `
        <div class="resultado suspendido">
          <h3>⚠ CARNET SUSPENDIDO</h3>
          <p><strong>Nombre:</strong> ${carnet.nombre}</p>
          <p><strong>Código:</strong> ${carnet.codigo}</p>
          <p><strong>Organización:</strong> ${carnet.organizacion}</p>
          <p><strong>Estado:</strong> ${carnet.estado}</p>
        </div>
      `;
    }
  });
});
