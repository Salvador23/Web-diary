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