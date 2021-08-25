//1
{console.log('//1');
	let mas= ['a','b','v','c','.',',','?',':',';','4','er','2','ty','t','y67','45','y','3','#','@','u','i','o','q','p'];
	console.log(mas);
	
	for(let i =0;i<mas.length;i++){
		
		if(String(+mas[i]) !== 'NaN'){// оказывается NaN не равно самой себе 0_0
			mas[i]='*';
		}
	}
	console.log(mas);
	 
}
//2
{console.log('//2');
	let mas= ['a','b','v','c','.',',','?',':',';','4','er','2','ty','t','y67','45','y','3','#','@','u','i','o','q','p'];
	console.log(mas);
	
	for(let i =0;i<mas.length;i++){
		
		if(String(+mas[i]) == 'NaN'){
			mas[i]=mas[i].toUpperCase();
		}
	}
	console.log(mas);

}
//3
{console.log('//3');
	let mas= ['a','B','v','C','.',',','?',':',';','4','ER','2','ty','t','y67','45','Y','3','#','@','U','I','o','q','p'];
	console.log(mas);
	
	for(let i =0;i<mas.length;i++){
		
		if(mas[i]==mas[i].toUpperCase()){
			mas[i]=mas[i].toLowerCase();
		}else{
			mas[i]=mas[i].toUpperCase();
		}
	}
	console.log(mas);
}
//4
{console.log('//4');

let mas='qwertaocyy yЫЁfd ыё';//'аернqwerttггпаыуку23ugd768,./>?!@#укеі';
let re=/[аоуеыяюэёи]/i;
let counter=0;
for(let i =0;i<mas.length;i++){
		
	if(re.test(mas[i])){
		counter++;
	}
}
console.log(counter);

}
//5
{console.log('//5');
	let text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, bitis, aperiam beatae obcaecati ut quam libero magni maxime dolorem ab voluptates, ratione dolore? Consequatur tempore voluptatibus pariatur esse laboriosam benim!';//3
	let re=/^b/i;
	let counter=0;
	let mas=text.split(' ');
	for(let i =0;i<mas.length;i++){
		
		if(re.test(mas[i])){
			counter++;
		}
	}
	console.log(counter);

}
{console.log('//6')

	let mas='erhyb;;::ghgg^* * F; :rt:vv//' //['a','B','v','C','.',',','?',':',';','4','ER','2','ty','t','y67','45','Y','3','#','@','U','I','o','q','p'];
	let reDotcom=/[;]/i, dotcom_count=0;
	let reStar=/[*]/i, star_count=0;
	let reDubdot=/[:]/i,dot_count=0;

	for(let val of mas){
		//console.log(val);
		if(reDotcom.test(val)){
			dotcom_count++;
		}
		if(reStar.test(val)){
			star_count++;
		}
		if(reDubdot.test(val)){
			dot_count++;
		}	
	}
	console.log(`;:${dotcom_count},  *:${star_count},  ::${dot_count}`);

}
console.log('else  \n\n'); 

function makecounter(){
	let counter=0;

	function increment(){
		if(counter<5){
		counter++;
		}
	}

	function decrement(){
		if(counter===1){

		} else{
		counter--;
		}
	}
	
}

let counter1= makecounter();

counter1().increment();
counter1.increment();
counter1.increment();
console.log(counter1);
counter1.increment();
counter1.increment();
counter1.increment();
console.log(counter1);