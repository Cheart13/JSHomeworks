/*
let a= +prompt("Enter a number a");

if(a%2==0 || a%3==0){
	console.log("1")//do someth
}

if(a>99 && a<1000){
	console.log("2")//do someth
}

let b= +prompt("Enter a number b");
let c= +prompt("Enter a number c");

if( a<45 && b<45 && c<45 ){
	console.log("33");//do someth
}

a= +prompt("Enter a number a");

if(a%3!==0 && a%10==0){
	console.log("++"); //do someth
}

if((a>-137 && a<-53) || (a>55 && a<123)){
	console.log("+++"); //do someth
}
*/
//----------------------


let a = +prompt("Enter a number a");
let b = +prompt("Enter a number b>a");
console.log(`amount=${b - a + 1}`);
while (a <= b) {
	console.log(a++);

}
a = +prompt("Enter a number a");
b = +prompt("Enter a number b>a");
console.log(`amount=${b - a - 1}`);
b--;
while (a < b) {
	console.log(b--);


}




