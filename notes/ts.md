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
