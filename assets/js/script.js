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



  


  let table = document.getElementById("test-table");

  for (var i = 1; i < table.rows.length;) {
    table.deleteRow(i);
  }

  for (let i = 0; i < noOfWeeks; i++) {

    let row = table.insertRow(-1);

    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    let c6 = row.insertCell(5);
    let c7 = row.insertCell(6);

    c1.innerText = "0800";
    c2.innerText = "0900";
    c3.innerText = "0900";
    c4.innerText = "0900";
    c5.innerText = "0900";
    c6.innerText = "0900";
    c7.innerText = "0900";
  }

}