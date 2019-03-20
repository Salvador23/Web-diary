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

const array = ['1','6','2','🐐','1','5','9','10','🐐'];
function unique(arr){
  return arr.filter((v,i) => {
    Object.is(i, arr.indexOf(v))
  })
}
unique(array);