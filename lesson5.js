function makeCalendar(year, month) {
	let table = '<h1>Календарь на '+month+' '+year+'</h1><table><thead><tr>';
	let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
	let selectedMonth = month-1;
	let currentDate = new Date(year, selectedMonth);
	
	for(let i = 0; i < days.length; i++){
		table+= '<th>' + days[i] + '</th>';
	}
	
	table+= '</tr></thead><tbody><tr>';	
	
	if(currentDate.getDay() != 0){
		for (let i = 0; i < currentDate.getDay()-1; i++) {
			table += '<td></td>';
		}
	} else {
		for (let i = 0; i < 7; i++) {
			table += '<td></td>';
		}
	}
	
	while (currentDate.getMonth() == selectedMonth) {
		table += '<td>' + currentDate.getDate() + '</td>';

		if (currentDate.getDay() == 0) {
			table += '</tr><tr>';
		}
		
		currentDate.setDate(currentDate.getDate() + 1);
	}
	
	if (currentDate.getDay() != 1) {
		for (let i = currentDate.getDay()-1; i < 7; i++) {
			table += '<td></td>';
		}
	}
      
	table += '</tr></tbody></table>';
	
	document.getElementById('calendar__wrapper').innerHTML = table;
	
	/* Обработчики событий для ячеек таблицы*/
	
	let tdElements = document.querySelectorAll('#calendar__wrapper td')
	for (let i = 0; i < tdElements.length; i++) {
		tdElements[i].addEventListener('click', function (e){
			if(e.target.innerHTML !==''){
				if(e.target.classList.contains("active")){
					e.target.classList.remove("active");
				} else {
					e.target.classList.add("active");
				}
			}
		});
	}
}

makeCalendar(2018, 10);