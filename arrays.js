"use strict";


// 1. printIndices
function printIndices(items) {

  // for (const item of items) { //give indices
  //   console.log(item);
  for (const index in items) {
    console.log(items[index], index);
    }
  }

//printIndices(['apple','berry','cherry'])

// 2. everyOtherItem
function everyOtherItem(items) {

  for (let i = 0; i < items.length; i += 2) { //this is a way to create a counter
    console.log(items[i]);
  }
}

everyOtherItem(['apple','berry','cherry', 'durian'])


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
}
