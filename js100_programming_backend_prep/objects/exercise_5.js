let myProtoObj = {foo: 1, bar: 2};

const myObj1 = Object.assign({}, myProtoObj);
console.log(myObj1);
console.log(myProtoObj);

// solution
let myObj2 = Object.create(myProtoObj);
console.log(myObj2);
