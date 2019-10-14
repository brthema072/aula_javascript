//aula5
function clicou(){
	document.getElementById('agradecimento').innerHTML = '<b>Obrigado por clicar</b>';
	//alert('Obrigado por clicar');
}

function redirecionar(){
	window.open("https://www.google.com/");
	//window.location.href = "https://www.google.com/";
}

function trocar(elemento){
	//document.getElementById('mouseMove').innerHTML = 'Obrigado por passar o mouse'; 
	elemento.innerHTML = 'Obrigado por passar o mouse'; 
}
function voltar(elemento){
	//document.getElementById('mouseMove').innerHTML = 'Passe o mouse aqui';
	elemento.innerHTML = 'Passe o mouse aqui';
}
function load(){
	alert('página carregada');
}
function funcaoChange(elemento){
	console.log(elemento.value);
}


/* aula4
function soma(n1,n2){
	return n1 + n2;
}

var validar = 0;
function validarIdade(idade){
	validar;
	if(idade>=18){
		validar=true;
	}else{
		validar=false;
	}
	return validar;
}

var idade = prompt("Qual sua idade?");
validarIdade(idade);
console.log(validar);*/

/* aula3
var d = new Date();
//alert(d.getMonth()+1);//precisa adicionar mais um, pois sempre começa do zero

alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());*/

/*
for(var count=1;count<=5;count++){
	alert(count);
}*/



/*var count=0;
while(count<=5){
	console.log(count);
	alert(count);
	count++;
}
*/

/*var idade = prompt("Qual a sua idade?");

if(idade>=18){
	alert("maior de idade");
}else{
	alert("menor de idade");
}
*/

/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);*/







//***aula 2
/*var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta);*/



//var lista = ["maça", "pera","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.reverse());
//console.log(lista[0]);
//console.log(lista.toString());
//console.log(lista.join(" - "));






//***aula1
//var nome = "Bruno Marthe";
//var n1 = 22;
//var n2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert("Nome: "+nome+" Idade: "+idade);
//alert(idade + idade2);

//console.log(nome);
//console.log(n1+n2);

//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
//alert(frase.toLowerCase());