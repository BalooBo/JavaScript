let saldo = saldoInicial;
// Función que devuelve el saldo actual de una cuenta bancaria
function calcularSaldo(numeroCuenta, saldoInicial, deposito, retirada) {
  let saldo = saldoInicial;
  if (deposito != null) {
    saldo += deposito;
  }
  if (retirada != null) {
    saldo -= retirada;
  }
  return saldo;
}
// Función que muestra el resultado de la operación en la pantalla
function mostrarResultado(resultado) {
  document.getElementById("resultado").innerHTML = `El saldo actual de la cuenta ${numeroCuenta} es: $${resultado}`;
}
// Función que maneja la entrada del usuario y llama a las funciones anteriores
function gestionarCuenta() {
  let numeroCuenta = document.getElementById("numeroCuenta").value;
  let saldoInicial = document.getElementById("saldoInicial").value;
  let deposito = document.getElementById("deposito").value;
  let retirada = document.getElementById("retirada").value;
  // Verificamos si los campos obligatorios están completos
  if (numeroCuenta === "" || saldoInicial === "" || deposito === "" || retirada === "") {
    alert("Por favor, complete todos los campos");
    return;
  }
  // Llamamos a la función para calcular el saldo actual
  let saldo = calcularSaldo(numeroCuenta, saldoInicial, deposito, retirada);
  // Mostramos el resultado en la pantalla
  mostrarResultado(saldo);
}
// Asignamos el evento de envío al botón de envío
document.getElementById("formulario").addEventListener("submit", gestionarCuenta);