# Intro

* A class that would be useful to your application does not implement the interface you require

* You are designing a class or a framework and you want to ensure it is usable by a wide variety of as-yet-unwritten classes and application.

* Adapters are also commonly known as `Wrappers`

* In following example, we will be using `object adapters`, that doesn't require multiple inheritance(as class adapters do).

## Graphic Example

Client ->  Component

> // Client

* Requires a particular interface

> // Component

* Exposes another interface

//It won't compile

Thus, adapter pattern comes in handy.

By writing a adapter class and injecting it between Client and Component.

Client -> ==Adapter== -> Component

> // Adapter

* Provides the interface the Client expects

* Provides the implementing the interface the Component requires

> Similar to Real World example, in order to connect a plug you need a travel adapter for it to work!

## Intent

* Convert the interface of a class into another interface client expect.

* Allow classes to work together that couldn't otherwise due to incompatible interfaces.

* Future-proof client implementations by having them depend on Adapter interfaces, rather than concrete classes directly

# Applicability

> Use the Adapter Pattern when:

* You want to use an existing class, but it's interface does not match the one you require.

* You want to create a reusable class that cooperates with unrelated or unforeseen classes(i.e classes that won't necessarily share the same interface)

* You need to use several existing subclasses, but it's impractical to adapt their interface by subclassing every one.
