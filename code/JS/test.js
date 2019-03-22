// class Queue{
// 	constructor (contents = []){
// 		this._queue = [...contents] //扩展符
// 	}

// 	pop(){
// 		const value = this._queue[0];
// 		this._queue.splice(0,1)
// 		return value;
// 	}
// }

// //对引用的赋值需要使用const常量
// const point = new Queue(2,3);
// console.log(point);


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

console.log(unique(arr1));
console.log(unique(arr2));