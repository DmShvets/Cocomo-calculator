//let a,b,c,d,Size,PM,TM,ND,type; 
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

		PM = a * Math.pow(Size, b);
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
	a=2.4;
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
	a=3.6;
	b=1.20;
	c=2.5;
	d=0.32;
}

function report() {
	document.write('<html><head><link rel="stylesheet" href="STYLE.css"/></head><body class="bd"><div class="list"><h3>Тип проекту: </h3>');
	switch(type){
		case 1:
			document.write('<label><input name="1" type="radio" id="radio1" checked/><span>Розповсюджений</span></label><br></div>');
			break;
		case 2:
			document.write('<label><input name="1" type="radio" id="radio1" checked/><span>Напів-незалежний</span></label><br></div>');
			break;
		case 3:
			document.write('<label><input name="1" type="radio" id="radio1" checked/><span>Вбудований</span></label><br></div>');
			break;
	}
	document.write('<div class="left"><div class="list"><h3>Результат</h3></div><br><h3>Кількість рядків коду: ' + Size * 1000 + '</h3>');
	document.write('<h3>Tрудоємність(людей*місяць): ' + Math.round(PM*100)/100 + '</h3>');
	document.write('<h3>Час розробки(місяців): ' + Math.round(TM*100)/100 + '</h3>');
	document.write('<h3>Розробників(людей):  ' + Math.round(ND*100)/100 + '</h3></body></html>');
	//document.write('a = ' + a + '<br>');
	//document.write('b = ' + b + '<br>');
	//document.write('c = ' + c + '<br>');
	//document.write('d = ' + d + '<br>');
}