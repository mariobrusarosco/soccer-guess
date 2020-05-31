## CLASSES

```ts
export class MyClass {}
```

I can instance properties

```ts
export class MyClass {
  prop1: string;
  prop2: number;
}
```

And I need to initialize those properties by setting a constructor method

```ts
export class MyClass {
  prop1: string;
  prop2: number;

  constructor() {
    this.prop1 = "John Doe";
    this.prop2 = 10;
  }
}
```

## Using Global Variables

### Adding a third party type definition file

```bash
  yarn add @types/googlemaps -D
```

## Select a DOM element

```ts
const map = document.querySelector(".map") as HTMLElement;
```

## Interfaces

## TS Compiler

```bash
tsc --init
```

Creates a `tsconfig.json` file at `root` level

### tsconfig

```json
{
  "srcDir": "./src", // Where the .ts/.tsx files are
  "outDir": "./build" // Where the compiled code is saved
}
```

### Watch Mode

```bash
tsc -w
```

### Concurrent Compilation and Execution

```bash
npm install nodemon concurrently
```

```json
{
  "scripts": {
    "start:build" : "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*",
  }
```

```bash
tsc --init
```

## Shorthand Class properties

```ts
class Sorter {
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }
}
```

Is the same as:

```ts
class Sorter {
  constructor(public collection: number[]) {
    ...
  }
}
```

## Abstract Classes

```ts
abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort() {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
```

## Interfaces x Abstract Classes

> Use Interfaces when the objects that share a few charactericts are are no similar with each other: User() and Company() may share a few things, but in general they are quite different things

> Use Abstract classes when the objects are quite similar. If they share too many methods and those methods are implemented in a similar way... use an abstract class
