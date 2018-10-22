function calculate(first,operator,second){
	if(arguments.length === 3){
		first = +first;
		second = +second;
		if(!isNaN(first) && isFinite(first) && !isNaN(second) && isFinite(second)){
			switch (operator) {
				case "+":
					return first + second;
					break;
				case "-":
					return first - second;
					break;
				case "*":
					return first * second;
					break;
				case "/":
					return first / second;
					break;
				default:
					throw "Unknown operator";
			}
		}
		throw "Not a number";
	} else if(arguments.length < 3){
		throw "Not all arguments";
	} else{
		throw "Unknown argument";
	}
}

function countString(arr,searchString){
	let counter = 0;
	for (let i = 0; i < arr.length; i++) {
		if(arr[i].toLowerCase().indexOf(searchString.toLowerCase()) !== -1){
			counter++;
		}
	}
	return counter;
}

function formatNumber(num){
	num = num+"";
	let fraction = "";
	let counter = 3;
	let delimiterNumber = [];

	if (num.indexOf("-") !== -1){
		counter = 4;
	}

	if (num.indexOf(".") !== -1){
		let numArray = num.split('.');
		num = numArray[0];
		fraction = Math.round(("0."+numArray[1]) * 100) % 100;
	}

	while (num.length > counter){
		delimiterNumber.unshift(num.slice(-3));
		num = num.substr(0,num.length-3);
	}

	delimiterNumber.unshift(num);
	num = delimiterNumber.join(' ');

	if (fraction){
		num = num+","+fraction;
	}

	return num;
}
