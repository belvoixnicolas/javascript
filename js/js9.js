var textH1 = document.querySelector("h1").innerText;

document.querySelector("h1").innerHTML = '<span>' + textH1 + '</span>';

document.querySelector("span").onmouseenter = function(){
	this.style.color = "red";
};

document.querySelector("span").onmouseout = function(){
  this.style.color = "black";
};

var i = 0;
var defaut = document.querySelector("span").innerHTML;
document.querySelector("span").onclick = function(){var machin = setInterval(function(){
  i = i + 5;
  document.querySelector("span").innerHTML = 'J\'me casse!';
  document.querySelector('h1').style.marginLeft = i + 'px';
  if (i > window.innerWidth) {
    clearInterval(machin);
    i = 0;
    document.querySelector('span').innerHTML = defaut;
    document.querySelector('h1').style.marginLeft = '0px';
  }
}, 1)};
