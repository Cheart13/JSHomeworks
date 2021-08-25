{
	let mas=[];
	let i=0;
	
	let gen1=generate(100);
        for(let i=0;i<100;i++){
			mas[i]=gen1();
		}
        
    
	//console.log(mas);

	function generate(max){
		let generated=[];
		return function() {
			let numu=0;
			let sw1=true;

			while(sw1){
			numu=gen(max);
			let sw=true;

			for(let val of generated){
				if(numu===val){
					sw=false;break;
				}
			}
			if(sw){
				generated.push(numu);
				return numu;
			}
			
			}
		}
	
	}
	function gen(max){
		return Math.round(Math.random() * max);
	}

	function appendButtonGroup(){
		
		let group = document.createElement('div');
		group.classList.add('button-group');
		document.querySelector(".container").appendChild(group);

		for(let i=0;i<9;i++){
		let button = document.createElement('button');
		button.innerHTML=i;
		document.querySelector(".button-group")
		.appendChild(button);
			button.addEventListener('click', function(){random_change});
		}
	}

	function random_change(){
		let buttons = document.querySelector(".button-group").querySelectorAll('button');
		let generator=generate(9);
		for(let val of buttons){
			val.innerHTML=generator();
			
		}
	}

	function F(){
		let i=0;
		return function add(){
			return ++i;
		}
	}
	appendButtonGroup();

	let c= F();
	console.log(c());
	console.log(c());
	console.log(c());

	class Transport{
		constructor(){
			
		}
	}
	
	
}