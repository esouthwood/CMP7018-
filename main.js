/**
Collect all <button> into a NodeList
On each <button> register the "click" event
Event handler incDec() is called
*/
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
