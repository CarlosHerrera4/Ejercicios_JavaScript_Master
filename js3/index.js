'use strict';

/* 
  Declara un objeto mapa que tenga como información:
    - Una propiedad basemap con valor "topo" como string
    - Una propiedad center con un array de dos valores (-3.688510, 40.453010)
    - Una propiedad zoom con valor 16
*/
var mapa = {
    'basemap' : 'topo',
    'center' : [-3.688510, 40.453010],
    'zoom' : 16
};


/*
  Añádele una propiedad 'autoResize' a verdadero (booleano)
*/
mapa.autoResize = true;


/*
  Imprime todos los valores del objeto usando un blucle for
*/
for (var property in mapa) {
    if (mapa.hasOwnProperty(property)) {
        document.writeln(mapa[property]);
        document.writeln()
    }
}