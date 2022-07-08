// every file in node is a module
const sayHi = (name) => {
    console.log(name);
};

let obj = {};
//this is how you add property to an object
obj.name = "rojin";
sayHi(obj.name);

export {sayHi};

