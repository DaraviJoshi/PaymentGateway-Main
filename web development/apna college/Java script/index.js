// 1. ways to print in JavaScript
// console.log("Hello world");
// alert("this is alert");
// document.write("This is document write");

//2. java script console Api
// console.log("hey world",6+2,"hey

// 3. JavaScript Variables
// var num1=34;
// var num2=56;
// console.log(num1+num2);

// 4. datatypes in java script

// number
var number1 = 322;
var number2 = 832.54;

// String
var str1 = "this is a string 1.";
var str2 = "this is a string 2.";

// objects
var marks = {
  ravi: 34,
  shubham: 26,
  dj: 60,
};

// Booleans
var a = true;
var b = false;
// console.log(marks , a);

// var und= undefined;
var und;
// console.log(und);

var n = null;
// console.log(n);

// datatypes:
// 1. primitive : undefined, null, number, string, boolean, symbol
// 2. reference : arrays and objects

var arr = [1, 2, "string", 3, 4];

// console.log(arr);
// console.log(arr[0]);

// console.log(arr[2]);
// console.log(arr[2][2]);

// operators in java script
// arithmetic operators

var a = 100;
var b = 10;
// console.log("The value a + b is ",a+b);
// console.log("The value a - b is ",a-b);
// console.log("The value a * b is ",a*b);
// console.log("The value a / b is ",a/b);

// assignment operator
var c = b;
// c+=2;
// console.log(c);

// comparison operators
var x = 34;
var y = 56;
// console.log(x==y);
// console.log(x<y);
// console.log(x!=y);

// logical operators
// console.log(true && true);
// console.log(true && false);
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(!false);
// console.log(!true);

// function in java script
// DRY = do not repeat yourself
function avg(a, b) {
  return (a + b) / 2;
}
c1 = avg(4, 6);
c2 = avg(20, 10);
// console.log(c1);
// console.log(c2);

// conditionals operators in js
var age = 4;
if (age > 8) {
  // console.log("adult");
} else {
  // console.log("kid");
}

// loops

// for loop
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
for (var i = 0; i < arr.length; i++) {
  if(i==2)
    // break;
    continue;
  // console.log(arr[i]);
}

arr.forEach(function (element) {
  // console.log(element);
});



// const ac=0;
// ac++;
// ac=ac+1;

// while loop
// let j = 0;
// while (j < arr.length) {
//     // console.log(arr[j]);
//     j++;
// }


// do while loop
// let j=0;  
// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);

let myArr=["Fan","camera",34,null,true];
// console.log(myArr.length);
// myArr.pop();
myArr.push("DJ");
myArr.shift();
myArr.unshift("joshi");
// console.log(myArr);
// console.log(myArr.toString());
Arr1=[4,3,2,5,098765,6,6,2,224,524,23,12]
// console.log(Arr1.sort());   //sorted as dictionary like firstly all starts with 1 then 2 and so on

// string methods in javascript
let myString="hello world";
// console.log(myString.length);
// console.log(myString.indexOf("world"));
// console.log(myString.lastIndexOf("world"));


// console.log(myString.slice(2,5));
d=myString.replace("hello",'hi')
d=d.replace("world",'word')
// console.log(d,myString);

let myDate=new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.setDate(13,5));  //doubt


    // --------------------------DOM manipulation--------------------------
// console.log(document);
let ele = document.getElementById('click');
// console.log(ele);

let eleClass = document.getElementsByClassName('container');
// console.log(eleClass);
// eleClass[0].style.background="yellow";
eleClass[0].classList.add("bg-primary");
eleClass[0].classList.add("text-success");
// console.log(ele.innerHTML);
// console.log(ele.innerText);
// console.log(eleClass[0].innerHTML);
// console.log(eleClass[0].innerText);

tn=document.getElementsByTagName('div');
console.log(tn);
createElement=document.createElement('p');
createdElement.innerText="This is a created Para"
tn[0].appendchild(createElement);

























