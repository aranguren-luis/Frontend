"use strict"

console.log( "Ok!" );



function addInput()
    {
        const userInput = document.querySelector( ".MainInput" ).value;

        const listInput = document.querySelector( ".listInput" );

        listInput.innerHTML += "<li>" + userInput +  "&nbsp;&nbsp;&nbsp;<input type='checkbox'></input>" + "</li>";

    };

function clearInput()
    {
        const listClear     = document.querySelector( ".listInput" );
        listClear.innerHTML = "";  
        
    };
