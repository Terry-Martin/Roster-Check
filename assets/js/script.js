//parseInt(document.getElementById("shift-one").textContent);

let x = parseInt(document.getElementById("shift-one").value);
document.getElementById("calc-shift-one").value = 25 + x;

let noOfWeeks = document.getElementById("weeks").value;
alert(noOfWeeks);

let test3 = document.getElementById("week-number").innerHTML;

for (let i = 0; i < noOfWeeks; i++) {
  test3 += "<tr><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td></tr>" + i;
}

document.getElementById("week-number").innerHTML = test3;