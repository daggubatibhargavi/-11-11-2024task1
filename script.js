let p = document.getElementById("display");
// function playAudio(value) {
//   if (value === "7") {
//     document.getElementById("audio7").play();
//   }
//   validate(value);
// }
function validate(x) {
  if (p.textContent === "0") {
    p.textContent = "";
  }
  p.textContent += x;
}

function getResult() {
  p.textContent = eval(p.textContent);
  //   console.log(x);
}
function clearCal() {
  p.textContent = "";
}
