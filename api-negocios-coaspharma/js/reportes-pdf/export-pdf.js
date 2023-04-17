document.getElementById('button-pdf').onclick = function () {
  // Mostrar alerta de SweetAlert2
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-right',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  })
  Toast.fire({
    icon: 'success',
    title: 'Exportando'
  })

  // Generar archivo PDF de tabla HTML
  var element = document.getElementById('tabla-excel');
  element.style.width = "80%";
  element.style.height = "100%";
  loggin = true

  var opt = {
    margin: 0.2,
    filename: 'Reporte.pdf',
    image: { type: 'txt', quality: 1},
    html2canvas: { scale: 1.5,  windowWidth: window.innerWidth, windowHeight: window.innerHeight},
    jsPDF: { unit: 'in', format: 'a1', orientation: 'landscape', enableLinks: true},
  };
  html2pdf(element, opt);

  element.style.width = "";
};
