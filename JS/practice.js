"use strict"

var manzana = 
    {
        color      : "rojo",
        tamaño     : 10.3,
        peso       : 50 + " gramos",
        comestible : true,
        tipo       : "fruta",
        rueda      : function(){ return "puedo rodar y estar parada" },
        colores    : [ "rojo", "verde", "amarillo", "ambar" ]
    };

var fruta        = new Object();
fruta.name       = ["Banana", "Platano", "Cambur"];
fruta.color      = "verde";
fruta.tamaño     = 15.7;
fruta.peso       = 100 + "gramos";
fruta.comestible = true; 
fruta.tipo       = "fruta";
fruta.nada       = function() { return "no hago nada" };
fruta.colores    = [ "amarillo", "verde", "Blue Java", "Rouges" ];
//console.log(fruta);

var verFruta = document.querySelector( ".titulo" );
verFruta.innerHTML = `<br>Fruta:       ${fruta.name}
                      <br>Colores:     ${fruta.colores}`;

var frutaStringfy = JSON.stringify(fruta);

console.log( JSON.parse( frutaStringfy ) );