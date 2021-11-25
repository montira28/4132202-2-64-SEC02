let cars = ["Toyota","honda","Mazda"];
let fruits = [];
fruits[0] = "Apple";
fruits[3] = "Mango";
let rname = new Array("Win","John","Jame");
console.log(rname);

let popCars = cars.pop();
console.log(popCars);
console.log(cars);

cars.unshift("Kubota")
console.log(cars);
cars.shift();
console.log(cars);

cars.splice(1,0, "Honda", "Kubota");
console.log(cars);

const carSlide = cars.slice(1,2);
console.log(carSlide);

const newArr = cars.concat(rname);
console.log(newArr);
const newArr2 = [   cars,   rname]; //spraede operator
console.log(newArr2);

console.log(newArr.toString());
