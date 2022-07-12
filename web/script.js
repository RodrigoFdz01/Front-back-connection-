const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  let transactionDescription = document.getElementById("itemDescription").value;
  let transactionPrice = document.getElementById("itemPrice").value;
  //debajo creo un objeto q obtiene los valores cuando envias
  let dataTransaction = {
    transactionDescription: transactionDescription,
    transactionPrice: transactionPrice,
  };
  //abajo paso el objeto dataTransaction a JSON
  let jsondata = JSON.stringify(dataTransaction);
  //console.log(jsondata); //esto es un objeto

  //siguiente paso mandar los datos al backend y guardarlos ahi
  fetch("http://localhost:3000/transaction", {
    method: "Post",
    body: jsondata,
  });
});
