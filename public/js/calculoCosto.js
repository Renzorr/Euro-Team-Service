const resultadoArea = document.getElementById("resultado");
const porPersonaArea = document.getElementById("persona");
const destinoContainer = document.getElementById("destino");
const btnCalcular = document.getElementById("btn-calulator");

//FUNCION PARA CARGAR LA DATA DE LOS DISTRITOS
async function cargarData() {
  const url = "../public/js/distritos.json";
  const response = await fetch(url);
  const data = await response.json();

  data.forEach((element) => {
    crearDistrito(element);
  });
}

//FUNCION QUE INTRODUCE LOS DISTRITOS USANDO UN JSON
function crearDistrito(data) {
  let distrito = `<option value=${data.name}>${data.name}</option>`;
  destinoContainer.innerHTML += distrito;
}

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
    TransferenciadeAeropuerto: 50.0,
    ViajesInterurbanos: 80.0,
    EventosdeBoda: 60.0,
    ReuniondeNegocios: 90.0,
  };

  if (pasajeros > 23) {
    alert.fire({
      icon: "error",
      title: "La cantidad máxima es 23",
      iconColor: "#fff",
    });
    return;
  }

  if (pasajeros < 1 || isNaN(pasajeros)) {
    return;
  }

  let costoPorPersona = precios[tipoServicio];

  if (pasajeros > 14) {
    costoPorPersona *= 0.9;
  }

  const total = pasajeros * costoPorPersona;
  const resultado = total.toFixed(2);

  porPersonaArea.innerHTML = `S/. ${precios[tipoServicio]}`;
  resultadoArea.innerHTML = `S/. ${resultado}`;
}

//LLAMADA DE FUNCION
cargarData();
btnCalcular.addEventListener("click", calcularCostoViaje);
