// 1
let objectVar = {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', };
let {name='Аноном', surname='Анонимович', age='? лет'} = objectVar;

//2
function countLetterO(str){
	let counter = 0;
	for (let chr of str.toLowerCase()) {
		if(chr === 'о'){
			counter++;
		}
	}
	return counter; 
}

//3
function editCSS({elementId, color='blue', border='1px solid red', font='15px Arial'}){
	let elementDOM = document.getElementById(elementId);
	elementDOM.style.color = color;
	elementDOM.style.border = border;
	elementDOM.style.font = font;
}

//4
function addToSet(arr, opt="all"){
	set = new Set();
	console.log(opt);
	for(let value of arr){
		switch (opt){
			case 'odd':
				if (value % 2 != 0) set.add(value);
				break;
			case 'even':
				if (value % 2 == 0) set.add(value);
				break;
			case 'all':
				set.add(value);
				break;
		}
	}
	return set;
}

addToSet([1,2,3,4,5,6,7,8,9,10], 'odd');

