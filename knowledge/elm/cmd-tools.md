# Command line tools

*   **elm-repl**: used to explore simple elm expressions
    - compiles elm code to javascript, so requires node.js
    - `:help` - help and more info
    - `:exit` - exit the repl
    - `\` - lets us split onto multiple lines

*   **elm-reactor**: helps build elm projects
    - `--port` - specify the port you want to run the application at
    - `--address` - lets you replace localhost with some other address. For example, you may want to use elm-reactor --address=0.0.0.0 if you want to try out an Elm program on a mobile device through your local network.

*   **elm-make**: builds elm projects, it can compile to html or javascript
    - `--output` - specify the output file

* **elm-package** - download and publish packages from the package catalog
    - dependencies are added to your elm-package.json file
    - `install` - install a dependency
    - `publish` - publish a library
    - `bump` - bump version numbers based on an api change
    - `diff` - get the difference between 2 apis
