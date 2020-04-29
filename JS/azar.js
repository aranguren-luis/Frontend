"use strict"

var char = String.fromCharCode;

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
        return simbolo[ Math.floor( Math.random() * simbolo.length ) ];
    };


const regxs = 
    {
        "lower": /^[a-z0-9 ]+$/,
        "upper": /^[A-Z0-9 ]+$/
    }



document.querySelector( ".userInput" ).onkeyup = function()
    {
        var tecleo           = document.querySelector( ".userInput" ).onkeyup; 
        const cardHeader     = document.querySelector( "#cardHeader" );
        var   userInput      = document.querySelector( ".userInput" ).value;
        cardHeader.innerHTML = "<span class = 'text-success'>" + userInput.length + "</span>"; 

        if( regxs.lower.test( userInput ) )
            {
                const minuscula     = document.querySelector("#minini");   
                minuscula.innerHTML = "<input type='checkbox' checked>";  
        
            };

    };



