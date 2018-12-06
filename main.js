var name= prompt("Введите имя");
var age= +prompt("Назовите возраст");
var value;
console.log(` ${name} доступ к сайту разрешен`);
if ( age >= 18 ){
 alert("вы подписаны на рассылку");
} else if (  age <= 18){ 
 alert("вы не подписаны на рассылку");
} else{
	alert("вы не подписаны на рассылку");
}
