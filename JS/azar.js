"use strict"


//https://unicode-table.com/en/#control-character < 

//Función para obtener minúsculas
function lowerCase()
    {
        let number   = Math.floor( Math.random() * 26 ) + 97; // 97: consultar link de arriba
        var lowcase  = String.fromCharCode( number );
        return lowcase;
    };

//Función para obtener letras mayúsculas
function upperCase()
    {
        let number    = Math.floor( Math.random() * 26 ) + 65; // 65: consultar link de arriba
        var uppercase = String.fromCharCode ( number );
        return uppercase;
    };

//Función para obtener número aleatorio
function randomNumber()
    {
        var random = String.fromCharCode( Math.floor( Math.random() * 10 ) * 48 ); // 48: consultar link de arriba
        return random;
    };

//Función para obtener símbolo
function symbolo()
    {
        var simbolo = "!@#$%&*";
        return simbolo[ Math.floor( Math.random() * simbolo.length) ];
    };




