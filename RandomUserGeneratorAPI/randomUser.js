"use strict"

console.log( "Yes!" );

const boton = document.querySelector("#mainButton");

function getUser()
                {
                    let url = 'https://randomuser.me/api/';
                    fetch( url )                                      //hacemos una petición al servidor (con la url)
                        .then( response => response.json() )          // promesa1 : obtenemos respuesta del servidor (en formato json)
                        .then( data     =>                            // Promesa2 : Manipulamos el contenido de la respuesta (promesa1)
                            {
                                var mail   = data.results[0].email;
                                console.log( mail );
                                document.querySelector( ".mainSection" ).innerHTML  = "<p>" + mail + "</p>";
                                document.querySelector( ".mainSection" ).innerHTML += `<img src='${data.results[0].picture.large}' 
                                                                                        class='rounded-circle img-fluid' width='150px'></img>`;
                            } )    
                        .catch( error   => { console.log( "error" ) } )  //Capturamos error en caso de que no haya respuesta a nuestra petición
                };