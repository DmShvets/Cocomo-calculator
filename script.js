//let a, b, c, d, PM, TM, ND, Size;

function setup() {
	if (document.getElementById("radio1").checked) {
		Organic();
	}
	if (document.getElementById("radio2").checked) {
		SemiDetached();
	}
	if (document.getElementById("radio3").checked) {
		Embedded();
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