let arr = [];
function setup() {
	if (document.getElementById("radio1").checked) {
		Organic();
		type=1;
	}
	if (document.getElementById("radio2").checked) {
		SemiDetached();
		type=2;
	}
	if (document.getElementById("radio3").checked) {
		Embedded();
		type=3;
	}
	
	Size = document.getElementById("text").value / 1000;
	
	if(Size)
	{
		EAF = countEAF();
		PM = EAF * a * Math.pow(Size, b);
		TM = c * Math.pow(PM, d);
		ND = PM / TM;
		document.getElementById("PM").innerHTML = 'Tрудоємність(людей*місяць): ' + Math.round(PM*100)/100;
		document.getElementById("TM").innerHTML = 'Час розробки(місяців): ' + Math.round(TM*100)/100;
		document.getElementById("ND").innerHTML = 'Розробників(людей):  ' + Math.round(ND*100)/100;
	}
	if(!Size)
	{
		document.getElementById("PM").innerHTML = 'Помилка'
		document.getElementById("TM").innerHTML = 'Введіть дані!';
		document.getElementById("ND").innerHTML = 'Кількість рядків не може дорівнювати 0';
	}
}

function Organic() {
	a=3.2;
	b=1.05;
	c=2.5;
	d=0.38;
}

function SemiDetached() {
	a=3;
	b=1.12;
	c=2.5;
	d=0.35;
}

function Embedded() {
	a=2.8;
	b=1.20;
	c=2.5;
	d=0.32;
}

function countEAF() {
	let temp = 1;
	for (var i = 1; i <= 15; i++) {
		temp *= check('t' + i);
		arr[i-1] = check('t' + i);
	}
	return temp;
}  

function check(n) {
	let temp = document.getElementsByName(n);
	for (var i = 0; i < temp.length; i++) {
		if(temp[i].checked){
			return temp[i].value;
		}
	}
}

function report() {
		document.write('<html><head><link rel="stylesheet" href="STYLE.css"/></head><body class="bd"><div class="left"><h2>Тип проекту: ');
	switch(type){
		case 1:
			document.write('Розповсюджений<br>');
			break;
		case 2:
			document.write('Напів-незалежний<br>');
			break;
		case 3:
			document.write('Вбудований<br>');
			break;
	}
	document.write('</h2></div><div class="left"><div class="list"><h3>Результат</h3></div><br><h3>Кількість рядків коду: ' + Size * 1000 + '</h3>');
	document.write('<h3>Tрудоємність(людей*місяць): ' + Math.round(PM*100)/100 + '</h3>');
	document.write('<h3>Час розробки(місяців): ' + Math.round(TM*100)/100 + '</h3>');
	document.write('<h3>Розробників(людей):  ' + Math.round(ND*100)/100 + '</h3>');
	document.write(
		"<h3><br> 1. Вимоги до надійності ПЗ: " + arr[0] + '</h3><br>'+
		"<h3> 2. Розмір БД проекта: " + arr[1] + '</h3><br>'+
		"<h3> 3. Складність продукта: " + arr[2] + '</h3><br>'+
		"<h3> 4. Обмеження швидкодії виконання: " + arr[3] + '</h3><br>'+
		"<h3> 5. Обмеження пам'яті: " + arr[4] + '</h3><br>'+
		"<h3> 6. Нестабільність середовища віртуальної машини: " + arr[5] + '</h3><br>'+
		"<h3> 7. Потребуємий час на відновлення: " + arr[6] + '</h3><br>'+
		"<h3> 8. Аналітичні здібності: " + arr[7] + '</h3><br>'+
		"<h3> 9. Досвід розробки: " + arr[8] + '</h3><br>'+
		"<h3> 10. Здібності до розробки ПЗ: " + arr[9] + '</h3><br>'+
		"<h3> 11. Досвід використання віртуальних машин: " + arr[10] + '</h3><br>'+
		"<h3> 12. Складність продукта: " + arr[11] + '</h3><br>'+
		"<h3> 13. Застосування методів розробки ПЗ: " + arr[12] + '</h3><br>'+
		"<h3> 14. Використання інструментарію розробки ПЗ: " + arr[13] + '</h3><br>'+
		"<h3> 15. Вимоги дотримання термінів розробки: " + arr[14] + '</h3><br></div></div></body></html>'
		);
}