

// create data structure using a combination of an array and map
// use map in order to keep track of the indices of our keys
// use array to quickly key into random idx and return a given key

// for insertion,
// we check that the value does not already exist in our map
// if does not already exist,
// we push the number to the end of our array O(1)
// then we grab the lastIdx O(1)
// and set the k/v pair of the key and idx position in our map
// return true
// if already exists, return false

// for deletion,
// if already exists,
// find the idx in the array of our element O(1)
// grab the lastIdx O(1)
// swap elements at curIdx && lastIdx (this will later allow us to pop off the element O(1))
// update the index value in our map
// delete the key/value pair in our map for the element at the end of our array (the one to be deleted)
// pop off the last element from our array to complete remove the element from our set instance
// return true
// if does not already exist, return false;

// for randomGet.
// generate randomIdx value O(1)
// key into our array and return the value in the array

/**
 * Initialize your data structure here.
*/
class RandomizedSet {
  constructor() {
    this.nums = [];
    this.order = {};
  }

  /**
   * Inserts a value to the set. Returns true if the set did not already contain the specified element.
   * @param {number} val
   * @return {boolean}
  */
  insert(key) {
    if (this.order[key] === undefined) {
      this.nums.push(key);
      let lastIdx = this.nums.length - 1;
      this.order[key] = lastIdx;
      return true;
    } 
    return false;
  }

  /**
   * Removes a value from the set. Returns true if the set contained the specified element.
   * @param {number} val
   * @return {boolean}
  */
  remove(key) {
    if (this.order[key] !== undefined) {
      let itemIdx = this.order[key];
      let lastIdx = this.nums.length - 1;

      [this.nums[itemIdx], this.nums[lastIdx]] = 
      [this.nums[lastIdx],this.nums[itemIdx]];

      this.order[this.nums[itemIdx]] = itemIdx;
      delete this.order[this.nums[lastIdx]]
      this.nums.pop();
      return true;
    }
    return false;
  }

  /**
   * Get a random element from the set.
   * @return {number}
  */

  getRandom() {
    let randomIdx = Math.floor(Math.random() * this.nums.length);
    return this.nums[randomIdx];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
*/











// /**
//  * Initialize your data structure here.
// */
// class RandomizedSet {
//   constructor() {
//     this.set = new Map();
//   }

//   /**
//    * Inserts a value to the set. Returns true if the set did not already contain the specified element.
//    * @param {number} val
//    * @return {boolean}
//   */
//   insert(key) {
//     if (this.set.has(key)) {
//       return false;
//     }
//     this.set.set(key, true);
//     return true;
//   }

//   /**
//    * Removes a value from the set. Returns true if the set contained the specified element.
//    * @param {number} val
//    * @return {boolean}
//   */
//   remove(key) {
//     if (this.set.has(key)) {
//       this.set.delete(key);
//       return true;
//     }
//     return false;
//   }

//   /**
//    * Get a random element from the set.
//    * @return {number}
//   */

//   getRandom() {
//     let randomIdx = Math.floor(Math.random() * this.set.size);
//     let randomKey = [...this.set.keys()][randomIdx];

//     return randomKey;
//   }
// }

// /**
//  * Your RandomizedSet object will be instantiated and called as such:
//  * var obj = new RandomizedSet()
//  * var param_1 = obj.insert(val)
//  * var param_2 = obj.remove(val)
//  * var param_3 = obj.getRandom()
// */