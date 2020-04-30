"use strict"

const regxs = 
    {
        "lower": /^[ a-z ]+$/,
        "upper": /^[ A-Z ]+$/,
        "upperLower": /^[ 0-9 ]+$/
    }



document.querySelector( ".userInput" ).onkeyup = function()
    {
        const cardHeader     = document.querySelector( "#cardHeader" );
        var   userInput      = document.querySelector( ".userInput" ).value;
        cardHeader.innerHTML = "<span class = 'text-success'>" + userInput.length + "</span>"; 

        if( regxs.lower.test( userInput ) )
            {
                const minuscula     = document.querySelector( "#minini" );   
                minuscula.innerHTML = "<input type='checkbox' checked>";
            } 
    };

