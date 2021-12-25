# React in ES6

* No autobind
    * you need to explicitly bind with ES6 class
    * you can bind inline but for performace reasons its better to bind in the constructor

* PropTypes declared seperately

* Default props declared seperately

* Set initial state in constructor

## ES6 stateless functional component

```javascript
const helloWorld = props => <h1>Hello World</h1>
```
## 9 benifits (stateless functional component)

1. No class  needed

2. Lets you avoid the `this` keyword

3. Enforced best practies (focues on the UI than the behaviour) (keeps the state pure)

4. High signal-to-noise ratio

5. Enhanced code completion / intellisense

6. Bloated components are obvious

7. Easy to understand

8. Easy to test

9. Performance

## When should you use I use Each?


## Class Component 

    * State
    * Refs
    * Lifecycle methods
    * Child functions (for performance) (Nested component)

## Stateless Component

    * Everywhere else
