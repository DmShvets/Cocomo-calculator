let arr = [];
let index =  0;

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
		console.log(arr);
		EAF = countEAF();
		PM = EAF * a * Math.pow(Size, b);
		TM = c * Math.pow(PM, d);
		ND = PM / TM;
		document.getElementById("PM").innerHTML = 'Tрудоємність(людей*місяць): ' + Math.round(PM*100)/100;
		document.getElementById("TM").innerHTML = 'Час розробки(місяців): ' + Math.round(TM*100)/100;
		document.getElementById("ND").innerHTML = 'Розробників(людей):  ' + Math.round(ND*100)/100+'';
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
		temp *= check('t' + i, i);
		arr[i] = index;
	}
	return temp;
}

function check(n, m) {
	let temp = document.getElementsByName(n);
	for (var i = 0; i < temp.length; i++) {
		if(temp[i].checked){
			
			switch(m){
				case 2: 
					index=i+1;
					return temp[i].value;
				case 4:
					index=i+2;
					return temp[i].value;
				case 5:
					index=i+2;
					return temp[i].value;
				case 6:
					index=i+1;
					return temp[i].value;
				case 7:
					index=i+1;
					return temp[i].value;
			}
			
			index = i;
			return temp[i].value;

		}
	}

}

function get_elem(n) {
	console.log(arr[n]);
	switch(arr[n]){
		case 0:
			return 'Дуже низький';
		case 1:
			return 'Низький';
		case 2:
			return 'Середній';
		case 3:
			return 'Високий';
		case 4:
			return 'Дуже високий';
		case 5:
			return 'Критичний';
	}
	
}

function writing(text, num) {
	Str += "<tr><td>" + text + "</td><td> " + num + "</td></tr>";
}

function str(){
	Str = "";

	writing("1. Вимоги до надійності ПЗ:", get_elem(1));
	writing("2. Розмір БД проекта:", get_elem(2));
	writing("3. Складність продукта:", get_elem(3));

	Str += '<tr><td colspan="7">Характеристики апаратного забезпечення</td></tr>';

	writing("4. Обмеження швидкодії виконання:", get_elem(4));
	writing("5. Обмеження пам'яті:",	 get_elem(5));
	writing("6. Нестабільність середовища віртуальної машини:", get_elem(6));
	writing("7. Потребуємий час на відновлення:", get_elem(7));

	Str += '<tr><td colspan="7">Характеристики персонала</td></tr>'

	writing("8. Аналітичні здібності:", get_elem(8));
	writing("9. Досвід розробки:", get_elem(9));
	writing("10. Здібності до розробки ПЗ:", get_elem(10));
	writing("11. Досвід використання віртуальних машин:", get_elem(11));
	writing("12. Складність продукта:", get_elem(12));

	Str += '<tr><td colspan="7">Характеристики проекта</td></tr>';

	writing("13. Застосування методів розробки ПЗ:", get_elem(13));
	writing("14. Використання інструментарію розробки ПЗ:", get_elem(14));
	writing("15. Вимоги дотримання термінів розробки:", get_elem(15));
	
	console.log(Str);

	return Str;
}

function report() {
		document.write('<html><head><link rel="stylesheet" href="STYLE.css"/></head><body><div class="content">'+
		'<h1>COCOMO II</h1><div class="left"><h3>Тип проекту: </h3><br><h3>');
	switch(type){
		case 1:
			document.write('Розповсюджений');
			break;
		case 2:
			document.write('Напів-незалежний');
			break;
		case 3:
			document.write('Вбудований');
			break;
	}
	document.write('</h3></div><br><div class="right"><h3>Результат</h3><br><h3>Кількість рядків коду: ' + Size * 1000 + '</h3><br>');
	document.write('<h3>Tрудоємність(людей*місяць): ' + Math.round(PM*100)/100 + '</h3><br>');
	document.write('<h3>Час розробки(місяців): ' + Math.round(TM*100)/100 + '</h3><br>');
	document.write('<h3>Розробників(людей):  ' + Math.round(ND*100)/100 + '</h3><br></div><div class="list">');
	document.write(
		'<br><div class="down"><table class="order"><thead><tr><th rowspan="2">Атрибути вартості, CD<sub>k</sub></th><th colspan="6">Рейтинг</th>'+
		"</tr></thead><tbody>"+"<tr><th colspan='7'>Характеристики продукта</th></tr>"+
		"</tr>"+ str() + '</td></tr></table></div></div></div></body></html>'
	);
}
