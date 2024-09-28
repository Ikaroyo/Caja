function showTab(tabName) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });

  document.getElementById(tabName).classList.add("active");
  document
    .querySelector(`.tab-button[onclick="showTab('${tabName}')"]`)
    .classList.add("active");
}

// Manejo del formulario de agregar lote
document
  .getElementById("agregarLoteForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fechaLote = document.getElementById("fechaLote").value;
    const cajero = document.getElementById("cajero").value;
    const nroLote = document.getElementById("nroLote").value;
    const importeOSM = document.getElementById("importeOSM").value;
    const comentarios = document.getElementById("comentarios").value;

    // Aquí podrías enviar los datos al servidor utilizando fetch o axios

    console.log({
      fechaLote,
      cajero,
      nroLote,
      importeOSM,
      comentarios,
    });

    // Resetear el formulario
    document.getElementById("agregarLoteForm").reset();
  });
