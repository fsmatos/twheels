function openNav() {
  document.getElementById("menuLateral").style.width = "15%";
}

function closeNav() {
  document.getElementById("menuLateral").style.width = "0";
}


function openPro() {
  document.getElementById("proLateral").style.width = "15%";

  let botaoLimpar = document.getElementById("limparCompra");
  let botaoCompra = document.getElementById("valorCompra");
  let dataFromLocalStorage = localStorage.getItem("myBike");
  if(dataFromLocalStorage == null){
    botaoCompra.style.display = "none"
  }
}

function closePro() {
  document.getElementById("proLateral").style.width = "0";
}


function salvarFicheiro() {
  if (document.getElementById("zipFormat").innerHTML != "" ||  document.getElementById("zipFormat").innerHTML != "") {
    return false;
  }

  // 1- Get info
  let NOME = document.getElementById('nome').value;
  let EMAIL = document.getElementById('email').value;
  let TELF = document.getElementById('telemovel').value;
  let MORADA = document.getElementById('endereco').value;
  let POSTAL = document.getElementById('postal').value;
  let PAIS = document.getElementById('pais').value;
  let DISTRITO = document.getElementById('distrito').value;

  let CARTAO = document.getElementById('cartao').value;
  let NUMERO = document.getElementById('numero').value;
  let VALIDADE = document.getElementById('validade').value;
  let CODE = document.getElementById('codigo').value;
  let CEP = document.getElementById('cep').value;
  let PAGAMENTO = document.querySelector('input[name="pay"]:checked').value; //Dos radio (cujo nome é pagamento) guarda a info daquele que estiver selecionado
  let VALOR_FINAL = document.getElementById("valorBike").innerHTML;
  let PRODUTOS = document.getElementById("objetosFaturados").value;



  //2- Store all info
  let info =

    '<h3 style="color:#F48304; font-family: lato;  position: absolute; left: 50%; transform: translateX(-50%)">BILLING DATA</h3>' +
    '<p style="color:#415A65; font-family: lato light; position: absolute; left: 50%; transform: translateX(-50%); top:5%">Name: ' + NOME + '</p>' +
    '<p style="color:#415A65; font-family: lato light; position: absolute; left: 50%; top:8%; transform: translateX(-50%)">Email: ' + EMAIL + '</p>' +
    '<p style="color:#415A65; font-family: lato light; position: absolute; left: 50%; top:11%; transform: translateX(-50%)"> Phone: ' + TELF + '</p>' +
    '<p style="color:#415A65; font-family: lato light ; position: absolute; left: 50%; top:14%; transform: translateX(-50%)"> Address: ' + MORADA + '</p>' +
    '<p style="color:#415A65; font-family: lato light ; position: absolute; left: 50%; top:17%; transform: translateX(-50%)"> Zip-Code: ' + POSTAL + '</p>' +
    '<p style="color:#415A65; font-family: lato light ; position: absolute; left: 50%; top:20%; transform: translateX(-50%)"> Country: ' + PAIS + '</p>' +
    '<p style="color:#415A65; font-family: lato light ; position: absolute; left: 50%; top:23%; transform: translateX(-50%)"> City: ' + DISTRITO + '</p>' +
    '<p style="color:#415A65; font-family: lato light ; position: absolute; left: 50%; top:26%; transform: translateX(-50%)"> Payment method: ' + PAGAMENTO + '</p>' +
    '<p style="color:#415A65; font-family: lato light ; position: absolute; left: 50%; top:29%; transform: translateX(-50%)"> Card Name: ' + CARTAO + '</p>' +
    '<p style="color:#415A65; font-family: lato light ; position: absolute; left: 50%; top:32%; transform: translateX(-50%)"> Card Number: ' + NUMERO + '</p>' +
    '<p style="color:#415A65; font-family: lato light ; position: absolute; left: 50%; top:35%; transform: translateX(-50%)"> expiration date: ' + VALIDADE + '</p>' +
    '<p style="color:#415A65; font-family: lato light ; position: absolute; left: 50%; top:38%; transform: translateX(-50%)"> Card Code: ' + CODE + '</p>' +
    '<p style="color:#415A65; font-family: lato light ; position: absolute; left: 50%; top:41%; transform: translateX(-50%)"> CEP: ' + CEP + '</p>' + '<br>' +
    '<p style="color:#415A65; font-family: lato light ; position: absolute; left: 50%; top:44%; transform: translateX(-50%)"> Bikes: ' + PRODUTOS + '</p>' +
    '<h4 style="color:#415A65; font-family: lato  ; position: absolute; left: 50%; top:47%; transform: translateX(-50%)">TOTAL: ' + '<span><b>' + VALOR_FINAL + '</b></span></h4>';



  //Convert text to blob
  let textToBlob = new Blob([info], { type: 'text/html' });
  let sFileName = "Form.html";

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBlob);
  }
  else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }
  newLink.click();
} 

//Register
function registo() {

  if (document.getElementById("emailMsgErrorValidation").innerHTML != "" ||  document.getElementById("confirmPasswordMsgErrorValidation").innerHTML != "") {
    return false;
  }

  let userName = document.getElementById("userName").value;
  let userMail = document.getElementById("userMail").value;
  let userPass = document.getElementById("userPass").value;

  let myObj = {
    name: userName,
    email: userMail,
    senha: userPass
  };

  let myObj_serialized = JSON.stringify(myObj);

  localStorage.setItem("myObj", myObj_serialized);


  // url to determine where to go
  let params = (new URL(document.location)).searchParams;
  let bike = params.get("nome");
  let codigo = params.get("codigo");
  let custo = params.get("custo");
  let pagina = params.get("pagina");

  // Home page as default
  let urlDestino = "homepageLogado.html";

  // If there are pages on url
  if (pagina != null) {
    urlDestino = pagina + "?codigo=" + codigo + "&nome=" + bike + "&custo=" + custo;
  }

  window.open(urlDestino, "_self");
}



function loadUserName() {
  let dataFromLocalStorage = localStorage.getItem("myObj"); //usar isto para ir buscar informação nas diferentes páginas

  let myObj_deserialized = JSON.parse(dataFromLocalStorage); //usar isto para ir buscar informação nas diferentes páginas

  let user = document.querySelectorAll(".user");
  let mail = document.querySelectorAll(".mail");
  let pass = document.querySelectorAll(".pass");

  for (i = 0; i < user.length; i++) {
    user[i].innerHTML = myObj_deserialized.name;
    user[i].value = myObj_deserialized.name;
  }

  for (i = 0; i < mail.length; i++) {
    mail[i].innerHTML = myObj_deserialized.email;
    mail[i].value = myObj_deserialized.email;
  }

  for (i = 0; i < pass.length; i++) {
    pass[i].innerHTML = myObj_deserialized.senha;
    pass[i].value = myObj_deserialized.senha;
  }

}

//Change
function mudar() {
  localStorage.clear();
  let newName = document.getElementById("newName").value;
  let newMail = document.getElementById("newMail").value;
  let newPass = document.getElementById("newPass").value;

  let myObj = {
    name: newName,
    email: newMail,
    senha: newPass
  };

  let myObj_serialized = JSON.stringify(myObj);

  localStorage.setItem("myObj", myObj_serialized);
  loadUserNameNew();
}

function loadUserNameNew() {
  let dataFromLocalStorage = localStorage.getItem("myObj"); //to get info 
  let myObj_deserialized = JSON.parse(dataFromLocalStorage); //to get info 

  let newName = document.querySelectorAll(".user");
  let newMail = document.querySelectorAll(".mail");
  let newPass = document.querySelectorAll(".pass");

  for (i = 0; i < newName.length; i++) {
    newName[i].innerHTML = myObj_deserialized.name;
    newName[i].value = myObj_deserialized.name;
  }

  for (i = 0; i < newMail.length; i++) {
    newMail[i].innerHTML = myObj_deserialized.email;
    newMail[i].value = myObj_deserialized.email;
  }

  for (i = 0; i < newPass.length; i++) {
    newPass[i].innerHTML = myObj_deserialized.senha;
    newPass[i].value = myObj_deserialized.senha;
  }

}

//SHOPPING CART
function produto(tipoNegocio) {
  let params = (new URL(document.location)).searchParams;
  let bike = params.get("nome");
  let codigo = params.get("codigo");
  let custo = params.get("custo");
  if (tipoNegocio == "aluguer") {
    let horas = document.getElementById("horas").value;
    custo = custo * horas;
  }

  let myBike = {
    codigo: codigo,
    bicla: bike,
    preco: custo
  };

  let dataFromLocalStorage = localStorage.getItem("myBike");
  let myBike_deserialized = JSON.parse(dataFromLocalStorage);


  if (myBike_deserialized == null) {
    myBike_deserialized = [];
  }

  myBike_deserialized.push(myBike);

  let myBike_serialized = JSON.stringify(myBike_deserialized);
  localStorage.setItem("myBike", myBike_serialized);
}

function comprar() {
  let dataFromLocalStorage = localStorage.getItem("myBike"); 
  let myBike_deserialized = JSON.parse(dataFromLocalStorage); 
  

  if (myBike_deserialized != null) {
    let badgeSignQtd = myBike_deserialized.length;
    document.getElementById('badgeCarrinho').innerHTML = badgeSignQtd;
    let bicicleta = document.querySelectorAll(".bikeName");
    let valorFinal = 0;

    for (j = 0; j < myBike_deserialized.length; j++) {

      for (i = 0; i < bicicleta.length; i++) {
        bicicleta[i].innerHTML += "<li><span class='criar'>" + myBike_deserialized[j].bicla + "</span>" + "<span class='showPreco'>" + myBike_deserialized[j].preco + "\u20AC" + "</span></li>";
        let preco = parseInt(myBike_deserialized[j].preco);
        valorFinal += preco;
      }

    }

    let precoFinal = document.querySelector("#priceFinal");
    precoFinal.innerHTML = valorFinal + "\u20AC";

    

  }

}

function getBikeInfo(tipoNegocio) {

  let params = (new URL(document.location)).searchParams;
  let name = params.get("nome");
  let custo = params.get("custo");

  let tituloBicicleta = document.querySelector("#nomeBike");
  let precoBicicleta = document.querySelector("#valorBike");
  tituloBicicleta.innerHTML = name;
  if (tipoNegocio == "aluguer") {
    let horas = document.getElementById("horas").value;
    precoBicicleta.innerHTML = horas * custo + "€";
  } else {
    precoBicicleta.innerHTML = custo + "€";
  }

}

function getBikeInfoFinal() {
  let horas = document.getElementById("horas").value;
  let params = (new URL(document.location)).searchParams;
  let name = params.get("nome");
  let custo = params.get("custo");

  let tituloBicicleta = document.querySelector("#nomeBike");
  let precoBicicleta = document.querySelector("#valorBike");
  tituloBicicleta.innerHTML = name;
  precoBicicleta.innerHTML = custo * horas + "€";
}

function dadosFaturacao() {
  let dataFromLocalStorage = localStorage.getItem("myBike"); 
  let myBike_deserialized = JSON.parse(dataFromLocalStorage); 


  if (myBike_deserialized != null) {

    let objetosFaturados = document.querySelector("#objetosFaturados");
    let valorFinal = 0;

    for (j = 0; j < myBike_deserialized.length; j++) {
      let preco = parseInt(myBike_deserialized[j].preco);
      objetosFaturados.value += myBike_deserialized[j].bicla + "  ";
      valorFinal += preco;
    }

    let precoFinal = document.querySelector("#valorBike");
    precoFinal.innerHTML = valorFinal + "\u20AC";
  }

}



function voltarComprar() {
  window.open("paginaComprasLogado.html", "_self");
}

function voltarAlugar() {
  window.open("paginaAluguerLogado.html", "_self");
}

function trabalhos() {
  window.open("paginaCompras.html", "_self");
}

function rent() {
  window.open("paginaAluguer.html", "_self");
}

function abrirBicicletaCompra(codigoBike, nomeBike, custoBike) {
  let urlBike = "infoBicicletaCompra.html?codigo=" + codigoBike + "&nome=" + nomeBike + "&custo=" + custoBike;
  window.open(urlBike, "_self");
}

function abrirBicicletaAluguer(codigoBike, nomeBike, custoBike) {
  let urlBike = "infoBicicletaAluguer.html?codigo=" + codigoBike + "&nome=" + nomeBike + "&custo=" + custoBike;
  window.open(urlBike, "_self");
}

function logado() {
  window.open("homepageLogado.html", "_self");
}

function trabalhosLogado() {
  window.open("paginaComprasLogado.html", "_self");
}

function aluguerLogado() {
  window.open("paginaAluguerLogado.html", "_self");
}

function abrirBicicletaCompraLogado(codigoBike, nomeBike, custoBike) {
  let urlBike = "infoBicicletaCompraLogado.html?codigo=" + codigoBike + "&nome=" + nomeBike + "&custo=" + custoBike;
  window.open(urlBike, "_self");
}

function abrirBicicletaAluguerLogado(codigoBike, nomeBike, custoBike) {
  let urlBike = "infoBicicletaAluguerLogado.html?codigo=" + codigoBike + "&nome=" + nomeBike + "&custo=" + custoBike;
  window.open(urlBike, "_self");
}

function finalCompra() {
  window.open("formCompra.html", "_self");
}

function finalAluguer() {
  window.open("formAluguer.html", "_self");
}

function editarPerfil() {
  window.open("editar.html", "_self");
}

function criarConta(paginaAposRegisto) { 
  let params = (new URL(document.location)).searchParams;
  let bike = params.get("nome");
  let codigo = params.get("codigo");
  let custo = params.get("custo");

  let urlPaginaDestino = "registo.html";

  if (paginaAposRegisto != null) {
    urlPaginaDestino = "registo.html?pagina=" + paginaAposRegisto + "&codigo=" + codigo + "&nome=" + bike + "&custo=" + custo;
  }

  window.open(urlPaginaDestino, "_self");
}

function restauroHomepage() {
  window.open("../HTML/homepageLogado.html#destinoRestauro", "_self");
}

function aluguerHomepage() {
  window.open("../HTML/homepageLogado.html#destinoAluguer", "_self")
}

function restauroHomepageLogado() {
  window.open("../HTML/homepageLogado.html#destinoRestauroLogado", "_self")
}

function aluguerHomepageLogado() {
  window.open("../HTML/homepageLogado.html#destinoAluguerLogado", "_self")
}

function voltarAtras() {
  window.history.back();
}

function quemSomos() {
  window.open("../HTML/quemSomos.html", "_self")
}

function quemSomosLogado() {
  window.open("../HTML/quemSomosLogado.html", "_self")
}

function contactos() {
  window.open("../HTML/contactos.html", "_self")
}

function contactosLogado() {
  window.open("../HTML/contactosLogado.html", "_self")
}

function app(){
  window.open("C:/Users/ASUS/Documents/ESEC/2º Ano/2º Semestre/WEB II/Projeto/App/Twheels/HTML/inicioMobile.html", "_blank");
}

function home(){
  window.open("../HTML/homepage.html", "_self")
}

function homeLogado(){
  window.open("../HTML/homepageLogado.html", "_self")
}


//Clear localstorage
function sair() {
  localStorage.clear();
  window.open("homepage.html", "_self");
}

function inicial() {
  localStorage.clear();
}


//Validations
function ValidateEmail(inputText) {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let errorMessageElement = document.getElementById("emailMsgErrorValidation");
  

  if (inputText.value.match(mailformat)) {
    errorMessageElement.innerHTML = "";
    return true;
  }
  else {
    errorMessageElement.innerHTML = "Inseriu um email inválido";
    inputText.focus();
    return false;
  }
}

function ValidatePassword(inputPassword, inputPasswordConfirmation) {
  let errorMessageElement = document.getElementById("confirmPasswordMsgErrorValidation");

  if (inputPassword.value == inputPasswordConfirmation.value) {
    errorMessageElement.innerHTML = "";
    return true;

  }
  else {
    errorMessageElement.innerHTML = "Passowrd e confirmação não correspondem";
    inputPasswordConfirmation.focus();
    return false;
  }
}

function validateEmptyPassword() {
  let errorMessageElement = document.getElementById("passwordMsgErrorValidation");
  var vazio = document.forms["registar"]["password"].value;
  if (vazio == "" || vazio == null) {
    errorMessageElement.innerHTML = "Campo inválido";
    return false;
  }
}

  function validateEmptyPasswordConfirmation() {
    let errorMessageElement = document.getElementById("confirmPasswordMsgErrorValidation");
    var vazio = document.forms["registar"]["passwordConfirmation"].value;
    if (vazio == "" || vazio == null) {
      errorMessageElement.innerHTML = "Campo inválido";
      return false;
    }
  }

function ValidateZip(inputText) {
  let zipFormat = /^\d{4}-\d{3}?$/;
  let errorMessageElement = document.getElementById("zipFormat");

  if (inputText.value.match(zipFormat)) {
    errorMessageElement.innerHTML = "";
    return true;
  }
  else {
    errorMessageElement.innerHTML = "Inseriu um código postal inválido";
    inputText.focus();
    return false;
  }
}

function validateEmptyNome() {
  let errorMessageElement = document.getElementById("nomeMsgErrorValidation");
  var vazio = document.forms["finalizarCompra"]["nome"].value;
  if (vazio == "" || vazio == null) {
    errorMessageElement.innerHTML = "Campo inválido";
    return false;
  }
}

function validateEmptyUserName() {
  let errorMessageElement = document.getElementById("userNameMsgErrorValidation");
  var vazio = document.forms["registar"]["userName"].value;
  if (vazio == "" || vazio == null) {
    errorMessageElement.innerHTML = "Campo inválido";
    return false;
  }
}

function validateEmptyEndereco() {
  let errorMessageElement = document.getElementById("enderecoMsgErrorValidation");
  var vazio = document.forms["finalizarCompra"]["endereco"].value;
  if (vazio == "" || vazio == null) {
    errorMessageElement.innerHTML = "Campo inválido";
    return false;
  }
}

function validateEmptyPais() {
  let errorMessageElement = document.getElementById("paisMsgErrorValidation");
  var vazio = document.forms["finalizarCompra"]["pais"].value;
  if (vazio == "" || vazio == null) {
    errorMessageElement.innerHTML = "Campo inválido";
    return false;
  }
}

function validateEmptyDistrito() {
  let errorMessageElement = document.getElementById("distritoMsgErrorValidation");
  var vazio = document.forms["finalizarCompra"]["distrito"].value;
  if (vazio == "" || vazio == null) {
    errorMessageElement.innerHTML = "Campo inválido";
    return false;
  }
}

function validateEmptyPay() {
  let errorMessageElement = document.getElementById("payMsgErrorValidation");
  var vazio = document.forms["finalizarCompra"]["pay"].value;
  if (vazio == "" || vazio == null) {
    errorMessageElement.innerHTML = "Campo inválido";
    return false;
  }
}

function validateEmptyCartaoNome() {
  let errorMessageElement = document.getElementById("cartaoNomeMsgErrorValidation");
  var vazio = document.forms["finalizarCompra"]["cartaoNome"].value;
  if (vazio == "" || vazio == null) {
    errorMessageElement.innerHTML = "Campo inválido";
    return false;
  }
}

function validateEmptyCartaoNumero() {
  let errorMessageElement = document.getElementById("cartaoNumeroMsgErrorValidation");
  var vazio = document.forms["finalizarCompra"]["cartaoNumero"].value;
  if (vazio == "" || vazio == null) {
    errorMessageElement.innerHTML = "Campo inválido";
    return false;
  }
}

function validateEmptyValidade() {
  let errorMessageElement = document.getElementById("validadeMsgErrorValidation");
  var vazio = document.forms["finalizarCompra"]["validade"].value;
  if (vazio == "" || vazio == null) {
    errorMessageElement.innerHTML = "Campo inválido";
    return false;
  }
}

function validateEmptyCodigo() {
  let errorMessageElement = document.getElementById("codigoMsgErrorValidation");
  var vazio = document.forms["finalizarCompra"]["codigo"].value;
  if (vazio == "" || vazio == null) {
    errorMessageElement.innerHTML = "Campo inválido";
    return false;
  }
}

function validateEmptyCep() {
  let errorMessageElement = document.getElementById("cepMsgErrorValidation");
  var vazio = document.forms["finalizarCompra"]["cep"].value;
  if (vazio == "" || vazio == null) {
    errorMessageElement.innerHTML = "Campo inválido";
    return false;
  }
}

function validateEmptyNome() {
  let errorMessageElement = document.getElementById("nomeMsgErrorValidation");
  var vazio = document.forms["finalizarCompra"]["nome"].value;
  if (vazio == "" || vazio == null) {
    errorMessageElement.innerHTML = "Campo inválido";
    return false;
  }
}

function ValidatePhone(inputText) {
  let phoneFormat = /^([9][1236])[0-9]*$/;

  let errorMessageElement = document.getElementById("phoneFormat");

  if (inputText.value.match(phoneFormat)) {
    errorMessageElement.innerHTML = "";
    return true;
  }
  else {
    errorMessageElement.innerHTML = "Inseriu um número de telemóvel inválido";
    inputText.focus();
    return false;
  }
}



function cleanLocalStorage(){
  localStorage.removeItem("myBike");
  document.getElementById("listaFatura").innerHTML="";
  document.getElementById("valorCompra").innerHTML="";
  document.getElementById("valorCompra").style.display = "none";
  document.getElementById("badgeCarrinho").innerHTML="";
}



window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 150|| document.documentElement.scrollTop > 150) {
    document.getElementById("mouse").style.width = "0";
    document.getElementById("mouse").style.color="transparent";
    document.getElementById("mouse").style.height = "0";
    document.getElementById("mouse").style.opacity = "0";
  } else {
    document.getElementById("mouse").style="mouse";
    
  }
}


