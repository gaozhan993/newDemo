
// let a = 11;
// console.log(a);

//var 全局变量   let局部变量  constant 常量
// for(var i= 0;i<10;i++){
//     console.log("循环体中："+i);
// }
// console.log(i);

// for(let i= 0;i<10;i++){
//     console.log("循环体中："+i);
// }
// console.log(i);

// 数组结构解构的方式
// let [a,b,c,d] = [1,2,3];
// console.log(a);
// console.log(d); 

//undefined 和 null 区别
// let [a,b='bb']  =['aa',undefined];
// console.log(a+b);

// let [a,b='bb']  =['aa',null];
// console.log(a+b);

//对象的解构赋值
// let {foo,bal} = {bal:'bb',foo:'aa'};
// console.log(foo +　bal);

//圆括号的使用
// let foo;
// //{foo} = {foo:"foo"}//报错
// ({foo}={foo:'foo'});
// console.log(foo);

//字符串的解构
// let [a,b,c,d] = "string";
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//扩展运算符
// function taiji(...arg){
//     for(let i = 0;i<arg.length;i++){
//         console.log(arg[i]);
//     }
// }
// taiji(1,2,3,4,5);

//扩展运算符可以保护原数据
// let arr1 = ['aa','bb','cc'];
// let arr2 = arr1;
// arr2.push('dd');
// console.log(arr1);//arr1 发生了改变
// console.log(arr2);

// let arr1 = ['aa','bb','cc'];
// let arr2 = [...arr1];
// arr2.push('dd');
// console.log(arr1);//arr1 未发生改变
// console.log(arr2);


//rest...  去除首位数字
// function taiji(aa,...arg){
//     // for(let val of arg){ //for of 循环
//     //     console.log(val);
//     // }
//     console.log(aa);
//     console.log(arg);
// }
//taiji(0,1,2,3,4,5);

//字符串模板
//ES6 拼接  使用字符串模板
// let str ='你好';
// let blog =`<u>${str}</u><b>欢迎来查看我的blog</b>`
// document.write(blog);
// console.log(str==='你好');//true
// console.log(blog.startsWith('<u>你好'));//true
// console.log(blog.includes(str));//true
// console.log(blog.includes('</b>'));//true
// console.log(blog.endsWith(`blog</b>`));//true


//复制
// document.write("*".repeat(4));//将'*'复制了4份

//数字判断
// let a = 15.2;
// console.log(Number.isFinite(a));//true  是数字
// console.log(Number.isFinite('a'));//false  
// console.log(Number.isFinite(NaN));//false
// console.log(Number.isFinite(undefined));//false

//ES5 判断NaN 
// console.log(isNaN(NaN));  //true
// console.log(isNaN(undefined));//true
// console.log(isNaN("taiji"));//true
// console.log(isNaN(123));//false
// console.log(isNaN({}));//true
// console.log(isNaN(100+'2'));//false

//ES6 判断NaN语法
// console.log(Number.isNaN(NaN));//true
// console.log(Number.isNaN(undefined));//false
// console.log(Number.isNaN("taiji"));//false
// console.log(Number.isNaN(123));//false
// console.log(Number.isNaN({}));//false
// console.log(Number.isNaN(100+'2'));//false

//** 在ES6中 NaN 是一种特殊的非数字类型

// 数字操作
// let  a= 12.7;
// console.log(Number.isInteger(a));//false  判断是否未整数
// console.log( Number.parseInt(a));//12   转成整数

// let b = "aa123";
// console.log(Number.parseInt(b));//NaN

//整数的取值范围   最大为 2^53-1  之后的计算会出现错误
// let max = Math.pow(2,53)-1;//
// console.log(max);


//ES6 新增的数组
// let json={
//     '0':'aa',
//     '1':'bb',
//     '2':'cc',
//     length:3
//     //length 必须写，没有length 将无法转成 数组格式
// }
// console.log(json);
// //使用Array.from 将json 转成数组
// let arr  = Array.from(json);
// console.log(arr);

// //Array.of 方法 
// let arr = Array.of(3,4,5,6);
// console.log(arr);
// 

// find() 查找方法
// let arr1 = [1,2,3,4,5,6,7,8];
// let v1 = arr1.find((value,index,arr1)=>{  //查找下标大为位置大于4的值
//     return index > 4;
// })
// console.log(v1);//6
//  let v2 = arr1.find((value) => value > 4);//查找值大于4的值
// console.log(v2);//5

// console.log(arr1.find(3));//error


// let arr1 = [1,2,3,4,5,6,7,8];
// let i = arr1.findIndex((value) => value > 4);//查找值大于4 的下标
// console.log(i);//4

// 过滤去重
// var myArr = [1,2,3,4,5,5,3,2];
// console.log(myArr.filter((value,index,arr)=>arr.indexOf(value)===index));

//fill 填充
// let arr = [1,2,3,4,5,6];
// arr.fill('web',1,3);  
// console.log(arr);
//左闭右开  [a,b)

//数组循环
//1.for of  
// let arr = [1,2,3,4,5,6];
// for(let val of arr){
//     console.log(val);
// }

//2 for .. index of
// let arr = [1,2,3,4,5,6];
// for(let index of arr.keys()){
//     console.log(index);//输出下标
// }

// let arr=['lj','梁娟','太极公司'];
// for(var [index,val] of arr.entries()){//键值对格式
//     console.log(index+':'+val);
// } 

// let arr=['lj','梁娟','太极公司'];
// let list = arr.entries();
// console.log(list);   // Array 的迭代器
// console.log(list.next()); //下一个结点
// console.log(list.next().value); //下一个结点的值
// console.log(list.next().next); //undefined  ?????

//自定义抛出异常

// function add(a,b=1){
    //`use strict`  //严谨模式  ： 函数体内 不能有默认值
//     if(a===0){
//         throw new Error('this is a erro');
//     }
//     return a+b;
// }
// console.log(add.length);//通过此方法查看函数需要参数的个数(必须传入最少的参数个数)
// console.log(add(3));

//箭头函数
// var add = (a,b=1) => a+b;
// console.log( add(3));

//箭头函数添加方法体
// var add = (a,b=1) => {
//   console.log("这是一个有方法体的箭头函数。。");
//   return a+b;
// }
// console.log(add(3));


//  数组去重
// var myArr = [1,2,3,4,5,5,3,2];
// console.log(myArr.filter((value,index,arr)=>{

//     console.log("index:"+index+",value:"+value+".indexOf(value):"+arr.indexOf(value));
//     //执行步骤
//         // index:0,value:1,indexOf(value):0
//         // index:1,value:2,indexOf(value):1
//         // index:2,value:3,indexOf(value):2
//         // index:3,value:4,indexOf(value):3
//         // index:4,value:5,indexOf(value):4
//         // index:5,value:5,indexOf(value):4
//         // index:6,value:3,indexOf(value):2
//         // index:7,value:2,indexOf(value):1
//   return (arr.indexOf(value)===index);
// }));

// var show = (a,b)=>{
//     console.log(a);
//     return a+b;
// }
// console.log(show(3,5));

//对象的函数解构
// let obj = {
//     'a':"cc",
//     b:"bb"
// }
//console.log('a' in obj);



// let json ={
//     a:'lj',
//     b:'abc'
// }
// function ff (a,b){  //传入一个json 只能给 a赋值 对象
//     console.log(a);
//     console.log(b);
// }
// function fff({a,b}){  //传入一个json 可以给 a，b 都进行赋值
//     console.log(a);
//     console.log(b);
// }
// ff(json);  
// fff(json);

//数组的函数解构
// let arr = [1,2,3];
// function fun (a,b,c,d){
//     console.log(a,b,c,d);
// }
// fun(...arr);//传入不定个数的值
 