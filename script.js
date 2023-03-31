onload:calc();
function calc() {
	var allHours = document.querySelectorAll(".hours");
	var allScores = document.querySelectorAll(".score");
	var gpaText = document.querySelector("#GPA");

	var gpa = 0;
	var hours = 0;

	for(i = 0; i< allHours.length; i++){
	gpa += allHours[i].value * allScores[i].value;
	hours += parseInt(allHours[i].value, 10);
	}

	gpaText.innerText = "加权平均分：" + (gpa/hours).toFixed(2);
}

function addLine() {
	var newTr = document.createElement("tr");
	newTr.innerHTML += '<td><input type="text" value="class"/></td><td><input class="hours" type="number" value="60"/></td><td><input class="score" type="number" value="85"/></td>    <td><input type="button" value="+" onclick="addLine()"/> <input type="button" value="-" onclick="delLine(this)"/></td>';
	document.querySelector("table").appendChild(newTr);
	// document.querySelector("table").innerHTML += '<tr><td><input type="text" value="class"/></td><td><input class="hours" type="number" value="60"/></td><td><input class="score" type="number" value="85"/></td>    <td><input type="button" value="+" onclick="addLine()"/> <input type="button" value="-" onclick="delLine(this)"/></td></tr>';
	// document.querySelector("table").append('<tr><td><input type="text" value="class"/></td><td><input class="hours" type="number" value="60"/></td><td><input class="score" type="number" value="85"/></td><td><input type="button" value="+" onclick="addLine()"/> <input type="button" value="-" onclick="delLine(this)"/></td></tr>');
	calc();
}

function delLine(obj) {
	if(document.querySelectorAll(".hours").length > 1){
	obj.parentElement.parentElement.remove();
	calc();
	}
}