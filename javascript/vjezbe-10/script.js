var storageKey = "IP_LAB4";
var data = [];
var remainingTime = 60;
var interval;

function init() {
	var user = prompt("Unesite ime");

	if (user) {
		document.getElementById("user").innerHTML = "Pozdrav " + user;
		loadData();
		drawTable();
	} else {
		location.href = "https://www.google.com";
	}
	
	interval = setInterval(() => {
		document.getElementById("time").innerHTML = --remainingTime;	
		/*Bootstrap*/
		var progress = document.getElementById("progress");
		if(progress) {
			progress.style = "width: " + 100*remainingTime/60 + "%"; 
		}
		
		if(remainingTime == 0) {
			clearInterval(interval);
			disableControls();
		}
	}, 1000); /*Ponavljanje nakon 1s -> https://www.w3schools.com/js/tryit.asp?filename=tryjs_function_bind2*/
	
}

function disableControls() {
	var inputs = document.getElementsByTagName("input");
	for(var i in inputs){
		inputs[i].disabled = true;
	}
	
	var buttons = document.getElementsByTagName("button");
	for(var i in buttons){
		buttons[i].disabled = true;
	}
	
}

function loadData() {
	if (typeof (Storage) !== "undefined") {
		var storage = localStorage.getItem(storageKey);

		if (storage) {
			data = JSON.parse(storage);
			if(data.length == 0) {
				document.getElementById("message").innerHTML = "Nema podataka";
			}
		} else {
			document.getElementById("message").innerHTML = "Podaci nikad nisu sačuvani";
		}
	}
}

function drawTable() {
	var table = document.getElementById("table-content");
	table.innerHTML = "";
	
	for(var i in data) {
	    var row = table.insertRow(0);
	    var cell1 = row.insertCell(0);
	    var cell2 = row.insertCell(1);
	    var cell3 = row.insertCell(2);
	    cell1.innerHTML = data[i].firstName;
	    cell2.innerHTML = data[i].lastName;
	    cell3.innerHTML = data[i].grade;
	}
}

function saveData() {
	if (typeof (Storage) !== "undefined") {
		localStorage.setItem(storageKey, JSON.stringify(data));
		alert("Uspješno sačuvano!")
	}
}

function addItem() {
	var form = document.forms[0];
	if (form) {
		var elements = form.elements;

		var object = {
			firstName : elements.firstName.value,
			lastName : elements.lastName.value,
			grade : elements.grade.value
		}

		data.push(object);
		drawTable();
		alert("Uspješno dodano!")
		form.reset();
	}
}

function sort(){
	data.sort(function(a,b){
		return a.grade-b.grade;
	});
	drawTable();
}

function filter(){
	data = data.filter(function(obj){
		return obj.grade > 5;
	});
	drawTable();
}