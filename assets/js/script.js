//parseInt(document.getElementById("shift-one").textContent);
//let x = parseInt(document.getElementById("shift-one").value);
//document.getElementById("calc-shift-one").value = 25 + x;

myFunction();

let xy = document.getElementById("calculate-roster");
xy.addEventListener("click", myFunction);

let calcShift = document.getElementById("calculate-shift");
calcShift.addEventListener("click", myFunction2);


function myFunction2() {

  let shiftStartTime = document.getElementById("one").value;
  let shiftEndTime = document.getElementById("two").value;

  let timeArray1 = shiftStartTime.split(":");
  let timeArray2 = shiftEndTime.split(":");

  let startMinutes = (parseInt(timeArray1[0], 10) * 60) + (parseInt(timeArray1[1], 10));
  let endMinutes = (parseInt(timeArray2[0], 10) * 60) + (parseInt(timeArray2[1], 10));

  let shiftLength = (endMinutes - startMinutes) / 60;

  shiftLength = shiftLength.toFixed(2);
  if (shiftLength < 0) {
    alert("Shift end time needs to be after shift start time");
  } else {
    alert(shiftLength);
  }

}


function myFunction() {
  let noOfWeeks = document.getElementById("weeks").value;
  let inputTable = document.getElementById("input-table");
  let calcTable = document.getElementById("calc-table");

  for (let i = 2; i < inputTable.rows.length;) {
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
    let c8 = row.insertCell(7);
    let c9 = row.insertCell(8);
    let c10 = row.insertCell(9);
    let c11 = row.insertCell(10);
    let c12 = row.insertCell(11);
    let c13 = row.insertCell(12);
    let c14 = row.insertCell(13);

    c1.innerHTML = "<td><input type='time' value='09:00'></td>";
    c2.innerHTML = "<td><input type='time' value='18:00'></td>";
    c3.innerHTML = "<td><input type='time' value='09:00'></td>";
    c4.innerHTML = "<td><input type='time' value='18:00'></td>";
    c5.innerHTML = "<td><input type='time' value='09:00'></td>";
    c6.innerHTML = "<td><input type='time' value='18:00'></td>";
    c7.innerHTML = "<td><input type='time' value='09:00'></td>";
    c8.innerHTML = "<td><input type='time' value='18:00'></td>";
    c9.innerHTML = "<td><input type='time' value='09:00'></td>";
    c10.innerHTML = "<td><input type='time' value='18:00'></td>";
    c11.innerHTML = "<td><input type='time' value='09:00'></td>";
    c12.innerHTML = "<td><input type='time' value='18:00'></td>";
    c13.innerHTML = "<td><input type='time' value='09:00'></td>";
    c14.innerHTML = "<td><input type='time' value='18:00'></td>";

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