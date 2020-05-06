"use strict"

const pintar = () => 
    {
        const cubo1     = document.querySelector( "#cubo1" );
        const cubo2     = document.querySelector( "#cubo2" );
        var x           = Math.floor( Math.random( 6 ) * 6 + 1);
        var y           = Math.floor( Math.random( 6 ) * 6 + 1 );
        cubo1.innerHTML = "<span class = 'text-success' style = 'font-size: 55px'>"+ x + "</style></span>";
        cubo2.innerHTML = "<span class = 'text-success' style = 'font-size: 55px'>"+ y + "</style></span>";
        const total     = x + y;
        total < 6 ? "Pasaste" : "Tomate un shot";

    };


function lanzar()
    {
        const cubo1 = document.querySelector( "#cubo1" );
        anime
            ({
                targets    : cubo1,
                translateY : 100, 
                rotate     : '2turn' 
            });

        const cubo2 = document.querySelector( "#cubo2" );
        anime
            ({
                targets    : cubo2,
                translateY : 100, 
                rotate     : '2turn' 
            });
        
    };

const volver = () => 
    {
        const cubo1 = document.querySelector( "#cubo1" );
        anime
            ({
                targets    : cubo1,
                translateY : -50, 
                rotate     : '-2turn' 
            });

        const cubo2 = document.querySelector( "#cubo2" );
        anime
            ({
                targets    : cubo2,
                translateY : -50, 
                rotate     : '-2turn' 
            });
    }

