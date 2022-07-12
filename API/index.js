// sire, "Creando un Frontend y Backend desarrollo web api con node"
const express = require("express");

const cors = require("cors");

//construyo un app usando express
const app = express();

//#region
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  express.json({
    type: "*/*",
  })
);
//#endregion

app.use(cors());

const port = 3000;
let transactionArray = [];

app.get("/transaction", (req, res) => {
  res.send(JSON.stringify(transactionArray));
});

// cuando te hagan un post http://localhost:3000/prueba
app.post("/transaction", (req, res) => {
  let bodyResponse = req.body; //bodyResponse es un objeto
  transactionArray.push(bodyResponse);
  //res.send(transactionArray);
  //console.log(JSON.stringify(transactionArray));
});

app.delete("/delete", (req, res) => {
  transactionArray.pop();
});

app.listen(port, () => {
  console.log(`estoy ejecutandome en el puerto http://localhost:${port}`);
});
