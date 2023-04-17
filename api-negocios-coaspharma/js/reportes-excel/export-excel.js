document.getElementById('button').addEventListener('click', function(){
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
        title: 'Exportado'
      })
    // libreria para exportar la tabla
    var tabla2excel = new Table2Excel();
    tabla2excel.export(document.querySelectorAll("#tabla-excel"));
});