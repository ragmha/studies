# Flux vs Redux

* Data down, Actions up (Unidirectional data flow)

## Similarites

* Unidirectional Flow

* Actions

* Stores

## Differences

* Reducers (takes current state and action returns new state) (pure functions)

* Containers (contains necessary logic for marshaling data and pass down to dumb components)

* Immutable (Redux store is immutable)


## Flux

Action -> Dispatcher -> Store -> React _^

* Uses singleton dispatcher to connect actions to store
* stores use event-emitter to connect to the dispatcher

## Redux

Action -> Store -> React
            | |
          Reducers

* Doesn't have a dispatcher


## Flux

* Store contains state and change logic
* Multiple stores
* Flat and disconnected stores
* Singlenton dispatcher
* React components subscribe to stores
* State is mutated

## Redux

* Store and change logic are seperate
* One store
* Single store with hierarchical reducers (Composition)
* No dispatcher
* Container components utilize connect
* State is immutable
