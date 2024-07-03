// Number of weeks is set from dropdown list. This triggers the functions each time the value of dropdown is changed
let rosterLength = document.getElementById("weeks");
rosterLength.addEventListener("change", addRows, populateShiftLengthTable);

// Call function when button is clicked
let calcShift = document.getElementById("calculate-shift");
calcShift.addEventListener("click", calcShiftLength);

// Call functions
addRows();
calcShiftLength();


/**
 * Add rows to exsisting table depnding on user selection. An input type of Date 
 * created for each cell. Default values will show and a dynamically created id 
 * will be created. It will then call the populateShiftLengthTable() method
 */
function addRows() {

  // Set default value
  document.getElementById("average-weekly-hours").value = 0;

  // Create variales to check length of roster
  let noOfWeeks = document.getElementById("weeks").value;
  let inputTable = document.getElementById("input-table");


  // Ensure a number less than 1 is not entered in dropdown
  if (noOfWeeks < 1) {
    alert("Rotation needs to be a minimum of 1 week")
    document.getElementById("weeks").value = 1;
    addRows();

  } else {

    //Add or delete rows to existing table
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

      // Add input ype time to each cell as rows are created. ID created to ensure its unique
      cellNumber++;
      c1.innerHTML = `<td><input type='time' value='00:00' id='input${cellNumber}'></td>`;
      cellNumber++;
      c2.innerHTML = `<td><input type='time' value='00:00' id='input${cellNumber}'></td>`;
      cellNumber++;
      c3.innerHTML = `<td><input type='time' value='09:00' id='input${cellNumber}'></td>`;
      cellNumber++;
      c4.innerHTML = `<td><input type='time' value='18:00' id='input${cellNumber}'></td>`;
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

    // Call Funcion
    populateShiftLengthTable();

  }
}


/**
 * Add rows and readonly cells for display table
 */
function populateShiftLengthTable() {

  // Add ID to dynamicaally created cells
  // https://stackoverflow.com/questions/23003341/add-id-dynamically-to-each-table-cells

  // Create variales to check length of roster
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
  }

}

/**
 * Calculates the shift length for each day. Depend on egenth of shift, 
 * unpaid lunch time will be removed for that shift length. Dails shift 
 * length is summed up to weekly hours. Average weekly hours is then 
 * calcaulated depending on the number of weeks in rotation. Ths figure is displayed to the user,
 * 
 */
function calcShiftLength() {

  let inputTable = document.getElementById("input-table");

  // Get the number of shift cells in the table
  let shiftsInTable = ((inputTable.rows.length) - 2) * 14;
  let displayTableCells = 1;
  let averageWeeklyHours = 0;

  for (let cellNumber = 1; cellNumber < shiftsInTable;) {

    // Set variables for to Start and End times for each day. 
    let shiftStartTime = document.getElementById(`input${cellNumber}`);
    cellNumber++;
    let shiftEndTime = document.getElementById(`input${cellNumber}`);
    cellNumber++;
    // Split the data using ":"
    let timeArray1 = shiftStartTime.value.split(":");
    let timeArray2 = shiftEndTime.value.split(":");
    let startMinutes = (parseInt(timeArray1[0], 10) * 60) + (parseInt(timeArray1[1], 10));
    let endMinutes = (parseInt(timeArray2[0], 10) * 60) + (parseInt(timeArray2[1], 10));

    // If break updaid is selected by user, remove this from shift time (to arrive at paid hours)
    let breakUnpaid = document.getElementById("unpaid");
    let breakLength = 0;

    let shiftLength = (endMinutes - startMinutes);

    // Different shift lengths have different built in break times. Usually set against employment law or company policy and should be an editable numer in normal cases
    if (breakUnpaid.checked == true) {

      if (shiftLength >= 480) {
        breakLength = 60;
      } else if (shiftLength >= 240) {
        breakLength = 30;
      } else {
        breakLength = 0;
      }

      shiftLength = ((endMinutes - startMinutes) - breakLength) / 60;
    } else {

      shiftLength = shiftLength / 60;
    }

    // Reduce to 2 decimal points
    shiftLength = shiftLength.toFixed(2);

    //Display daily shift length values
    document.getElementById(`display${displayTableCells}`).value = shiftLength;
    displayTableCells++;

    averageWeeklyHours = averageWeeklyHours + parseFloat(shiftLength);

    let twoDecimimal = averageWeeklyHours / ((inputTable.rows.length) - 2);

    // Display average weekly hours
    document.getElementById("average-weekly-hours").value = twoDecimimal.toFixed(2);

  }

}