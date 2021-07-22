// Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".
//
//     Example 1:
// Input: [5, 4, 3, 2, 1]
// Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
// Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal".
//     For the left two athletes, you just need to output their relative ranks according to their scores.
//     Note:
// N is a positive integer and won't exceed 10,000.
// All the scores of athletes are guaranteed to be unique.

/**
 * @param {number[]} nums
 * @return {string[]}
 */

// var findRelativeRanks = function (nums) {
//     let G = 0;
//     let S = 0;
//     let B = 0;
//     let T;
//     for (let i in nums) {
//         if (nums[i] > B) {
//             B = i;
//             if (nums[B] > nums[S]) {
//                 T = S;
//                 S = B;
//                 B = T;
//                 if (nums[S] > nums[G]) {
//                     T = G;
//                     G = S;
//                     S = T;
//                 }
//             }
//         }
//     }
//     B = B.toString(10)
//     S = S.toString(10)
//     G = G.toString(10)
//     for (let i in nums) {
//         nums[parseInt(i)] = nums[parseInt(i)].toString(10)
//     }
//     nums[parseInt(B)] = "Bronze Medal";
//     nums[parseInt(S)] = "Silver Medal";
//     nums[parseInt(G)] = "Gold Medal";
//     return nums;
// };
//
//
// console.log(findRelativeRanks([5,4,3,2,1]))


const findRelativeRanks = (nums) => {
    let tmp = [...nums].sort((a, b) => b - a);
    let res = [];
    for (const score of nums) {
        let idx = tmp.indexOf(score);
        if (idx + 1 === 1) {
            res.push("Gold Medal");
        } else if (idx + 1 === 2) {
            res.push("Silver Medal");
        } else if (idx + 1 === 3) {
            res.push("Bronze Medal");
        } else {
            res.push(idx + 1 + '');
        }
    }
    return res;
};


console.log(findRelativeRanks([5, 4, 3, 2, 1]))



