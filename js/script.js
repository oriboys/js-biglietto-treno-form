
// var comparsa = document.getElementById('genera');
// comparsa.addEvenListener('click', function() {
//
// });

var nome = document.getElementById('nome').value;
console.log(nome);

var distanza = document.getElementById('km').value;
console.log(distanza);

var eta = document.getElementById('eta').value;
console.log(eta);

var prezzo = distanza * 0.21;
console.log(prezzo);


document.getElementById('printedName').innerHTML = nome;

document.getElementById('printedName').className = 'textchange';


if (eta == 'Over 65') {
  document.getElementById('offerta').innerHTML = 'sconto' + ' ' + 'Over 65';
} else if (eta == 'Minorenne'){
  document.getElementById('offerta').innerHTML = 'sconto' + ' ' + 'minorenne';
} else {
  document.getElementById('offerta').innerHTML = 'prezzo intero';
}


var carrozza = Math.floor(Math.random() * 10) + 1;

document.getElementById('carrozza').innerHTML = carrozza;


var codiceCp = Math.floor(Math.random() * 100000) + 1;

document.getElementById('codiceCp').innerHTML = codiceCp;


if (eta == 'Over 65'){
  prezzo = prezzo - (prezzo * 0.4);
} else if (eta == 'Minorenne'){
  prezzo = prezzo - (prezzo * 0.2);
}

prezzo =parseFloat(prezzo.toFixed(2));

document.getElementById('CostoBiglietto').innerHTML = prezzo + '€';





// comparire e scomparire
