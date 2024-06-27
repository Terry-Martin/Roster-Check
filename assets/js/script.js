addRows();

let rosterLength = document.getElementById("calculate-roster");
rosterLength.addEventListener("click", addRows);

let calcShift = document.getElementById("calculate-shift");
calcShift.addEventListener("click", calcShiftLength);

function addRows() {
  let noOfWeeks = document.getElementById("weeks").value;
  let inputTable = document.getElementById("input-table");

  if (noOfWeeks < 1) {
    alert("Rotation needs to be a minimum of 1 week")
  } else {

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

      c1.id = "cell1";
      c2.id = "cell2";
      c3.id = "cell3";
      c4.id = "cell4";
      c5.id = "cell5";
      c6.id = "cell6";
      c7.id = "cell7";
      c8.id = "cell8";
      c9.id = "cell9";
      c10.id = "cell10";
      c11.id = "cell11";
      c12.id = "cell12";
      c13.id = "cell13";
      c14.id = "cell14";

      c1.innerText = "09:00";
      c2.innerText = "18:00";
      c3.innerText = "09:00";
      c4.innerText = "18:00";
      c5.innerText = "09:00";
      c6.innerText = "18:00";
      c7.innerText = "09:00";
      c8.innerText = "18:00";
      c9.innerText = "09:00";
      c10.innerText = "18:00";
      c11.innerText = "09:00";
      c12.innerText = "18:00";
      c13.innerText = "09:00";
      c14.innerText = "18:00";

    }

    //populateShiftCalcTable();

  }
}

//populateShiftCalcTable();

function populateShiftCalcTable() {

  let noOfWeeks = document.getElementById("weeks").value;
  let calcTable = document.getElementById("calc-table");

  // Check and change var to let
  var curCellIndex = 0;

  if (noOfWeeks < 1) {
    alert("Rotation needs to be a minimum of 1 week")

  } else {

    for (let i = 1; i < calcTable.rows.length;) {
      calcTable.deleteRow(i);
    }

    for (let i = 0; i < noOfWeeks; i++) {

      // Add ID to dynamicaally created cells
      // https://stackoverflow.com/questions/23003341/add-id-dynamically-to-each-table-cells


      let row = calcTable.insertRow(-1);

      let c1 = row.insertCell(0);
      c1.id = "cell-" + curCellIndex;
      curCellIndex++;

      let c2 = row.insertCell(1);
      c2.id = "cell-" + curCellIndex;
      curCellIndex++;

      let c3 = row.insertCell(2);
      c3.id = "cell-" + curCellIndex;
      curCellIndex++;

      let c4 = row.insertCell(3);
      c4.id = "cell-" + curCellIndex;
      curCellIndex++;

      let c5 = row.insertCell(4);
      c5.id = "cell-" + curCellIndex;
      curCellIndex++;

      let c6 = row.insertCell(5);
      c6.id = "cell-" + curCellIndex;
      curCellIndex++;

      let c7 = row.insertCell(6);
      c7.id = "cell-" + curCellIndex;
      curCellIndex++;

      c1.innerText = 1;
      c2.innerText = 2;
      c3.innerText = 3;
      c4.innerText = 4;
      c5.innerText = 5;
      c6.innerText = 6;
      c7.innerText = 7;

    }
  }
}

function calcShiftLength() {

  let shiftStartTime = document.getElementById("cell1");
  let shiftEndTime = document.getElementById("cell2");

  let timeArray1 = shiftStartTime.innerText.split(":");
  let timeArray2 = shiftEndTime.innerText.split(":");

  let startMinutes = (parseInt(timeArray1[0], 10) * 60) + (parseInt(timeArray1[1], 10));
  let endMinutes = (parseInt(timeArray2[0], 10) * 60) + (parseInt(timeArray2[1], 10));

  let shiftLength = (endMinutes - startMinutes) / 60;

  shiftLength = shiftLength.toFixed(2);
  if (shiftLength < 0) {
    alert("Shift end time needs to be after shift start time");
  } else {
    alert(shiftLength);

    return shiftLength;
  }
}