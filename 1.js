//1
var obj={}//创建一个空对象
obj.foo=3//等价于var obj={foo:3}
console.log(obj.foo)
//2，每一个对象有一个独一无二的标志，并且仅和自己相等：
var obj1={foo:3}
var obj2={foo:3}
console.log(obj1==obj2)//false
//3.原始值的集合是固定的（fixed set of values）：你不能自定义原始值。
var str = 'abc';
str.foo = 3; 
console.log(str.foo);//undefined
//4.instanceof运算符
console.log([1,2,3] instanceof Array)//true
//5.被0整除并不会报错，而是返回Infinity或-Infinity
console.log(1/0)//Infinity
//6.浮点的其他写法
var a=.1
console.log(a)//0.1
//同时注意精度问题，0.1+0.2不等于0.3
//7.
var n = 123.456
console.log(n.toFixed(0))//123
console.log(n.toFixed(2))//123.46
console.log(n.toFixed(5))//123.45600
console.log(n.toExponential(1))//1.2e+2
console.log(n.toExponential(3))//1.235e+2
console.log(n.toPrecision(4))//123.5
console.log(n.toPrecision(7))//123.4560
//8.字符串转换为数值
parseInt('123')//123
parseInt('010')//10
parseFloat('123.456')//123.456
parseInt('010',8)//8进制的10，返回10
parseInt('0x10')//16进制的10，返回16
//9
deleteable = 123 //不使用var声明，可以删除
console.log(deleteable)//123
delete deleteable
delete a //使用var声明，不能删除
//console.log(deleteable)//error
console.log(a)//
//10.eval的使用
eval("function sayHi(){console.log('Hi');}")//eval函数的作用是把字符串当作JavaScript代码进行执行,如果字符串的内容不是合法的JavaScript语句，会报错。
sayHi()//Hi，用於動態執行代碼
//11.with的作用：将代码的作用域设置到一个特定的对象中
var objj = {p:1}
with(objj){
    p=2
}
console.log(objj.p)//2

//12
// var len=undefined
// if(book){
//     if(book.subtitle){
//         len=book.subtitle.length
//     }
// }//等价于
// var len = book && book.subtitle && book.subtitle.length

//13,返回一个新对象，这个对象同时拥有o的属性和p的属性，如果o和p有重名的属性，使用p中的属性值
// function union (o,p){return extend(extend({},o),p)}//extend函数的作用是将p中的属性添加到o中，并返回o




console.log('-------------------');
//14,通过getter和setter来实现对属性的保护,可以理解为我们是定义了一个伪属性，我们读取这个伪属性的值时，它会按照我们定义好的规则返回对象的相关的值。
let objtest = {
    people: {
      info: {
        name: 'lis',
      }
    },
    get getName() {
      return this.people.info.name  //+ ' is a good man' 可以自定义返回值
    },
    set setName(val) {
        this.people.info.name = val
    }
  }
  console.log(objtest.getName);
    objtest.setName = 'zhangsan'
    console.log(objtest.getName);


    console.log('-------------------');
//15,setter和getter的另一种写法
let user = {
    info: {
      name: 'lis'
    },
  }
  user.__defineGetter__('getName', function () {
    return this.info.name
  })
  user.__defineSetter__('setName', function (newName) {
    this.info.name = newName
  })
  user.setName = 'dwq'
  console.log(user.getName);


  console.log('-------------------');   
//16 通过defineProperty()设置
let user2 = {
    info: {
      name: 'lis',
      age: '18'
    },
  }
  Object.defineProperties(user2, {
    userName: {
      get() {
        return this.info.name
      },
      set(newName) {
        this.info.name = newName
      }
    },
    userAge: {
      get() {
        return this.info.age
      },
      set(newAge) {
        this.info.age = newAge
      }
    }
  })
  user2.userName = 'dwq'
  user2.userAge = '20'
  console.log(user2.userName);
  console.log(user2.userAge);
  console.log('-------------------');

//17,创建数组
var arr1=[1,2,3]
//第二种方式
var arr2=new Array(1,2,3)
//第三种方式
var arr3=new Array(3)//创建一个长度为3的数组

//18,slice()方法,返回一个新数组，不改变原数组
console.log(arr1.slice(1,2))//返回[2]
console.log('-------------------');

//19,splice()方法，返回一个新数组，改变原数组
var arr4=[1,2,3,4,5]
console.log(arr4.splice(1,2))//返回[2,3]
console.log(arr4)//返回[1,4,5]
//与concat()方法的区别：splice会插入数组本身而非数组的元素
console.log('-------------------');

//20,unshift & shift
var arr5=[1,2,3]
arr5.unshift(4,5)//返回[4,5,1,2,3]
arr5.shift()//返回4
console.log(arr5)//输出[5,1,2,3]
console.log('-------------------');

//21,every & some 作用：判断数组中的元素是否满足某个条件
var arr6=[1,2,3,4,5]
console.log(arr6.every(function(x){return x<10}))//true
console.log(arr6.some(function(x){return x<10}))//true
console.log('-------------------');

//22,reduce & reduceRight 作用：将数组中的元素通过函数计算最终转换为一个值
var arr7=[1,2,3,4,5]
console.log(arr7.reduce(function(x,y){return x+y}))//15
console.log(arr7.reduceRight(function(x,y){return x+y}))//15，从右向左计算
console.log('-------------------');

//23,indexOf & lastIndexOf 作用：返回数组中第一个或最后一个与指定参数相等的元素的索引

//24,forEach 作用：对数组中的每个元素执行一次提供的函数

