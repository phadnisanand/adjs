// filter 
/*
const arr = [10,20,30, 50, 90];
console.log(arr);
const newArr = arr.filter(filterCustom);
console.log(newArr);

function filterCustom(arr) {
	return arr > 30;
}*/


// forEach loop
/*
let sum = 0;
let text = '';
const arr = [10, 20, 30];
arr.forEach(sumfunc);

function sumfunc(item, index) {
	text +='key ' + index + '  ' + '  value ' + item + '<br />';
	sum += item;
}
document.getElementById('message').innerHTML = text;
//document.getElementById("message").innerText = "I have changed!";
console.log(text);*/


// map method
/*
const arr = [10, 20, 30];
const newarr= arr.map(mapfunc);
function mapfunc(item) {
	return item * 3;
}
document.getElementById('message').innerHTML = newarr;*/

// reduce method
/*
let sum = 0;
const arr = [10, 20, 30, 50, 90];
const newArr = arr.reduce(reduceCustom, 0);
console.log(newArr);

function reduceCustom(key , value) {
	return sum += value;
}
document.getElementById('message').innerHTML = sum;
*/

//const arr = [10, 20, 30, 50, 90];
//console.log(arr.length);
// for--of loop , for--in loop, promises, await aync , fetch , arrow funtion
// const, let, or var.
//https://www.w3schools.com/js/js_async.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_json_parse convert json to javascript object using json.parse()


// for of loop javascript objects array any data strucutre.
/*
const arr = [10, 20, 30, 50, 90];
//console.log(arr.length);
for(item in arr) {
	console.log(arr[item]);
}*/

// for in loop javascript only for array.
/*const arr = [10, 20, 30, 50, 90];
//console.log(obj.name);
for (item of arr) {
 console.log(item);
}*/
/*
document.querySelector('#message').innerHTML = '<p>coming</p>';
document.querySelector('#message').innerText = '<p>coming</p>';*/
