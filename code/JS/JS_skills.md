<!-- markdownlint-disable -->

## JS 技巧知识归纳—

### 1.请用一行代码实现数组扁平化？

```js
/**
 * 数组扁平化（方式一）
 * @param Array
 */
function flat(arr) {
  return [].concat(...arr.map(v => (Array.isArray(v) ? flat(v) : v)));
}
console.log(flat(arr)); //打印出 [ 3, 12, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 11, 12, 12, 13, 14, 10 ]

/**
 * 数组扁平化（方式二）
 * @param Array
 */
function flat1(arr) {
  return arr.flat(Infinity); //Infinity:无穷大
}
flat1(arr); //打印出 [ 3, 12, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 11, 12, 12, 13, 14, 10 ]

/**
 * n维数组扁平化（方式三）
 * @param Array
 */
function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

flatten([1, [2, '🐱', 3], '🦊']); // [1, 2, "🐱", 3, "🦊"]
flatten([1, [2, 3, [4, '🐱', 5], '🐏']]); // [1, 2, 3, 4, "🐱", 5, "🐏"]

let arr = [1, [2, 3, [4, '🐱', 5], '🐏'], '🐆', '🦄'];

/**
 * 使用迭代实现n维数组扁平化
 * @param {Array} arr
 */
function flatten(arr) {
  let arrs = [...arr];
  let newArr = [];
  while (arrs.length) {
    let item = arrs.shift();
    if (Array.isArray(item)) {
      arrs.unshift(...item);
    } else {
      newArr.push(item);
    }
  }
  return newArr;
}

let flat = flatten(arr); //[ 1, 2, 3, 4, '🐱', 5, '🐏', '🐆', '🦄' ]

/**
 * 使用递归实现n维数组扁平化
 * @param {Array} arr
 */
function flatten(arr) {
  let arrs = [];
  arr.map(item => {
    if (Array.isArray(item)) {
      arrs.push(...flatten(item));
    } else {
      arrs.push(item);
    }
  });
  return arrs;
}

let flat = flatten(arr); //[ 1, 2, 3, 4, '🐱', 5, '🐏', '🐆', '🦄' ]

/**
 * 通过字符串转换实现n维数组扁平化
 */
arr
  .join(',')
  .split(',')
  .map(item => Number(item)); //[ 1, 2, 3, 4, '🐱', 5, '🐏', '🐆', '🦄' ]
```

### 2.请把俩个数组 [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]，合并为 [A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]

```js
/**
 * 两个数组合并为1个数组，比如[A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]
 * @param Array
 */
let a1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
let a2 = ['A', 'B', 'C', 'D'].map(item => {
  return item + 3;
});
let a3 = [...a1, ...a2].sort().map(item => {
  //includes()方法用来判断一个数组是否包含一个指定的值
  if (item.includes('3')) {
    //split() 方法使用指定的分隔符字符串将一个String对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。
    return item.split('')[0];
  }
  return item;
});

console.log(a3); //[ 'A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D' ]
```

### 3.改造下面的代码，使之输出 0 - 9，写出你能想到的所有解法

```js
//解法一：
for (let i = 0; i < 10; i++) {
  setTimeout(
    i => {
      console.log(i);
    },
    1000,
    i
  );
}

//解法二：
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

//解法三：
for (let i = 0; i < 10; i++) {
  //闭包
  (i => {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })(i);
}
```

### 4.在输入字符串中出现重复字符的个数，（不区分大小写）

```js
/**
 * 出现重复字符个数
 * @param String text 字符串
 */
const texts = 'ABAOOVNWJ';
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/(.)\1+/g) || []
  ).length;
}

duplicateCount(texts); //在字符串中出现重复字符个数：2
```

### 5.写一个将字符串转驼峰式的函数

```js
/**
 * 不论一个字符串转变成驼峰式的字符串
 * @param String str 字符串
 */
function camelCase(str) {
  // split: 指定字符串分割为子字符串，以确定每个拆分的位置
  return str.split(' ').map(v =>
    v.replace(/\b(\w)/g, function(f1) {
      return f1.toUpperCase();
    })
  );
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
function tribonacci(signature, n) {
  for (var i = 0; i < n - 3; i++) {
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
  }
  // slice: 从原字符串中提取出来的新字符串
  return signature.slice(0, n);
}

tribonacci([1, 1, 1], 1); // [1]
tribonacci([1, 2, 7], 2); // [1, 2]
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
});

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
});

// for...in遍历对象自身的所有属性和继承的所有可枚举的属性，但不包含Symbol属性。
for (let key in child) {
  console.log(key); // c d f a
}

// Object.keys() 返回对象自身的所有可枚举属性的数组，但不包含Symbol属性。
Object.keys(child); //[ 'c', 'd', 'f' ]

// Object.getOwnPropertyNames(obj) 返回对象自身所有属性名（包括不可枚举属性），但不包括Symbol值作为名称的属性
Object.getOwnPropertyNames(child); //[ 'c', 'd', 'e', 'f' ]

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
let number = ['2', '3', '4', '7', '10', '6', '5', '11'];
function isPrime(nums) {
  for (let i = 2; i < nums; i++) {
    if (nums % i === 0) {
      return false;
    }
  }
  return nums > 1;
}

isPrime(number); //false
```

### 9.请问类数组转数组有哪几种实现方式？

```js
let obj = {
  0: 'a',
  1: 'b',
  length: 2
};

console.log(Array.from(obj)); //[ 'a', 'b' ]
console.log(Array.prototype.slice.call(obj)); //[ 'a', 'b' ]
console.log([].slice.call(obj)); //[ 'a', 'b' ]

Object.prototype[Symbol.iterator] = function() {
  let index = 0;
  let propKeys = Reflect.ownKeys(obj);
  let lIndex = propKeys.findIndex(v => v === 'length');
  propKeys.splice(lIndex, 0);

  return {
    next() {
      if (index < propKeys.length) {
        let key = propKeys[index];
        index++;
        return { value: obj[key] };
      } else {
        return { done: true };
      }
    }
  };
};
console.log([...obj]); //[ 'a', 'b', 2 ]
```

### 10.请在不使用 Set 的情况下实现数组去重?

```js
/**
 *  数组去重复
 * @param arr  数组
 */
const arr1 = ['1', '5', '7', '3', '8', '0', '8'];
const arr2 = ['🐺', 0, 1, 2, '🐺', '🐑', 3, '🐑'];

function unique(arr) {
  return arr.filter((item, index) => {
    // indexOf()方法返回在数组中可找到第一个给定元素的第一个索引
    return arr.indexOf(item) === index;
  });
}

unique(arr1); //[ '1', '5', '7', '3', '8', '0' ]
unique(arr2); //[ '🐺', 0, 1, 2, '🐑', 3 ]
```

### 11.请描述第 2 行代码的执行顺序

```js
//假设: 从右到左赋值给新变量
let obj = { a: 1 };
//创建cobj指向obj
let cobj = obj;
obj.b = obj = { a: 2 };

console.log(obj.b); //undefined
console.log(cobj.b); //{ a: 2 }
```

### 12.请写出一个获取数组最大值的函数？

```js
let arr = [22, 20, 18, 15, 9, 6];
// defuce()方法对数组中的每个元素执行一个由您提供某函数，将其结果汇总为单个返回值。
arr.reduce((prev, next) => Math.max(prev, next)); //得到22
Math.max.apply(null, arr); //得到22
Math.max(...arr); //得到22
Reflect.apply(Math.max, Math, arr); //得到22
```

### 13.请将数组中所有的 0 移动到数组尾部

```js
/**
 *  将所有的0移动到数组尾数
 * @param arr  数组
 */
let arr = ['s', '😅', 'm', 1, 0, 'd', 1, 0, 2];

function moveZeros(arr) {
  return [...arr.filter(v => v !== 0), ...arr.filter(v => v === 0)];
}
moveZeros(arr); //[ 's', '😅', 'm', 1, 'd', 1, 2, 0, 0 ]
```

### 14.请写出一个判断字符串是否是回文的函数

```js
/**
 *  判断字符串是否返回回文的函数
 * @param str  字符串
 */
let strs = 'hello Javascript';
function reverseStr(str) {
  //join()方法通过连接数组（或类数组对象）中的所有元素（用逗号或指定的分隔符字符串分隔）来创建并返回一个新字符串
  return (
    str ===
    str
      .split('')
      .reverse()
      .join('')
  );
}
reverseStr(strs); // false
```

### 15 下面代码中 a 在什么情况下会打印出来呢

```js
//利用toString()
let a = {
  i: 1,
  toString() {
    return a.i++;
  }
};

if (a == 1 && a == 2 && a == 3) {
  console.log(1);
}

//利用valueOf()
let a = {
  i: 1,
  // valueOf()方法返回指定对象的原始值。
  valueOf() {
    return a.i++;
  }
};

if (a == 1 && a == 2 && a == 3) {
  console.log(1);
}

//利用ES6的Symbol.toPrimitive
let a = {
  //对象Symbol.toPrimitive属性的指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。
  [Symbol.toPrimitive]: (i => {
    return () => {
      return ++i;
    };
  })(0)
};

if (a == 1 && a == 2 && a == 3) {
  console.log('1');
}
```

### 16 从 URL 分割若个参数

```js
/**
 *  从URL分割若个参数函数
 * @param url 字符串
 */

const url = 'http://www.taobao.com/index.php?key0=0&key1=1&key2=2';

function parseQueryString(url) {
  let str = url.split('?')[1];
  let items = str.split('&');
  let arr, name, value;

  for (var i = 0; i < items.length; i++) {
    let self = this;
    arr = items[i].split('=');
    name = arr[0];
    value = arr[1];
    self[name] = value;
  }
}
const obj = new parseQueryString(url);
console.log(obj); //parseQueryString { key0: '0', key1: '1', key2: '2' }
```

### 实现一个 sleep 函数，比如 sleep(1000) 意味着等待 1000 毫秒，可从 Promise、Generator、Async/Await 等角度实现

```js
/**
 * 从ES6 Async/Await可实现一个 sleep 函数等待1000输出
 * @param {Number} time
 */
const sleep = time => {
  return new Promise(resolve => setTimeout(resolve, time));
};

async function sleepAsync() {
  console.log('start sleep!!');
  await sleep(1000);
  console.log('end sleep!!');
}

sleepAsync();

/**
 * 从ES6 Promise可实现一个 sleep 函数等待1000输出
 * @param {Number} time
 */
const sleep = time => {
  return new Promise(resolve => setTimeout(resolve, time));
};

sleep(1000).then(() => {
  console.log('输出' + 1);
});

/**
 * 从ES6 Generator/yiled可实现一个 sleep 函数等待1000输出
 * @param {Number} time
 */
function* sleepGenerator(time) {
  yield new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

sleepGenerator(1000)
  .next()
  .value.then(() => {
    console.log('输出' + 1);
  });
```
