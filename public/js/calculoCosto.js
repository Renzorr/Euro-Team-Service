const resultadoArea = document.getElementById("resultado");
const porPersonaArea = document.getElementById("persona");

// INSTACIAR ALERTA
let alert = Swal.mixin({
  toast: true,
  position: "top-right",
  color: "#fff",
  background: "#4762ff",
  showConfirmButton: false,
  timer: 1500,
});

// FUNCION CALCULAR VIAJE
function calcularCostoViaje() {
  const pasajeros = parseInt(document.getElementById("pasajeros").value);
  const tipoServicio = document.getElementById("tipo-servicio").value;

  const precios = {
    Personal: 50.0,
    Turistico: 80.0,
    Coorporativo: 60.0,
  };

  if (pasajeros > 23) {
    alert.fire({
      icon: "error",
      title: "La cantidad máxima es 23",
      iconColor: '#fff',
    });
    return;
  }
  if (pasajeros < 1 || isNaN(pasajeros)) {
    return;
  }

  let costoPorPersona = precios[tipoServicio];

  if (pasajeros > 10) {
    costoPorPersona *= 0.9;
  }

  const total = pasajeros * costoPorPersona;

  const resultado = total.toFixed(2);

  porPersonaArea.innerHTML = `S/. ${precios[tipoServicio]}`;
  resultadoArea.innerHTML = `S/. ${resultado}`;
}
