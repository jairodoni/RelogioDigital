
function clock(){
  let hours, min, sec;
  let day = new Array('Domingo','Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado');
  let month = new Array('Janeiro','Fevereiro', 'Março', 'Abriu', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezenbro');
  let date = new Date();
  
  hours = date.getHours().toString().length < 2 ? "0" + date.getHours() : date.getHours();
  min = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();
  sec = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds();
  
  let time = hours + ":" + min + ":" +sec;

  let fullDate = day[date.getDay()] + ', ' + date.getDate() + ' de ' + month[ date.getMonth()] + ' de ' + date.getFullYear();

  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = fullDate;
 
}

setInterval( function(){
  clock()
}, 1000);
