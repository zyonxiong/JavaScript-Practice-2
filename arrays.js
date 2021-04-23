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

//everyOtherItem(['apple','berry','cherry', 'durian'])


// 3. smallestNItems
function smallestNItems(items, n) {
  items.sort((a,b) => a-b); //save this
  console.log(items.slice(0,n))
  
}

smallestNItems([1, 30, 4, 21, 100000],2) //make sure to check the
//num of arguement passing through function