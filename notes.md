- Modules are evaluated only once; traditional scripts are evaluated every time they are added to the DOM
- Browsers automatically defer the loading of modules
  - Scripts you need to use the keyword ‘defer’ explicitly
- Modules are easy to maintain and re-use
- Variables and constants can be referenced via the module to avoid polluting global namespace
- Modules can be eliminated (by bundlers) if they are unused
  - Tree-shaking

You can import modules when certain events have been triggered. This is called 'dynamic importing'

# Creational Patterns

## Constructor Pattern

There are several ways to create an object, and several ways to assign properties to a new object in JavaScript

```
const newObject = {}
const newObject = Object.create(Object.prototype)
const newObject = new Object()
```

Assigning keys and value

1. dot syntax
2. square bracket syntax
3. Object.defineProperty
4. Object.defineProperties

`this` keyword inside constructor references the new object created

Now, there is a the class constructor in JS

You can attach methods you want to reuse to the prototype

```js
<Objectname>.prototype.<methodName> = ...
```

It avoids creating the method everytime you create a new class

```ts
class Car {
  model: string;
  year: number;
  miles: number;
  fancyMethod?: Function;

  constructor(model: string, year: number, miles: number) {
    this.model = model;
    this.year = year;
    this.miles = miles;
  }
}

Car.prototype.fancyMethod = () => console.log("fancy method");
```

## The Module Pattern

[Test Module - Chapter 7 example](./chapter-7/testModule.mjs)

The Module pattern is based partly on object literals.
Object literals allow for code to be encapsulated/organized
together inside an object
https://rmurphey.com
Rebecca Murphey wrote about it, but those blog posts no longer seem to be up.
I really wish there were links, so that the info was stored somewhere for posterity.
Either way she seems to have a lot of great stuff.

```js
const myModule = {
  myProperty: "someValue",
  saySomething() {
    console.log("say what?!");
  },
};
```

WeakMap() (will be discussed in "Modern Module Pattern with WeakMap")

Addy recommends working with a template for Modules
Below is an example from the book for namespacing, public and private variables within a module

```js
// A private counter variable
let myPrivateVar = 0;

// A private function that logs any arguments
const myPrivateMethod = (foo) => {
  console.log(foo);
};

const myNamespace = {
  // A public variable
  myPublicVar: "foo",

  // A public function utilizing private functions/variables
  myPublicFunction(bar) {
    // Increment our private counter
    myPrivateVar++;

    // Call our private method using bar
    myPrivateMethod(bar);
  },
};

export default myNamespace;
```

### Module Pattern Variations

#### Import Mixins

See [import_mixins.html](./chapter-7/import_mixins.html)

### Exports

### Advantages of the Module Pattern

- private data; we only have access to the things that are explicity exports
  from a module.
- avoids publicly exposing members
- reduces risk of polluting global scope

### Disdvantages of the Module Pattern

- can't access private members of a module in methods we add to an exported object later.
- inability to create automated unit tests for private members; one must override all methods interacting with the private member
  - can you try this out with a test?

For more on the Module pattern Ben Cherry's articles: http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

### Modern Module Pattern with WeakMap

Weak map has weakly held keys. Weakly held keys are garbage collected if there is no active reference to the object

Examples
[Basic Example with WeakMap](/chapter-7/module_weakmap.html)
[Example with Namespace and WeakMap](/chapter-7/module_weakmap_namespace.html)
[Example Shopping Basket with WeakMap](/chapter-7/module_weakmap_basket.html)

An example of using Modules in modern Libraries is a React Component.

Separating a component into its own file essentially creates a module.

### The Revealing Module Pattern

[Revealing Module](./chapter-7/module_revealing.html)
Okay... I get it by looking at Christian Heilmann's article.
Which is recommended in the book. Its examples are very good
at demonstrating how it is different to other styles of the module pattern
https://christianheilmann.com/2007/08/22/again-with-the-module-pattern-reveal-something-to-the-world/

It differs to the Module Pattern, in that you don't declare
a private member first, then attach the desired methods via object notation.

```js
var pub = {};
pub.publicVar = 2;
```

You declare all members of a module privately and then create a desirable public schema you want to export by referencing the private members in the exported object.

> "...you simply define all your functions and variables in the private scope and return an anonymous object at the end of the module with pointers to the private variables and functions you want to reveal as public" - [Again with the Module Pattern – reveal something to the world](https://christianheilmann.com/2007/08/22/again-with-the-module-pattern-reveal-something-to-the-world/)

Example (from book):

```js
let privateCounter = 0;
const privateFunction = () => {
  privateCounter++;
};

const publicFunction = () => {
  publicIncrement();
};

const publicIncrement = () => {
  privateFunction();
};

const publicGetCount = () => privateCounter;

// Reveal public pointers to private functions and properties
const myRevealingModule = {
  start: publicFunction,
  increment: publicIncrement,
  count: publicGetCount,
};

export default myRevealingModule;

// Usage
// import myRevealingModule from './myRevealingModule'
// myRevalingModule.start()
```

### The Singleton Pattern

### The Prototype Pattern

### The Factory Pattern
