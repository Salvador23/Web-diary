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

let arr = ['s','😅','m',1,0,'d',1,0,2];

function moveZeros(arr){
  return [...arr.filter(v => v !== 0), ...arr.filter(v => v === 0)];
}

moveZeros(arr); //[ 's', '😅', 'm', 1, 'd', 1, 2, 0, 0 ]