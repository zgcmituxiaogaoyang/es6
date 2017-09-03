// var [foo=true]=[];
// console.log(foo);
/*
function f(){
	console.log('aaa');
}
let [x=f()]=[1];//惰性求值  如果后面不赋值则运行f()输出aaa
console.log(x);
*/
//对象的解构赋值
/*
var {x=3}={x:5};
console.log(x);//5
var {x=3}={};
console.log(x);//3
*/
//对象的嵌套解构赋值
//start是模式,不是变量,因此不会被赋值
/*
var node={
	loc:{
		start:{
			line:1,
			column:5
		}
	}
};
var {loc:{start:{line,column}}}=node;
console.log(line);//1
console.log(column);//5
console.log(start);//ReferenceError: start is not defined
*/