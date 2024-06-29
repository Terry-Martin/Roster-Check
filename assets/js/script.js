addRows();
//populateShiftLengthTable();

let rosterLength = document.getElementById("calculate-roster");
rosterLength.addEventListener("click", addRows, populateShiftLengthTable);

let calcShift = document.getElementById("calculate-shift");
calcShift.addEventListener("click", calcShiftLength);

function addRows() {
  let noOfWeeks = document.getElementById("weeks").value;
  let inputTable = document.getElementById("input-table");

  if (noOfWeeks < 1) {
    alert("Rotation needs to be a minimum of 1 week")
    document.getElementById("weeks").value = 1;
    addRows();

  } else {

    for (let i = 2; i < inputTable.rows.length;) {
      inputTable.deleteRow(i);
    }

    let cellNumber = 0;

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

      cellNumber++;
      c1.innerHTML = `<td><input type='time' value='00:00' id='input${cellNumber}'></td>`;
      cellNumber++;
      c2.innerHTML = `<td><input type='time' value='01:00' id='input${cellNumber}'></td>`;
      cellNumber++;
      c3.innerHTML = `<td><input type='time' value='09:00' id='input${cellNumber}'></td>`;
      cellNumber++;
      c4.innerHTML = `<td><input type='time' value='11:00' id='input${cellNumber}'></td>`;
      cellNumber++;
      c5.innerHTML = `<td><input type='time' value='09:00' id='input${cellNumber}'></td>`;
      cellNumber++;
      c6.innerHTML = `<td><input type='time' value='18:00' id='input${cellNumber}'></td>`;
      cellNumber++;
      c7.innerHTML = `<td><input type='time' value='09:00' id='input${cellNumber}'></td>`;
      cellNumber++;
      c8.innerHTML = `<td><input type='time' value='18:00' id='input${cellNumber}'></td>`;
      cellNumber++;
      c9.innerHTML = `<td><input type='time' value='09:00' id='input${cellNumber}'></td>`;
      cellNumber++;
      c10.innerHTML = `<td><input type='time' value='18:00' id='input${cellNumber}'></td>`;
      cellNumber++;
      c11.innerHTML = `<td><input type='time' value='09:00' id='input${cellNumber}'></td>`;
      cellNumber++;
      c12.innerHTML = `<td><input type='time' value='18:00' id='input${cellNumber}'></td>`;
      cellNumber++;
      c13.innerHTML = `<td><input type='time' value='00:00' id='input${cellNumber}'></td>`;
      cellNumber++;
      c14.innerHTML = `<td><input type='time' value='00:00' id='input${cellNumber}'></td>`;
    }
    populateShiftLengthTable();
  }
}

function populateShiftLengthTable() {

  // Add ID to dynamicaally created cells
  // https://stackoverflow.com/questions/23003341/add-id-dynamically-to-each-table-cells


  let noOfWeeks = document.getElementById("weeks").value;
  let displayTable = document.getElementById("display-shift-length-table");

  for (let i = 1; i < displayTable.rows.length;) {
    displayTable.deleteRow(i);
  }

  let cellNumber = 0;
  // Allow for calculation of each weeks total worked hours
  let weeklyTotal = 0;

  for (let i = 0; i < noOfWeeks; i++) {

    let row = displayTable.insertRow(-1);

    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    let c6 = row.insertCell(5);
    let c7 = row.insertCell(6);
    let c8 = row.insertCell(7);

    cellNumber++;
    c1.innerHTML = `<td><input type='text' id='display${cellNumber}' readonly></td>`;
    cellNumber++;
    c2.innerHTML = `<td><input type='text' id='display${cellNumber}' readonly></td>`;
    cellNumber++;
    c3.innerHTML = `<td><input type='text' id='display${cellNumber}' readonly></td>`;
    cellNumber++;
    c4.innerHTML = `<td><input type='text' id='display${cellNumber}' readonly></td>`;
    cellNumber++;
    c5.innerHTML = `<td><input type='text' id='display${cellNumber}' readonly></td>`;
    cellNumber++;
    c6.innerHTML = `<td><input type='text' id='display${cellNumber}' readonly></td>`;
    cellNumber++;
    c7.innerHTML = `<td><input type='text' id='display${cellNumber}' readonly></td>`;
    weeklyTotal++;
    // weekly total
    c8.innerHTML = `<td><input type='text' id='display${weeklyTotal}' readonly></td>`;

  }
}

function calcShiftLength() {

  let inputTable = document.getElementById("input-table");

  // Get the number of shift cells in the table
  let shiftsInTable = ((inputTable.rows.length) - 2) * 14;
  let displayTableCells = 1;

  let calcWeeklyTotal = 0;
  let displayWeeklyTotal = 1;

  for (let cellNumber = 1; cellNumber < shiftsInTable;) {

    let shiftStartTime = document.getElementById(`input${cellNumber}`);
    cellNumber++;
    let shiftEndTime = document.getElementById(`input${cellNumber}`);
    cellNumber++;

    let timeArray1 = shiftStartTime.value.split(":");
    let timeArray2 = shiftEndTime.value.split(":");

    let startMinutes = (parseInt(timeArray1[0], 10) * 60) + (parseInt(timeArray1[1], 10));
    let endMinutes = (parseInt(timeArray2[0], 10) * 60) + (parseInt(timeArray2[1], 10));

    let shiftLength = (endMinutes - startMinutes) / 60;

    shiftLength = shiftLength.toFixed(2);

    document.getElementById(`display${displayTableCells}`).value = shiftLength;
    

    calcWeeklyTotal = parseInt(document.getElementById(`display${displayTableCells}`).value) + parseInt(shiftLength);
    alert(calcWeeklyTotal);

    displayTableCells++;
    //document.getElementById(`weeklyTotaldisplay${displayWeeklyTotal}`).value = 55;

  }
  displayWeeklyTotal++;
}