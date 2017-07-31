# Testing 

## Moacha vs AVA
---------------------------------
## Mocha
* Serial
* No assertions built in
* Uses globals
* No built-in ES6 supports
* Runs all tests on save
* Long stack trace upon error
* Proven, mature, with huge ecosystem

## AVA
* Concurrent
* Assertions built in
* No globals
* Built-in ES6 support
* Runs only impacted tests
* Short specific error with marker
* New

-------------------------------

## Chai VS Expect
-------------------------------
## Chai
* to.equal
* to.deep.equal
* to.exist
* to.not.exist
* to.be.above
* No spy

## Expect
* toBe
* toEqual
* toExist
* toNotExist
* ToBeGreaterThan

* Spy built in

## Helper Libraries

* React test utils
* Enzyme

## React Test Utils
* React testing library
* Built by Facebook
* Verbose API

* Shallow Render
    * Render single component
    * No DOM Required
    * Fast and Simple

* renderIntoDocument
    * Render component and children
    * DOM Required
    * Supports simulating interactions

## DOM interactions
* findRenderedDOMComponentWithTag
* scryRenderedDOMComponentsWithTag
* Simulate
    * Clicks
    * Keypresses
    * Etc

--------

## Why Enzyme?

## React Test Utils
* findRenderedDOMComponentWithTag
* scryRenderedDOMComponentsWithTag
* scryRenderedDOMComponentsWithClass

## Enzyme (Compared to React Test Utils)
* find
* find
* find

## Enzyme is an Abstraction
* Behind the scenes
    - React Test Utils
    - JSDOM (In-memory DOM)
    - Cheerio (Fast jquery style selectors)


## Where to Test
* Browser 
    * Uses Karma
    * More configuration and slower than alternatives

* Headless Browser (Better)
    * Uses PhantomJS

* In-memory DOM (ENZYME USES THIS!)
    * Uses JSDOM (simulates actual browser creating a dom to interact with )
    * Fast, quick to setup and run on node

## Testing Presentation Component

## Shallow Render vs Render Into Document

## Shallow Render
* Fast
* Test in isolation
* No refs or interactions yet
* Recommended for future

## Render into Document
* Slower
* Test set of components
* Test refs and interactions

> Behind the scene Enzyme uses React Utils

##>>> Stopped at Testing React Video 128