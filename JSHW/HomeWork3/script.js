{//1
let mas =[1,1,2,3,4,5,6,7,8,9,18,16,15,14,43,11,12,12,33,24,36,];
let sum=0;
console.log('before: ' +mas);
for(let val of mas){
	if(val%2!==0){
		sum+=val;
	}
}
for(let key in mas){
	if(mas[key]%3===0){
		mas[key]=sum;
	}
}
console.log('after: ' +mas);
}
//2
{
	let mas =[1,1,2,3,4,5,6,7,8,9,18,16,15,14,11,14,12];
	let i_max=0; let i_min=0;
	let max=-99; let min=99;
	for(let key in mas){
		if(mas[key]>max){
			i_max=key;
			max=mas[key];
		}
		if(mas[key]<min){
			i_min=key;
			min=mas[key];
		}
	}
	console.log('elements betwen max & min '+(Math.abs(i_max-i_min)-1));
}
{
	let mas =[1,0,2,-3,-4,5,6,7,0,8,9,18,16,15,-14,-11,14,-12];
	let countNeg=0, countNull=0;let pow=1;
	for(let val of mas){

		if(val==0){ countNull++;}
		if(val<0){ countNeg++;}
		if(val>0){ pow*=val;}

	}
	console.log('3rd:')
	console.log(countNull);
	console.log(countNeg);
	console.log(pow);

}
//4
{
	let mas =[1.9767,1.01,2.34556,-3.35655,-4, 5.01,6.43,7.567,0,8,9,16,15.6798,-14.0876,-11.08,14,-12];
	let max=-99; let min=99;
	for(let key in mas){
		if(mas[key]>max){
			
			max=mas[key];
		}
		if(mas[key]<min){
			min=mas[key];
		}
	}
	console.log(`ex4:\ninterval is: [${min} to ${max}]`);
}
//5
{
	let mas =[1,1,2,3,4,5,6,7,8,9,18,16,15,14,11,14,12];
	let bs=false;
	let sum=0;
	for(let val of mas){
		if(val<0){
			bs= true; break;
		}
		sum+=val;
	}
	if(!bs){
		console.log('//5:\nNegative elements is absent');
	}else{
	console.log(`//5:\n sum is ${sum}`);
	}
}