// task 3
{ console.warn("task3:");
let coffeMachine={
	message:"Your coffe is ready!",

	start: function(){
		setTimeout(()=> console.log(this.message), 3000);
	}
}
let teaPlease={
	message:"Wanna some tea instead of coffee?",

	start: function(){
		setTimeout(()=> console.log(this.message), 3000);
	}
}

coffeMachine.start();
let start =coffeMachine.start.bind(teaPlease);
start();
}
//task1
{
//console.warn("task1:");
let number=0;

number = prompt("Enter number");

while(isNaN(number)||number==undefined) {
  number = prompt("Enter the number");
}
for(let i=1;i<=number;i++){
	let input= document.createElement("input");
	input.classList.add('input-item');
	input.value=`Input${i}`;
	if(i===number){
		input.classList.add('margin-zero');
	}
	document.querySelector('#reg-button').before(input);
}
let button=document.querySelector('#reg-button');
button.addEventListener('click', change);

function change(){
	let items=Array.from(document.querySelectorAll('.input-item'));

	for(let index in items){
		
		if((+index+1)%2!==0){
			items[index].classList.add("background");
		}
		if((+index+1)%3==0){
			items[index].value='';
			items[index].setAttribute("placeholder","placeholder");
		}
	}


}

}
//task2
{
let seconds=0;
let minute=0;
let hour=0;
let time;
let clicker=true;
let butonStart=document.getElementById('StartButton');
butonStart.addEventListener('click', start);//if нажать несколько раз таймер считает сразу несколько секунд
let butonStop=document.getElementById('StopButton');
butonStop.addEventListener('click', stop);
function start(){
	if(clicker){
		timer();	
	}
	clicker=false;
}
function timer(){
	
	time=setInterval(second, 1000);
	
	function second(){
	let date=new Date();
	let times={
		seconds:date.getSeconds(),
		minutes:date.getMinutes(),
		hours:date.getHours(),

	}
	document.getElementById('timer').innerHTML= ` ${times.hours}:${times.minutes}:${times.seconds}`;
	
}
}
function stop(){
	
	clearInterval(time);
	clicker=true;
	//document.getElementById('timer').innerHTML= date;
}

}