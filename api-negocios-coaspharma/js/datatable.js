async function llenarTabla() {
  const response = await fetch("http://localhost:3000/json");
  const vetmpven = await response.json();

  $(document).ready(function () {
    const tablaExcel = $("#tabla-excel").DataTable({
      data: vetmpven,

      columns: [
        { data: "coddist" },
        { data: "nomdist" },
        { data: "codzona" },
        { data: "nomzona" },
        { data: "codlinea" },
        { data: "nomlinea" },
        { data: "periodo" },
        { data: "mes" },
        { data: "codclien" },
        { data: "nitclien" },
        { data: "nomclien" },
        { data: "codprod" },
        { data: "nomprod" },
        { data: "nompres" },
        { data: "unidades_venta" },
        { data: "valores_venta" },
        { data: "devoluciones" },
        { data: "vr_devoluciones" },
        { data: "backorder" },
        { data: "vr_backorder" },
      ],
      initComplete: function (setting, json) {
        // Para cada columna de la tabla, crea un filtro de selección única
        this.api()
          .columns()
          .every(function () {
            // Crea un select y lo agrega al footer de la columna actual
            var column = this;
            var select = $('<select><option value=""></option></select>')
              .appendTo($(column.footer()).empty("Seleccione"))
              .on("change", function () {
                var val = $.fn.dataTable.util.escapeRegex($(this).val());

                column.search(val ? "^" + val + "$" : "", true, false).draw();
              });
// restaura los campos
            // $("#reset").click(function (e) {
            //   var table = $("#tablaExcel").DataTable();
            //   table.colReorder.reset();
            // });
            // Agrega opciones al select basadas en los datos únicos de la columna
            column
              .data()
              .unique()
              .sort()
              .each(function (d, j) {
                select.append('<option value="' + d + '">' + d + "</option>");
              });
          });
      },
      pageLength: 12,
      lengthMenu: [
        10, 12, 15, 20, 25, 30, 35, 50, 75, 100, 125, 150, 200, 300, 400,
      ],
      language: {
        decimal: ",",
        thousands: ".",
        search: "Buscar",
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "No se encontraron registros",
        info: "Mostrando página _PAGE_ de _PAGES_",
        infoEmpty: "No hay registros disponibles",
        infoFiltered: "(filtrado de _MAX_ registros totales)",
        paginate: {
          first: "Primera",
          last: "Última",
          next: "Siguiente",
          previous: "Anterior",
        },
      },
    });
  });
}

llenarTabla();
