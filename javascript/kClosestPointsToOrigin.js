/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */

// error checking: empty points arr, points !== 'array', k !== Number

// init new array,
// iterate through each el in points, calculate the distance to origin, set as value, key as coordinates
// sort array of objects by increasing distance
// init output arr
// set counter = 0
// while counter < k,
// grab coordinate at given idx, push to output array (make sure to format back into array)
// return array

var kClosest = function(points, K) {
  // if (!Array.isArray(points) || typeof K !== 'number') throw new Error('Invalid input type');
  // if (points.length === 0) return [];

  points.sort((a, b) => {
    let distA = a[0] * a[0] + a[1] * a[1];
    let distB = b[0] * b[0] + b[1] * b[1];

    return distA - distB;
  });

  return points.slice(0, K);
};
