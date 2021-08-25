{
	let mas=[];
	let i=0;
	
	let gen1=generate(100);
        for(let i=0;i<100;i++){
			mas[i]=gen1();
		}
        
    
	console.log(mas);

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
}