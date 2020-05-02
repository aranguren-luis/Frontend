"use strict"

function pokemon()
    {
        const userInput = document.querySelector( ".MainInput" ).value;
        const url       = "https://pokeapi.co/api/v2/pokemon/" + userInput;

        fetch( url )
        .then( response => response.json() )
        .then( data => 
            {
                let pokeName       = document.querySelector( ".pokeInfo" );
                pokeName.innerHTML = `<p>${data.name} #${data.order}</p>`;
                pokeName.innerHTML += `<img src="${data.sprites.front_default}"/>`;
            })
        .catch( err => console.log( err ) );
    };


