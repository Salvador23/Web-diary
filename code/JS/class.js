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
 * 数组去重复
 * @param Array
 */
let arr = [[3,12,1,2,2],[3,4,5,5],[6,7,8,9,[11,12,[12,13,[14]]]],10];
console.log(arr)
// console.log(unique(arr));