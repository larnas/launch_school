let myProtoObj = {foo: 1, bar: 2};
let myObj = Object.create(myProtoObj);
myObj.qux = 3
console.log(myObj)

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
}); // -> variable objKeys have all the object's keys values in an array 
    //    later on the foreach function console each array's value

for (let key in myObj) {
  console.log(key);
} // -> for..in iterates over all of the object's keys, 
  //    including those in the prototype object, myProtoObj

  for (let key in myObj) {
    if (myObj.hasOwnProperty(key)) {
      console.log(key);
    }
  } // add an if statement ot check whether the key is myObj's own property: