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
	tmp='123';//ReferenceError: tmp is not defined
	let tmp;
}
*/
