# Understanding Dynamic Dispatch

## Object's duty
> To carry data about its type

## Type's duty
> => To keep track of its virtual functions table

> => To override some functions from its base type

## Runtime's duty

> => Jump in when call is placed on an object

> => Find V-table of its generating type

> => Find concrete function address
