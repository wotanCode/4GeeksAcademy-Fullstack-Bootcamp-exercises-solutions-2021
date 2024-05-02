---
tutorial: "https://www.youtube.com/watch?v=9Eiidx--_GQ"
---

# `03.1` Your first functional component

When you create functions that return HTML, JSX will let you treat them as **"Components"**, basically they will become your own custom HTML tags.

## Creating our first functional Component

One of the things we can do thanks to JSX is calling functions like they are an HTML tag, for example:
```js
// if we declare a function called MyFunction
const MyFunction = () => {
    return <h1>I Love React</h1>;
}

// we can call the function as an HTML tag like this:
<MyFunction />

// instead of the typical way of using round brackets
MyFunction();
```

When you call a function like that, it becomes a **"React component"**, which is a function that generates (returns) HTML dynamically. Whatever the function returns will be replaced in the same place as the original `<MyFunction />` was placed.

## :speech_balloon: Instructions

On the 9th line of index.js, change the way the function is called, call the function as a **"React component"** using `<` and `>` like it an HTML tag (instead of parentheses).
