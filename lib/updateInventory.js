/*
Inventory Update
================================================================================

Compares and updates the inventory stored in a 2D array against a second 2D array
of a fresh delivery. Update the current existing inventory item quantities (in arr1).
If an item cannot be found, add the new item and quantity into the inventory array.
The returned inventory array should be in alphabetical order by item.

*/

const updateInventory = (arr1, arr2) => {
  arr2.forEach((elem, idx) => {
    let x = arr1.map(elem => elem[1]).indexOf(elem[1]);

    if (x === -1) {
      arr1.push(elem);
    } else {
      arr1[x][0] += elem[0];
    }
  });

  return arr1.sort((a, b) => a[1] > b[1]);
};

module.exports = updateInventory;
