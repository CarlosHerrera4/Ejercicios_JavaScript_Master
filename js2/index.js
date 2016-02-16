'use strict';

/*
  Crear un bucle for que imprima los mensajes:
  Valor de i: 0
  Valor de i: 2
  ... hasta ...
  Valor de i: 9
*/
var i;
for (i=0; i<10; i++) {
    alert(i)
}


/*
  Crear un bucle for que imprima los mensajes: con números pares
  Valor de i: 0
  Valor de i: 2
  Valor de i: 4
  ... hasta ...
  Valor de i: 8
*/
for (i=0; i<9; i=i+2) {
    alert(i)
}

/*
  Crear un bucle dentro de otro (anidados) que imprima
  Valor de i: 0
  Valor de j: 0
  
  Valor de i: 0
  Valor de j: 1
  
  Valor de i: 0
  Valor de j: 2
  
  ... hasta ...
  
  Valor de i: 9
  Valor de j: 9
*/
var i,j;
for (i=0; i<10; i++) {
    for (j=0; j<10; j++) {
        document.writeln('Valor de i: ',i)
        document.writeln('Valor de j: ',j)
        document.writeln(',')
    }
}