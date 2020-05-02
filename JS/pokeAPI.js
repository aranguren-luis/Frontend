"use strict"

function pokemon()
    {
        const userInput = document.querySelector( ".MainInput" ).value;
        const url       = "https://pokeapi.co/api/v2/pokemon/?offset=" + userInput + "&limit=1";
        
        fetch( url )
        .then( response => response.json() )
        .then( data => 
            {
                console.log( data.results[0].name );
            })
        .catch( err => console.log( err ) );
    };


