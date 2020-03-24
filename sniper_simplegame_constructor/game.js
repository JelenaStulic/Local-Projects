var wrapp = document.querySelector ('.wrapp');
var info = document.querySelector ('#info');

function makeSoldiers(num) {
  var allSoldiers = [];
  for (var i = 0; i < num; i++) {
    allSoldiers.push(new CreateSoldiers());
  }
  return allSoldiers;
}
var soldier = makeSoldiers(1000);
console.log(soldier);

displaySoldiers();
function displaySoldiers() {
  for (var i = 0; i < soldier.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.id = i;
    newDiv.addEventListener('mouseover', showInfo);
    if (soldier[i].weapon === "Sniper") {
      newDiv.className = "sniper";
    }else if (soldier[i].weapon === "Knife") {
        newDiv.className = "knife";
    } else {
      newDiv.className = "soldier";
    }
    wrapp.appendChild(newDiv);
    }
  }

function showInfo() {
  var current = soldier[this.id];
  info.innerHTML = current.info();
  //info.style.top = e.y + "px";
  //info.style.left = e.x + "px";
}
