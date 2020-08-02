class ArryaOfNumber {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArryaOfString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const example = new ArrayOfAnything([1, 2, 3]);

// Generics with functions
const printItemsOfArray = <T>(array: T[]): void => {
  array.forEach((item) => console.log(item));
};

printItemsOfArray(["a", "b"]);
printItemsOfArray([1, 2]);

// Generic Constraints
class Car {
  print(): void {
    console.log("I am a car");
  }
}

class House {
  print(): void {
    console.log("I am a house");
  }
}

interface Printable {
  print(): void;
}

const printHouseOrCars = <T extends Printable>(array: T[]): void => {
  array.forEach((item) => item.print());
};

printHouseOrCars([new Car(), new Car()]);
printHouseOrCars([new House(), new House()]);
