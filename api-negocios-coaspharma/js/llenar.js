async function llenarTabla() {
  const response = await fetch("http://localhost:3000/json");
  const vetmpven = await response.json();
  const tablaventas = $("#tabla-excel").DataTable({
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
    pageLength: 50,
    lengthMenu: [10, 25, 50, 75, 100, 125, 150, 200, 300, 400],
    language: {
      search:"Buscar",
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
}
 
llenarTabla();