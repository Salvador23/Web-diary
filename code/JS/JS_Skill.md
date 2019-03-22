<!-- markdownlint-disable -->
## 整理JS技巧思路—

### 1.请用一行代码实现数组扁平化？

```js
/**
 * 数组扁平化（方式一）
 * @param Array
 */
function flat(arr) {
  return [].concat(...arr.map(v => Array.isArray(v)? flat(v) : (v)))
}
console.log(flat(arr)) //打印出 [ 3, 12, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 11, 12, 12, 13, 14, 10 ]

/**
 * 数组扁平化（方式二）
 * @param Array
 */
function flat1(arr){
  return arr.flat(Infinity) //Infinity:无穷大
}
flat1(arr) //打印出 [ 3, 12, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 11, 12, 12, 13, 14, 10 ]
```

### 2.请把俩个数组 [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]，合并为 [A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]

```js
/**
 * 两个数组合并为1个数组，比如[A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]
 * @param Array
 */
let a1 =  ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
let a2 = ['A','B','C','D'].map((item) => {
  return item + 3;
})
let a3 = [...a1,...a2].sort().map((item) => {
  //includes()方法用来判断一个数组是否包含一个指定的值
  if(item.includes('3')){
    //split() 方法使用指定的分隔符字符串将一个String对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。
    return item.split('')[0]
  }
  return item;
})

console.log(a3); //[ 'A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D' ]
```

### 3.改造下面的代码，使之输出0 - 9，写出你能想到的所有解法

```js
//解法一：
for(let i =0; i<10; i++){
  setTimeout((i) => {
    console.log(i)
  },1000,i)
}

//解法二：
for(let i =0; i<10; i++){
  setTimeout(() => {
    console.log(i)
  },1000)
}

//解法三：
for(let i =0; i<10; i++){
  //闭包
  ((i) => {
    setTimeout(() => {
      console.log(i)
    },1000)
  })(i)
}
```

### 4.在输入字符串中出现重复字符的个数，（不区分大小写）

```js
/**
 * 出现重复字符个数
 * @param String text 字符串
 */
const texts = 'ABAOOVNWJ'
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/(.)\1+/g) || []).length
}

duplicateCount(texts) //在字符串中出现重复字符个数：2 
```

### 5.写一个将字符串转驼峰式的函数

```js
/**
 * 不论一个字符串转变成驼峰式的字符串
 * @param String str 字符串
 */
function camelCase(str){
  // split: 指定字符串分割为子字符串，以确定每个拆分的位置 
  return str.split(' ').map(v => v.replace(/\b(\w)/g, function(f1){
    return f1.toUpperCase()
  }))
}
camelCase('hello world');
```

### 6.求泰波那契数列

```js
/**
 * 返回泰波那契数列
 * @param Array signature 数组
 * @param Nuber n
 */
function tribonacci(signature, n){
  for(var i = 0; i < n-3; i++){
    signature.push(signature[i] + signature[i+1] + signature[i+2])
  }
  // slice: 从原字符串中提取出来的新字符串
  return signature.slice(0 , n);
}

tribonacci([1,1,1], 1) // [1]
tribonacci([1,2,7], 2) // [1, 2]
```

### 7.for/in、Object.keys 和 Object.getOwnPropertyNames 对属性遍历有什么区别？你还知道其他遍历对象属性的方式吗？请说明。

```js
let parent = {}; //新创建空对象
// Object.defineProperties() 该方法直接在一个对象上面定义新的属性或者修改属性返回新对象
// value代表该值，writable代表可修改，enumerable代表可枚举，configurable代表可配置
Object.defineProperties(parent, {
  a: {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: true
  },
  b: {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
  },
  [Symbol('parent')]: {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: true
  }
})

let child = Object.create(parent, {
  c: {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: true
  },
  d: {
    value: 1,
    writable: false,
    enumerable: true,
    configurable: true
  },
  e: {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
  },
  f: {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: false
  },
  [Symbol('child')]: {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
  }
})

// for...in遍历对象自身的所有属性和继承的所有可枚举的属性，但不包含Symbol属性。
for (let key in child){
  console.log(key) // c d f a
}

// Object.keys() 返回对象自身的所有可枚举属性的数组，但不包含Symbol属性。
Object.keys(child); //[ 'c', 'd', 'f' ]

// Object.getOwnPropertyNames(obj) 返回对象自身所有属性名（包括不可枚举属性），但不包括Symbol值作为名称的属性
Object.getOwnPropertyNames(child) //[ 'c', 'd', 'e', 'f' ]

// Object.getOwnPropertySymbols() 返回对象自身的所有 Symbol 属性的数组。
Object.getOwnPropertySymbols(child); // [ Symbol(child) ]
Object.getOwnPropertySymbols(parent); // [ Symbol(parent) ]

// Reflect.ownKeys()返回该对象自身所有属性名，包括是否可枚举属性，是否Symbol属性
Reflect.ownKeys(child); //[ 'c', 'd', 'e', 'f', Symbol(child) ]
```

### 8.请写出一个判断质数的函数，返回布尔值

```js
/**
 * 判断质数的函数，返回是否布尔值
 * @param Array nums 数组
 */
let number = ['2', '3', '4', '7', '10', '6','5','11'];
function isPrime(nums){
  for(let i=2; i < nums; i++){
    if(nums % i === 0){
      return false;
    }
  }
  return nums > 1;
}

isPrime(number) //false
```

### 9.请问类数组转数组有哪几种实现方式？

```js
let obj = {
  0: 'a',
  1: 'b',
  length: 2
}

console.log(Array.from(obj))  //[ 'a', 'b' ]
console.log(Array.prototype.slice.call(obj)) //[ 'a', 'b' ]
console.log([].slice.call(obj)) //[ 'a', 'b' ]

Object.prototype[Symbol.iterator] = function(){
  let index = 0;
  let propKeys = Reflect.ownKeys(obj);
  let lIndex = propKeys.findIndex(v => v === 'length');
  propKeys.splice(lIndex, 0);

  return {
    next() {
      if(index < propKeys.length){
        let key = propKeys[index];
        index++;
        return { value: obj[key] }
      }else{
        return { done: true }
      }
    }
  }
}
console.log( [...obj] ) //[ 'a', 'b', 2 ]
```

### 10.请在不使用Set的情况下实现数组去重?

```js
/**
 *  数组去重复
  * @param arr  数组
 */
const arr1 = ['1','5','7','3','8','0','8'];
const arr2 = ['🐺', 0, 1, 2, '🐺', '🐑', 3, '🐑'];

function unique(arr){
  return arr.filter((item, index) => {
    // indexOf()方法返回在数组中可找到第一个给定元素的第一个索引
    return  arr.indexOf(item) === index;
  })
}

unique(arr1); //[ '1', '5', '7', '3', '8', '0' ]
unique(arr2); //[ '🐺', 0, 1, 2, '🐑', 3 ]
```