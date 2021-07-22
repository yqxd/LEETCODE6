// Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.
//
// Example 1:
// Input: [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2;
// The number 2 can't find next greater number;
// The second 1's next greater number needs to search circularly, which is also 2.

// /**
//  * @param {number} num1
//  * @param {number} num2
//  * @return {number}
//  */
// function sor(num1, num2) {
//     return num1 - num2
// }
//
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
//
// var nextGreaterElements = function (nums) {
//     let check = {};
//     let sort = [];
//     for (const i in nums) {
//         if (!check[nums[i]]) {
//             sort.push(nums[i]);
//             check[nums[i]] = true;
//         }
//     }
//     sort = sort.sort(sor);
//     check = {}
//     for (var i = 0; i < sort.length - 1; i++) {
//         check[sort[i]] = sort[i + 1];
//     }
//     check[sort[sort.length - 1]] = -1;
//     for (var i = 0; i < nums.length; i++) {
//         nums[i] = check[nums[i]];
//     }
//     return nums
// };

console.log(nextGreaterElements([1, 1, 2, 3, 33, 4, 5, 6]))