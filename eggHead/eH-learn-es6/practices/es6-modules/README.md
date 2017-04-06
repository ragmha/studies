## Getting it start

```javascript
npm install
npm start -s 🎉
```


# Some Common Import/Export Variations

```javascript
import {someFunction} from 'someModule';

import {someFunction as someAlias} from 'someModule';

import * as someModule from 'someModule';

export function someFunction() {/* */};

function someFunction() {/* */}; export {someFunction};

function someFunction() {/* */}; export {someFunction as someAlias};
```
