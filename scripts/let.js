//let用法
/*
{
	let a=10;
	var b=20;
}
console.log(a);//ReferenceError: a is not defined
console.log(b);//20
*/
/*
arr=[1,3,4,5];

// for(var i=0;i<arr.length;i++){
// 	//do something
// }
// console.log(i);//4
for(let i=0;i<arr.length;i++){
	
}
console.log(i);//ReferenceError: i is not defined
*/
//let应用
/*
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
};
a[6](); //10
// var a = [];
// for (var i = 0; i < 10; i++) {
//     (function(i) {
//         a[i] = function() {
//             console.log(i);
//         };
//     })(i);
// }
// a[6](); //6
// var a=[];
// for(let i=0;i<10;i++){
// 	a[i]=function(){
// 		console.log(i);
// 	}
// }
// a[6]();//6
*/
//不存在变量提升
/*
// console.log(foo);//ReferenceError: foo is not defined
// let foo=2;
typeof x;//ReferenceError: x is not defined
let x;
*/
//TDZ
/*

var tmp=123;
if(true){
	//TDZ开始
	tmp='123';//ReferenceError: tmp is not defined
	let tmp;//TDZ结束
}
*/
//不允许重复声明
/*
//报错
function(){
	let a=10;
	var a=1;
}
//报错
function(){
	let a=10;
	let a=1;
}
//报错
function(arg){
	let arg;
}
*/
//不合理场景一:内层变量可能会覆盖外层变量
/*
var tmp=new Date();
function f(){
	console.log(tmp);
	if(false){
		var tmp='hello world!';
	}
}
f();//undefined
*/
//不合理场景二:从来计数的循环变量泄露为全局变量
/*
var s='hello';
for(var i=0;i<s.length;i++){
	console.log(s[i]);
}
console.log(i);//5 泄露为全局变量
*/
//块级作用域
/*
function f(){console.log("I am outside");}
(function(){
	if(false){
		function f(){console.log("I am inside");}
	}	
})();
f();
*/
//const用法基本与let相同
/*
const foo={};
foo.pro=123;
console.log(foo.pro);
foo={};
*/
/*
const foo=Object.freeze({});//冻结对象
foo.pro=123;//不起作用
console.log(foo.pro);//undefined
*/
//彻底冻结对象的函数
/*
var constantize=(obj)=>{
	Object.freeze(obj);
	Object.keys(obj).forEach((key,value)=>{
		if(typeof obj[key]==='object'){
			constantize(obj[key]);
		}
	});
};
const foo={
	s:123,
	method:function(){
		console.log(this.s);
	}
};
constantize(foo);
foo.key="value";//不起作用
console.log(foo.key);
foo.method();
*/

