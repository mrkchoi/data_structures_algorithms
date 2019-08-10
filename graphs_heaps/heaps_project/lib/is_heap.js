// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    for (let i = 1; i < array.length; i++) {
        let cur = array[i];
        let leftChildIdx = i * 2;
        let rightChildIdx = (i * 2) + 1;
        let leftChild = array[leftChildIdx] || -Infinity;
        let rightChild = array[rightChildIdx] || -Infinity;

        if (cur > leftChild && cur > rightChild) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}


module.exports = {
    isMaxHeap
};



// getParent(idx) {
// return Math.floor(idx / 2);
// }

// getLeftChild(idx) {
// return idx * 2;
// }

// getRightChild(idx) {
// return (idx * 2) + 1;
// }