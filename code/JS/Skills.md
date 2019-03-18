<!-- markdownlint-disable MD002 MD022 MD041 -->
## —整理JS技巧思路

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