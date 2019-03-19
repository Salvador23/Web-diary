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

<!-- #### 2.请在不使用Set的情况下实现数组去重?
```js
function unique(arr){
  return arr.filter((v,i) => Object.is(i, arr.indexOf(v)))
}
console.log(unique(arr))
``` -->

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