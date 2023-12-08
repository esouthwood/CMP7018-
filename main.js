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
