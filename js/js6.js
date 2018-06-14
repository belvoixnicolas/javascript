var div = document.getElementsByTagName('div');
console.log(div);
div[0].id = "truc";

for (var i = 0; i < div.length; i++) {
  div[i].style.color = 'pink';
  div[i].style.textAlign = 'center';
}

var textUn = div[0].innerHTML;
var textDeux = div[1].innerHTML;

div[0].innerHTML = textDeux;
div[1].innerHTML = textUn;

div[0].style.textAlign = 'left';
div[1].style.textAlign = 'right';
