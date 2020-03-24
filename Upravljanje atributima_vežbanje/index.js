//Rad sa atributima
var img = document.getElementsByTagName ('img')[0];
var frontBtn = document.getElementById('front');
var backBtn = document.getElementById('back');

backBtn.addEventListener('click', function () {
  img.setAttribute('src', 'back.jpg');
})

frontBtn.addEventListener('click', function () {
  img.setAttribute('src', 'front.jpg');
})
//Upravljanje s atributima
var forma = document.forms[0];
forma.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username');
    var password = document.getElementById('password');

    if (username.value === "Jelena" && password === "biolog1991") {
          forma.submit();
    } else {
      alert("Username i/ili password nisu tacni!")
    }
})
//Tajmeri
var boja1 = document.getElementsByClassName('boje')[0];
var boja2 = document.getElementsByClassName('boje')[1];
var boja3 = document.getElementsByClassName('boje')[2];

var mainLoop = setInterval(function () {
  boja1.style.background = "red";
  boja2.style.background = "white";
  boja3.style.background = "white";
  var loopYellow = setTimeout (function () {
  boja2.style.background = "yellow";
  }, 2000)
  var loopGreen = setTimeout (function () {
  boja1.style.background = "white";
  boja2.style.background = "white";
  boja3.style.background = "green";
  }, 4000)
}, 7000);

//Date/Time funkcije
var clockDiv = document.getElementById('clock');
function time () {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  if (h < 10) {
      h = "0"+ h;
  }
  if (m < 10) {
      m = "0"+ m;
  }
  if (s < 10) {
      s = "0" + s;
  }

  var sat = h+" : "+m+" : "+s;
  clockDiv.innerHTML = sat;
}
time();
var loop2 = setInterval(time, 1000);
