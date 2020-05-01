"use strict"

console.log( "Ok!" );



function addInput()
    {
        const userInput = document.querySelector( ".MainInput" ).value;

        const listInput = document.querySelector( ".listInput" );

        listInput.innerHTML += "<li>" + userInput + "</li>";

    };

function clearInput()
    {
        const listClear     = document.querySelector( ".listInput" );
        listClear.innerHTML = "";  
        
    };
