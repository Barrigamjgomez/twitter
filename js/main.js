function contar() {
  var max = "140";
  var text = document.getElementById("ingreso").value;
  var long = text.length;

    if(long <= max){
      document.getElementById("number").value = max-long;
     } else {
      document.getElementById("number").value = text.substr(0, max);
  }
}


function add(){

    //llamo a mi ID ingreso donde irán los cometarios
    var comment = document.getElementById("ingreso").value;

    //Limpio mi cuadro de ingreso
    document.getElementById("ingreso").value = "";


    // si ingresa algo vacio retorne un alerta
    if (comment === ""){
      alert("Debes ingresar un comentario");
    }

    else {
      var cont = document.createElement("div"); // creando contenedor
      cont.className = "contenedor"  // dando una clase al contenedor
      var dateSpan = document.createElement("span"); // span con fecha de ingreso
      dateSpan.className ="date"
      var tweetP = document.createElement("p"); // parrafo de pensamientos

      // agrego mis elementos creados al contenedor
      cont.appendChild(dateSpan);
      cont.appendChild(tweetP);

      dateSpan.textContent = new Date() ;
      tweetP.textContent = comment;


    var timeLine = document.getElementById ("lineaTiempo");
    timeLine.insertBefore(cont, timeLine.children[0]);

    }
  }