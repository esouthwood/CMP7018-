
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


var modal = document.getElementById("myModal3");

// Get the button that opens the modal
var btn = document.getElementById("btnsubmit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
