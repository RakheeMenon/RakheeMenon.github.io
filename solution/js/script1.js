/*var message="In Global";
console.log("Global scope:"+message);

var a=function () {
	var message="Inside a";
	console.log("a:"+message);
	function b() {
		console.log("b:"+message);
	}
	b();
}
a();
var x;
console.log(x);
if (x==undefined) {
	console.log("x is undefined");
}
x=5;
if(x==undefined)
{
	console.log("x is undefined");
}
else
{
	console.log("x has been defined");
}*/

/*var x="Hello";
x +=" World!";
console.log("message= "+x);


console.log((5+4)/3);
function test1(num) {
	console.log(num/5);
}
test1(); 


function a() {
	return { 
	
		name:"Rakhee"
	};
}

function b() {
	return {
		name:"Menon"
	};
}

console.log(a());
console.log(b());



function calculation(intex)
{
	console.log("calculation="+intex);
}
calculation("Hello");*

function orderWith(sidedish)
{
	sidedish=sidedish || "roti";
	console.log("Orderwith "+sidedish);
}
orderWith("Roti");
orderWith();*/


/*Objects  MAy 3 2017 */
/*var company=new Object();
company.name="Autosoft";
company.ceo=new Object();
company.ceo.firstname="Reghu";
console.log(company);

console.log(company["ceo"]);

company["stock of company"]=500000;
console.log("Stock price of company:"+company["stock of company"]);  */


/***Object Creation using Literals ***/
/* var company= {
	name:"Autosoft",
	ceo: {
		firstname:"Reghu",
		lastname:"Menon",
		favColor:"White"
	},
	stock:50000
};
console.log(company);*/

/*Function as Objects */
/*function add(a,b)
{
	return a+b;
}
console.log(add(6,9));
console.log(add);
add.version="8.2.0";
console.log(add["version"]); */

//Function Factory
/*function makeMultiplier(multiplier)
{
	var myFun= function(x)
	{
		return multiplier*x;
	};
	return myFun;
}*/
//Pass BY Value and Pass By reference 
/*
var multiplyBy2=makeMultiplier(2);
console.log(multiplyBy2(6));
var multiplyBy8=makeMultiplier(8);
console.log(multiplyBy8(10));
*/
//Passing function as Arguments
/*function doOperation(x,Operation)
{
	return Operation(x);
}
var result=doOperation(6,multiplyBy2);
console.log(result);
 //this
function test(){
	console.log(this);
	this.myName="Rakhee";
}
test();
console.log(window.myName);
*/
/*function changePrimtive(primValue)
{
	console.log("In primtive:");
	console.log("Before:",primValue);

	primValue=5;
	console.log("After:",primValue);
}

var value=7;
changePrimtive(value);
console.log("After changePrimtive,original value:",value); */
/*function changeObject(ObjValue)
{
	console.log("In changeObject:");
	console.log("Before:");
	console.log(ObjValue);

	ObjValue.x=5;
	console.log("After:");
	console.log(ObjValue);
}

var value={x:7}
changeObject(value);
console.log("After changeObject,originalvalue",value);
//Constructors
/*function Circle(radius)
{
	console.log(this);
}
var myCircl=new Circle(5);
console.log(myCircl);
*/

//Object and Literals
/*function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy");
max.bark();*/

/*
var LiteralCircle= {
	radius:10,

	 getArea: function ()
	 {
	 	var self=this;
	 	console.log(this);
	 	var increaseRadius =function ()
	 	{
	 		self.radius=30;
	 	};
	 	increaseRadius();
	 	console.log(this.radius);
	 	return Math.PI* Math.pow(this.radius,2);
	 }
}; 
console.log(LiteralCircle.getArea());

//Arrays

var array=new Array();
array[0]="Rakhee";
array[1]=6;
array[2]=function(name)
{
	console.log("Hey!!"+ name);
};
array[3]={company:"Autosoft"};

console.log(array);
array[2](array[0]);
console.log(array[3].company);  

//Short Hand Creation

var names=["Rakhee",{ name:"Reghu"},
{name:"Rohit"},
"Lekha"];
console.log(names);

var names=["Reghu","Rohit","Rakhee"];

for (var i = 0; i < names.length; i++) {
	console.log("Hello "+ names[i] +"!!!");
} 

//Enhanced for loop
 var MyObj={
 	name:"Rakhee",
 	post:"Trainee Engineer",
 	age:23
 };
 for(var x in MyObj )
 {
 	console.log(x +":" +MyObj[x]);
 }


var counter = 0;
var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
for (var i = 0; i < myArray.length; i++) {
  counter++;
}
console.log(counter);  */

//Javascript Closures
/*
function makeMultiplier(multiplier)
{

	function B()
	{
		console.log("multiplier:"+multiplier);
	}
	B();
	return (
		 function(x) {

			return multiplier *x;
		}

		);
}

var doubleAll=makeMultiplier(2);
console.log(doubleAll(10));  */   

(function(){
var names=["Rakhee","Reghu","Jack","Lekha","Jill"];


for(var i=0;i<names.length;i++)
{
	var fletter=names[i].charAt(0).toLowerCase();

	if(fletter=='j')
	{
		byeSpeaker.speak(names[i]);
	}
	else
	{
		helloSpeaker.speak(names[i]);
	}
}


})();






