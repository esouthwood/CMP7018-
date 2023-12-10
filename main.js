function submitted() {
  alert("Your results have been submitted!");
}

document.querySelectorAll('button').forEach(btn => btn.onclick = incDec);


function incDec(e) {
  const num = this.closest(".quantity").querySelector("input");
  let val = +num.value;
  if (this.matches(".up")) {
    val++;
  } else {
    val--;
  }
  val = val < 0 ? 0 : val;
  num.value = val;
}

function customizeText(size) {
  var elements = document.querySelectorAll(".changeable-text");

  elements.forEach(function(element) {
    // Change font size
    var currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
    //var newSize = (parseFloat(currentSize) + 2) + "px"; // Increase by 2 pixels
    element.style.fontSize = size;

    // Change color
    var newColor = "red"; // Call a function to get a random color
    element.style.color = newColor;
  });
}

function applyColorMode() {
  var body = document.body;
  var colorMode = document.getElementById("colorMode").value;

  if (colorMode === "colorBlind") {
    body.classList.add("color-blind");
  } else {
    body.classList.remove("color-blind");
  }
}