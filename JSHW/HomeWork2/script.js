//1st
{
let mas = [1, 2, 4, 5, 7, 6, 9];
let counter=0;
for(let i=0;i<mas.length;i++){
	if(mas[i]%2===0){
		counter++;
	}
}
console.log(`number of odd numbers is ${counter}`);
}
//2nd
{
let mas = [111, 2, 4, 5, 7, 6, 23, 45, 23, 22, 14, 12, 13, 67];
let i_max=0;
let i_min=0;

for(let i=0;i<mas.length;i++){
	
		if(mas[i]>mas[i_max]){
			i_max=i;
		}
		if(mas[i]<mas[i_min]){
			i_min=i;
		}
	
}
console.log(`index max:${i_max} index min:${i_min}`);
console.log(`max:${mas[i_max]}  min:${mas[i_min]}`);

}

//3rd
let masive = [11, 2, -4, 5, 7, 6, 23, 45, 0, 0, -23, 22, 14, -12, -13, 67, 43, 17, 21, -34, -5, 4, 8, 9 ];

function avr(mas){
let sum=null;
for(let i=0;i<mas.length;i++){
	sum += mas[i];
		
	
}
 return sum/mas.length;
}

//4rd
function num_o_negativ(mas){
let counter=0;
	for(let i=0;i<mas.length;i++){
		if(mas[i]<0){
			counter++;
		}
			
		
	}
	return counter;
}
console.log(`average is ${avr(masive)}`);
console.log(`number of negative numbers is ${num_o_negativ(masive)}`);
