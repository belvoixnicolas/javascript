var prixHt = parseFloat(prompt('Prix HT'));

var prixTtc = prixHt + (prixHt / 100 * 20);

alert(prixTtc);
