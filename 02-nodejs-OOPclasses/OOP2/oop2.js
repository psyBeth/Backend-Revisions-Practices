"use strict"

//* OOP & CLASSES
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.


//* Class Decleration:
// class PascalCaseName{...}

//* Class Expression:
// const PascalCaseClassName = class {
//     undefinedProperty // only definition. (undefinedProperty == undefined)
//     propertyName = 'value' // attribute, field 

//     constructor (parameter1, parameter2 = 'defaul-value') {
//         this.parameter1 = parameter1
//         this.parameter2 = parameter2
//     }
//     methodName1(){
//         return this
//     }
// }

//? INSTANCE = object derived from a class

// const PascalCaseInstanceName = new PascalCaseClassName(0, 1)
// console.log(PascalCaseInstanceName);
// console.log(PascalCaseInstanceName.propertyName);
// console.log(PascalCaseInstanceName.parameter1);
// console.log(PascalCaseInstanceName.methodName1());
// console.log(typeof PascalCaseClassName);

/* ------------------------------------------------------- */

// class Car {

//     isRunning = false

//     constructor(brand, model,year) {
//         this.brand = brand,
//         this.model = model,
//         this.year = year
//     }

//     runEngine() {
//         this.isRunning = true
//         console.log('engine is running...');
//         return this.isRunning;
//     }
// };
// const Ford = new Car ('Ford', 'Mustang', 1967)
// console.log(Ford);

// // Ford.isRunning = true // changed it (can also do with a method like runEngine)
// Ford.runEngine();
// console.log(Ford);

// const Mercedes = new Car('Mercedes', 'CLK200', 2010);
// console.log(Mercedes);
// const Renault = new Car('Renault', 'Megane', 2010)
// console.log(Renault);

/* ------------------------------------------------------- */

//? INHERITANCE (parent-child relationship)
//? this= child class, super= parent class

class Vehicle {
    vehicleIsActive = false
    constructor (vehicleType) {
        this.vehicleType = vehicleType
    }
}


class Car extends Vehicle {

    isRunning = false

    constructor(brand, model,year,vehicleType) {
        //? super() must be at the top (parent constructor should be run first)
        super(vehicleType)
        this.brand = brand,
        this.model = model,
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('engine is running...');
        return this.isRunning;
    }
};

class Accessory extends Car {

    constructor (accessoryName, brand, model, year) {
        super(brand, model, year)
        this.accessoryName =accessoryName
    }

}
const FordClimate = new Accessory('Bosh Climate', 'Ford', 'Mustang', 1967, 'Car')
console.log(FordClimate);

/* ------------------------------------------------------- */

