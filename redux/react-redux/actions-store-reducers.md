## Actions
> Events happening in the application are actions
> Plain object with a description of the event

```javascript 
function rateCourse(rating) {
    return {
        type: RATE_COURSE,
        rating: rating // Any value that is serializable
    }
}
```

- rateCourse function is Action Creator
- { type:.., rating:...} is action

- Affects data what is in the store

## Store
* Honors the single responsibility principle
* It just stores data
* Single source of truth
* Very small API
    * store.dispatch(action)
    * store.subscribe(listener)
    * store.getState()
    * replaceReducer(nextReducer) // for Hot-reload support

* No API for chaning data in the store
* Actions are handled by reducers

```javascript
let store = createStore(reducer)
```

## Immutability
> To change state, return a new object

* Fundamental concepts in redux

### What is mutable in JS?
* Objects
* Arrays
* Functions


### What is Immutable in JS?
* Number
* Strings
* Boolean
* Undefined
* Null


### Copy  (Helps in creating a new object) (Makes a deep copy)

Object.assign(target, ...sources)

example

Object.assign({}, state, {role: 'admin' })

Always pass an empty object or else it mutates the state


## Flux
* State is mutated

## Redux
* State is immutable


## Why Immutablity ?
* Clarity
* Performance
* Awesome Sauce

### Clarity
* Reducer changes the state (Who changed the state?)

### Performance
* Checking props in state, (Does reference comparison, uses shouldComponent update to bail out)

### Awesome sauce
* Amazing debugging experience
* Time travel debugging
* Undo/Redo
* Turn off individual actions
* Play interactions back

## Handling immutable state

* Object.assign
* Spread operator
* Lodash merge
* Lodash extend
* Object-assign
* react-addons-update
* Immutable.js

### How dod I enforce immutability ?

* Trust
* redux-immutable-state-invariant (Use in dev environment)
* Immutable.js

## Reducers
> Function takes state and action, which returns a new state
(state, action) => state

* Reducers must be pure (no side-effects)

### Forbidden in Reducers
* Mutate arguments
* Perform side effects
* Call non-pure functions

> 1 Store. Multiple Reducers


function myReducer(state, action) {
    switch(action.type) {
        case "INCREMENT_COUNTER":
            return (Object.assign(
                {},
                state,
                {counter: state.counter + 1}
            ))
    }
}

## All Reducers are called on each Dispatch
* Reducer = "Slice" of State

- All Reducers makes up a Store

- Write independent small reducers that are responsible for updates to a specific slice of state. We call this pattern "reducer composition"



## Summary

* Actions
    - Represent user intent
    - Must have a type

* Store
    - dispatch, subscribe, getState

* Immutability
    - Just return a new copy

* Reducers
    - Must be pure
    - Multiple per application
    - Slice of state