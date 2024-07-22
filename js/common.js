// template literals

let sum = 100;
document.getElementById('message').innerHTML = `sum is ${sum}`;

let text = `<p> anand
phadnis <br />
age ${sum}
</p>`;
document.getElementById('message').innerHTML = text;



// Events js
function alertfunc() {
	alert('coming here');
}

document.getElementById('abc').addEventListener("click", myFunction);

function myFunction() {
	alert('coming event');
}


document.getElementById('abc2').addEventListener("click", myFunction2);

function myFunction2() {
	let textVal = document.getElementById('area').value;
	document.getElementById('message').innerHTML = textVal;
}
