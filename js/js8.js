function src() {
  console.log(document.getElementsByTagName('img')[0].src);
}

function img() {
  function test() {
      truc++;
      lien.style = 'transform: rotate(' + truc + 'deg);';

      if (truc == 180) {
        if (lien.src == 'http://localhost/javascript/img/img.jpg') {
          lien.src = 'http://localhost/javascript/img/img2.jpg';
          src();
        }
        else {
          lien.src = 'http://localhost/javascript/img/img.jpg';
          src();
        }
      }
      else if (truc == 360) {
        clearInterval(trucDeux);
        lien.style = 'transform: rotate(0deg);';
      }
  }

  var lien = document.getElementsByTagName('img')[0];

  var truc = 0;
  var trucDeux = setInterval(test, 10);
}

var rota = 0;

src();
