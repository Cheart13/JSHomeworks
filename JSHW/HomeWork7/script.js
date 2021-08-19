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
coffeMachine.start.bind(teaPlease);
coffeMachine.start();
}
//task1
{
console.warn("task1:");
let b=false;
let n=0;
do{
	b=false;
	n= prompt("Enter number");
	if(isNaN(n)){
	alert(n+" is not a number!");
	b=true;
	}
}while(b);

for(let i=1;i<=n;i++){
	let input= document.createElement("input");
	input.classList.add('input-item');
	input.value=`Input${i}`;
	if(i===n){
		input.classList.add('margin-zero');
	}
	document.querySelector('#reg-button').before(input);
}
let button=document.querySelector('#reg-button');
button.addEventListener('click', func);

function func(){
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
let s=0;
let m=0;
let h=0;
let time;
let clicker=false;
let butonStart=document.getElementById('StartButton');
butonStart.addEventListener('click', timer);//if нажать несколько раз таймер считает сразу несколько секунд
let butonStop=document.getElementById('StopButton');
butonStop.addEventListener('click', stop);
function timer(){
	
	time=setTimeout('timer()',1000);
	
	s++;
	if(s==60){
		s=0;
		m++;
	}
	if(m==60){
		m=0;
		h++;
	}
	document.getElementById('timer').innerHTML= `Timer: ${h}:${m}:${s}`;
	
	
}
function stop(){
	s=0;
	m=0;
	h=0;
	
	clearInterval(time);
	document.getElementById('timer').innerHTML=`Timer: ${h}:${m}:${s}`;
}

}