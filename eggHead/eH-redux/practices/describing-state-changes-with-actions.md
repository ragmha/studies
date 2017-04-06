# Describing State Changes with Actions

*   The second principle of Redux is that `the state tree is read-only`. Any time
you want to change the state, you have to `dispatch an action`.

*   An action is a plain JavaScript Object describing the change.

*   Just like the state is the minimal representation of the data, the action is
minimal reperesentation of the change to that data.

*   The only requirement for an action is taht it has a type property
(conventionally a **String** as it is `serializable`)

*   E.g, In a **counter application** there are `INCEREMNT` and `DECREMENT` actions.
In case of a **todo application**, the display components don't know how an item
was added to the list, all it knows is that a `ADD_TODO` action was dispatched,
with `text` "hey" and a sequential "id".

*   The overall principle here is that the `state is read only` and can be
modified by `dispatching actions`.
