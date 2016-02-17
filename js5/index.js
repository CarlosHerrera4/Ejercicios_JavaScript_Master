'use strict';

// Accede al elemento h1 y modifica el color #F00
var eleh1 = document.getElementsByTagName('h1');
eleh1[0].setAttribute("style","color:#F00")
//document.getElementsByTagName('h1').style = 'color: #F00';

// Accede al elemento con id "header" y calmbia el color de fondo a #CCC
document.getElementById('header').style = 'background-color: #CCC';

// Accede al elemento con clase 'map' y establece el ancho a tamaño 500 px ('with 500px')
var eleh2 = document.getElementsByClassName('map');
eleh2[0].setAttribute("style","width:50px");
//cument.getElementsByClassName('map').style = 'width: 50px';