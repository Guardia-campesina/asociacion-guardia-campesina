const carnets = {
  "AGC-000001": {
    estado: "ACTIVO",
    nombre: "Juan Pérez Ortiz",
    codigo: "AGC-000001",
    vigencia: "15/08/2027"
  },

  "AGC-000002": {
    estado: "ACTIVO",
    nombre: "Miembro de la Asociación",
    codigo: "AGC-000002",
    vigencia: "15/08/2027"
  },

  "AGC-000003": {
    estado: "SUSPENDIDO",
    nombre: "Miembro de la Asociación",
    codigo: "AGC-000003",
    vigencia: "15/08/2027"
  }
};

const formulario = document.getElementById("verifyForm");
const campoCodigo = document.getElementById("code");
const resultado = document.getElementById("result");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const codigo = campoCodigo.value.trim().toUpperCase();
  const carnet = carnets[codigo];

  resultado.classList.remove("hidden");

  if (!carnet) {
    resultado.innerHTML = `
      <div class="result-card error">
        <h3>❌ Carnet no encontrado</h3>
        <p>El código <strong>${codigo}</strong> no aparece en el registro oficial.</p>
      </div>
    `;
    return;
  }

  if (carnet.estado === "ACTIVO") {
    resultado.innerHTML = `
      <div class="result-card valid">
        <h3>✓ Carnet válido</h3>
        <p>
          <strong>${carnet.nombre}</strong>
          · Estado: <strong>ACTIVO</strong>
          · Vigencia hasta <strong>${carnet.vigencia}</strong>.
        </p>
        <p>Código: ${carnet.codigo}</p>
      </div>
    `;
  } else {
    resultado.innerHTML = `
      <div class="result-card suspended">
        <h3>⚠️ Carnet suspendido</h3>
        <p>
          <strong>${carnet.nombre}</strong>
          · Estado: <strong>SUSPENDIDO</strong>.
        </p>
        <p>Código: ${carnet.codigo}</p>
      </div>
    `;
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
