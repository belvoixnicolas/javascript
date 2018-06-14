var text = ['Sa c\'est le text de la premié paragraphe.', 'Et sa c\'est le text du deuxième paragraphe.'];

for (var i = 0; i < text.length; i++) {
  document.getElementsByTagName('body')[0].innerHTML += '<p>' + text[i] + '</p>';

  var paragraphe = document.getElementsByTagName('p')[i];
  paragraphe.style = 'color: grey; font-size: 20px; text-align: center; background: rgba(15, 100, 50, .5);';
}
