//parseInt(document.getElementById("shift-one").textContent);
//let x = parseInt(document.getElementById("shift-one").value);
//document.getElementById("calc-shift-one").value = 25 + x;

let xy = document.getElementById("weeks");
xy.addEventListener("change", myFunction);

function myFunction() {
  let noOfWeeks = document.getElementById("weeks").value;
  let inputTableRows = document.getElementById("input-table").innerHTML;
  let calcTableRows = document.getElementById("calc-table").innerHTML;

  for (let i = 1; i < noOfWeeks; i++) {
    inputTableRows += "<tr><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td></tr>" + i;
  }

  for (let i = 1; i < noOfWeeks; i++) {
    calcTableRows += "<tr><td><input type='text' readonly></td><td><input type='text' readonly></td><td><input type='text' readonly></td><td><input type='text' readonly></td><td><input type='text' readonly></td><td><input type='text' readonly></td><td><input type='text' readonly></td></tr>" + i;
  }

  document.getElementById("input-table").innerHTML = inputTableRows;
  document.getElementById("calc-table").innerHTML = calcTableRows;
}