import * as _ from 'lodash';

import * as addition from 'math/addition';
import { users } from 'data/users';

//Users
console.log(_.filter(users, { age: 36 }));

// Addtion
console.log('1 + 3 =', addition.sumTwo(1, 3));

console.log('1 + 3 + 4 =', addition.sumThree(1, 3, 4));
