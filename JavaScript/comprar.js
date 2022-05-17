function openNav() {
    document.getElementById("menuLateral").style.width = "15%";
  }
  
  function closeNav() {
    document.getElementById("menuLateral").style.width = "0";
  }


  function openPro() {
    document.getElementById("proLateral").style.width = "15%";
  }
  
  function closePro() {
    document.getElementById("proLateral").style.width = "0";
  }

  function openNav() {
    document.getElementById("myNav").style.height = "30%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  
  //PRINT BILL
  function salvarFicheiro(){

    //1- Form information
    var NOME = document.getElementById('nome').value;
    var EMAIL = document.getElementById('email').value;
    var TELF = document.getElementById('telemovel').value;
    var MORADA = document.getElementById('endereco').value;
    var POSTAL = document.getElementById('postal').value;
    var PAIS = document.getElementById('pais').value;
    var DISTRITO = document.getElementById('distrito').value;
    
    
    

    var CARTAO = document.getElementById('cartao').value;
    var NUMERO = document.getElementById('numero').value;
    var VALIDADE = document.getElementById('validade').value;
    var CODE = document.getElementById('codigo').value;
    var CEP = document.getElementById('cep').value;
    var PAGAMENTO = document.querySelector('input[name="pay"]:checked').value; 
    
    
    

    //2- Store info
    let info =
    'Nome: ' + NOME + '\r\n' +
    'Email: ' + EMAIL + '\r\n' +
    'Telemóvel: ' + TELF + '\r\n'+
    'Morada: ' + MORADA + '\r\n' +
    'Código-Postal: ' + POSTAL + '\r\n' +
    'País: ' + PAIS + '\r\n' +
    'Distrito: ' + DISTRITO + '\r\n' +
    'Forma de Pagamento: ' + PAGAMENTO + '\r\n' +
    'Nome do Cartão: ' + CARTAO + '\r\n' +
    'Número do Cartão: ' + NUMERO + '\r\n' +
    'Validade: ' + VALIDADE + '\r\n'+
    'Código do Cartão: ' + CODE + '\r\n' +
    'CEP: ' + CEP;

  

    //Convert to blob
    var textToBlob = new Blob([info], {type: 'text/plain'});
    var sFileName = "Form.txt";

    var newLink = document.createElement("a");
    newLink.download = sFileName;

    if(window.webkitURL != null){
        newLink.href = window.webkitURL.createObjectURL(textToBlob);
    }
    else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
}
    newLink.click();
}

//REGISTER
function registo(){
  var userName = document.getElementById("userName").value;
  var userMail = document.getElementById("userMail").value;
  let myObj = {
      name: userName,
      email: userMail 
    };

  let myObj_serialized = JSON.stringify(myObj);

  localStorage.setItem("myObj", myObj_serialized);    
} 

function loadUserName(){
    let dataFromLocalStorage = localStorage.getItem("myObj"); 
    let myObj_deserialized = JSON.parse(dataFromLocalStorage); 

      
    let user = document.querySelectorAll(".user");
    
    for (i = 0; i < user.length; i++) {
      user[i].innerHTML =  myObj_deserialized.name;
    }          
}

//SHOPPING CART
function produto(tipoNegocio){
  let params = (new URL(document.location)).searchParams;
  let bike = params.get("nome");
  let codigo = params.get("codigo");
  let custo = params.get("custo");
  if(tipoNegocio=="aluguer"){
    let horas = document.getElementById("horas").value;
    custo = custo * horas;
  }

  let myBike = {
      codigo: codigo,  
      bicla: bike,
      preco: custo      
    };

  let myBike_serialized = JSON.stringify(myBike);

  localStorage.setItem("myBike", myBike_serialized);   
} 

function comprar(){
  let dataFromLocalStorage = localStorage.getItem("myBike"); 
  let myBike_deserialized = JSON.parse(dataFromLocalStorage); 

  if(myBike_deserialized != null) {

    let bicicleta = document.querySelectorAll(".bikeName");
    let valor = document.querySelectorAll(".bikePrice");
    
    for (i = 0; i < bicicleta.length; i++) {
      bicicleta[i].innerHTML =  myBike_deserialized.bicla;{
        bicicleta[i].value =  myBike_deserialized.bicla;
      }
    }
  
    for (i = 0; i < valor.length; i++) {
      valor[i].innerHTML =  myBike_deserialized.preco;{
        valor[i].value =  myBike_deserialized.preco + " €";
      }
    }

  }
  
}



function voltarComprar(){
  window.open("paginaComprasLogado.html","_self");
}

function voltarAlugar(){
  window.open("paginaAluguerLogado.html","_self");
}


function trabalhos(){
  window.open("paginaCompras.html","_self");
}

function abrirBicicletaCompra(){
  window.open("infoBicicletaCompra.html","_self");
}

function abrirBicicletaAluguerLogado(){
  window.open("infoBicicletaAluguerLogado.html","_self");
}

function logado(){
  window.open("homepageLogado.html","_self");
}

function trabalhosLogado(){
  window.open("paginaComprasLogado.html","_self");
}

function aluguerLogado(){
  window.open("paginaAluguerLogado.html","_self");
}

function abrirBicicletaCompraLogado(){
  window.open("infoBicicletaCompraLogado.html","_self");
}

function abrirBicicletaAluguerLogado(){
  window.open("infoBicicletaAluguerLogado.html","_self");
}

function finalCompra(){
  window.open("formCompra.html","_self");
}

function finalAluguer(){
  window.open("formAluguer.html","_self");
}

function editarPerfil(){
  windowopen("editar.html","_self");
}

function criarConta(){ 
  window.open("registo.html","_self");
}

function restauroHomepage(){
  window.open("../HTML/homepage.html#destinoRestauro","_self");
}

function aluguerHomepage(){
  window.open("../HTML/homepage.html#destinoAluguer", "_self")
}

function restauroHomepageLogado(){
  window.open("../HTML/homepageLogado.html#destinoRestauroLogado", "_self")
}

function aluguerHomepageLogado(){
  window.open("../HTML/homepageLogado.html#destinoAluguerLogado", "_self")
}

function getBikeInfo(tipoNegocio) {

    let params = (new URL(document.location)).searchParams;
    let name = params.get("nome");
    let custo = params.get("custo");

    let tituloBicicleta = document.querySelector("#nomeBike");
    let precoBicicleta = document.querySelector("#priceFinal");
    tituloBicicleta.innerHTML = name;
    if(tipoNegocio=="aluguer"){
      let horas = document.getElementById("horas").value;
      precoBicicleta.innerHTML = horas * custo + " €";
    } else {
      precoBicicleta.innerHTML =custo + " €";
    }

}

function getBikeInfoFinal() {
  let horas = document.getElementById("horas").value;
  let params = (new URL(document.location)).searchParams;
  let name = params.get("nome");
  let custo = params.get("custo");

  let tituloBicicleta = document.querySelector("#nomeBike");
  let precoBicicleta = document.querySelector("#priceFinal");
  tituloBicicleta.innerHTML = name;
  precoBicicleta.innerHTML = custo * horas + " €";
}



