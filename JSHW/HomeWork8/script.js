//1-------------
function decl_square(size_a, size_b){
	return a*b;
}
let exp_square=function(size_a, size_b){
	return a*b;
}
let arr_square=(size_a, size_b)=>{return a*b}
//2------------
function decl_pifagor(catet_a, catet_b){
	return Math.sqrt(catet_a**2+ catet_b**2)
}
let exp_pifagor=function(catet_a, catet_b){
	return Math.sqrt(catet_a**2+ catet_b**2)
}
let arr_pifagorare=(catet_a, catet_b)=>{return Math.sqrt(catet_a**2+ catet_b**2)}

//3------------
function decl_discrim(a, b , c){
	return '+-' + (b**2 - 4*a*c);
}
let exp_discrim=function(){
	return '+-' + (b**2 - 4*a*c);
}
let arr_discrim=(size_a, size_b)=>{return '+-' + (b**2 - 4*a*c)}

//4------------
console.log(decl_create_arr_odd_numbers());
function decl_create_arr_odd_numbers(){
	let arr=[];
	let val=1;
	for(let i=0;val<100;i++){
		if(val%2==0){
			arr[i]=val;
		}else{
			arr[i]=++val;
		}
		val++;
	}
	return arr;

}

let exp_create_arr_odd_numbers=function(){
	let arr=[];
	let val=1;
	for(let i=0;val<100;i++){
		if(val%2==0){
			arr[i]=val;
		}else{
			arr[i]=++val;
		}
		val++;
	}
	return arr;
}

let arrow_create_arr_odd_numbers=()=>{
	let arr=[];
	let val=1;
	for(let i=0;val<100;i++){
		if(val%2==0){
			arr[i]=val;
		}else{
			arr[i]=++val;
		}
		val++;
	}
	return arr;
}
//5------------
console.log(decl_create_arr_even_numbers());
function decl_create_arr_even_numbers(){
	let arr=[];
	let val=1;
	for(let i=0;val<100;i++){
		if(val%2==1){
			arr[i]=val;
		}else{
			arr[i]=++val;
		}
		val++;
	}
	return arr;

}

let exp_create_arr_even_numbers=function(){
	let arr=[];
	let val=1;
	for(let i=0;val<100;i++){
		if(val%2==1){
			arr[i]=val;
		}else{
			arr[i]=++val;
		}
		val++;
	}
	return arr;
}

let arrow_create_arr_even_numbers=()=>{
	let arr=[];
	let val=1;
	for(let i=0;val<100;i++){
		if(val%2==1){
			arr[i]=val;
		}else{
			arr[i]=++val;
		}
		val++;
	}
	return arr;
}

//6

function findmax(arr){
	let max=arr[0];
	for(let val of arr){
		if(val>max){
			max=val;
		}
	}
	return max;
}
function find_in(arr, num){
	
	for(let index=0;index<arr.length;index++){
		if(arr[index]===num){
			return index;
		}
	}

	return null;
}

function sort(arr, param){
	let switcer=true;//true
	let sort_arr=[];
	let temp_arr=[];
	temp_arr=Object.assign(temp_arr, arr);
	console.log(temp_arr)
	for(let i=0;i<arr.length;i++){
		let max = findmax(arr);
		let ind = find_in(arr, max);
		arr[ind]=0;
		if(param!==undefined){
			sort_arr.push(max);
		}
		else{sort_arr.unshift(max);}
		

	}
	
	arr=temp_arr;
	return sort_arr;

}
let mas =[0,2,45,67,54,5,6,7,3,444,1,33,56,78,566];

console.log('sorted: '+sort(mas));
console.log('sorted: '+sort(mas, 3));


let exp_sort=function(arr, param){
	
}

let arrow_sort=(arr, param)=>{
	
}
//7-------------------------

function decl_pow(num, power){
	return num ** power;
}
let exp_pow=function(num, power){
	return num ** power;
}
let arr_pow=(num, power)=>{ return num ** power; }

//8------------------
let arr_find=(arr, wanted)=>{

}

//task2-------------------------
//1-----------


{
	

let razvorot = function (arr){
	let temp=[];
	for(let i=arr.length-1;i>=0;i--){
		temp.push(arr[i]);
	}
	return temp;

}
let razvorot_for_str = function (arr){

	arr = arr.split(' ');
	arr = razvorot(arr);
	return arr;

}
let razvorot_for_numbers = function (num){
	arr = num+'';
	arr = razvorot(arr);
	arr = arr.join('');
	return arr;

}

function toUpper_case(str){
	let strU = [];
	for(let i=0;i<str.length;i++){

		strU.push(str[i].toUpperCase());
	}

	return strU.join('');
}

function toLower_case(str){
	let strL = [];
	for(let i=0;i<str.length;i++){

		strL.push(str[i].toLowerCase());
	}

	return strL.join('');
}
function toUper_case_forMas(arr){
	
	for(let i=0;i<arr.length;i++){
		arr[i]=toUpper_case(arr[i]);
	}
	return arr;
}
function toLower_case_forMas(arr){
	
	for(let i=0;i<arr.length;i++){
		arr[i]=toLower_case(arr[i]);
	}
	return arr;
}

let mas=['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'];
console.log(razvorot(mas));
let str = 'Hi I am ALex';
console.log(razvorot_for_str(str));
let num=1234678;
console.log(razvorot_for_numbers(num));
let mas2=[44, 12, 11, 7, 1, 99, 43, 5, 69]
console.log(razvorot(mas2));
console.log(toUpper_case(str));
console.log(toLower_case(str));
console.log(toUper_case_forMas(mas));
console.log(toLower_case_forMas(mas));
	
}