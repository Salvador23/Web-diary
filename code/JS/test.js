function flatten(arr) {
  while(arr.some(item => Array.isArray(item))){
    arr = [].concat(...arr);
  }
  return arr;
}

flatten([1,[2,'🐱',3,],'🦊'])
flatten([1,[2,3,[4,'🐱',5],'🐏']])