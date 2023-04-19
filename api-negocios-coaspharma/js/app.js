const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

const { Pool } = require("pg");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const connectionData = {
  user: "admintest",
  host: "172.27.100.11",
  database: "bdprusmc",
  password: "Coas2024$",
  port: 5432,
  ssl: false,
};
const pool = new Pool(connectionData);

pool.connect();

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.get("/json", (req, res) => {
  let consulta =
"select coddist, nomdist, codzona, nomzona, codlinea, nomlinea, periodo, mes, codclien, nitclien, nomclien, codprod, nomprod, nompres, sum(unidades_venta) as unidades_venta, sum(valores_venta) as valores_venta, sum(devoluciones) as devoluciones, sum(vr_devoluciones) as vr_devoluciones, sum(backorder) as backorder, sum(vr_backorder) as vr_backorder from vetmpven";
consulta +=
" group by coddist, nomdist, codzona, nomzona, codlinea, nomlinea, periodo, mes, codclien, nitclien, nomclien, codprod, nomprod, nompres";


  pool
    .query(consulta)
    .then((response) => {
      res.json(response.rows);
    })
    .catch((error) => {
      console.error("Error al ejecutar consulta:", error.stack);
    });
});



app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);




