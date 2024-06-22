//parseInt(document.getElementById("shift-one").textContent);
//let x = parseInt(document.getElementById("shift-one").value);
//document.getElementById("calc-shift-one").value = 25 + x;

let xy = document.getElementById("calculate-roster");
xy.addEventListener("click", myFunction);

function myFunction() {
  let noOfWeeks = document.getElementById("weeks").value;
  let inputTableRows = document.getElementById("input-table").innerHTML;
  let calcTableRows = document.getElementById("calc-table").innerHTML;

  inputTableRows = "<tr><th>Sunday</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th></tr><tr><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td> <td><input type='text'></td><td><input type='text'></td></tr>";
  calcTableRows = " <tr><th>Sunday</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th></tr><tr><td><input type='text'readonly></td><td><input type='text' readonly></td><td><input type='text' readonly></td><td><input type='text' readonly></td><td><input type='text' readonly></td> <td><input type='text' readonly></td><td><input type='text' readonly></td></tr>";

  for (let i = 1; i < noOfWeeks; i++) {
    inputTableRows += "<tr><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td></tr>";
  }

  for (let i = 1; i < noOfWeeks; i++) {
    calcTableRows += "<tr><td><input type='text' readonly></td><td><input type='text' readonly></td><td><input type='text' readonly></td><td><input type='text' readonly></td><td><input type='text' readonly></td><td><input type='text' readonly></td><td><input type='text' readonly></td></tr>";
  }

  document.getElementById("input-table").innerHTML = inputTableRows;
  document.getElementById("calc-table").innerHTML = calcTableRows;

}