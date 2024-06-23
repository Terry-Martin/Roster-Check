//parseInt(document.getElementById("shift-one").textContent);
//let x = parseInt(document.getElementById("shift-one").value);
//document.getElementById("calc-shift-one").value = 25 + x;

let xy = document.getElementById("calculate-roster");
xy.addEventListener("click", myFunction);


function myFunction() {
  let noOfWeeks = document.getElementById("weeks").value;
  let inputTable = document.getElementById("input-table");
  let calcTable = document.getElementById("calc-table");

  for (let i = 1; i < inputTable.rows.length;) {
    inputTable.deleteRow(i);
  }

  for (let i = 0; i < noOfWeeks; i++) {

    let row = inputTable.insertRow(-1);

    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    let c6 = row.insertCell(5);
    let c7 = row.insertCell(6);

    c1.innerHTML = "<td></td><input type='time'></td>";
    c2.innerHTML = "<td></td><input type='time'></td>";
    c3.innerHTML= "<td></td><input type='time'></td>";
    c4.innerHTML = "<td></td><input type='time'></td>";
    c5.innerHTML = "<td></td><input type='time'></td>";
    c6.innerHTML = "<td></td><input type='time'></td>";
    c7.innerHTML = "<td></td><input type='time'></td>";

  }

  for (let i = 1; i < calcTable.rows.length;) {
    calcTable.deleteRow(i);
  }

  for (let i = 0; i < noOfWeeks; i++) {

    let row = calcTable.insertRow(-1);

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
    c7.innerHTML = "0800";

  }
}