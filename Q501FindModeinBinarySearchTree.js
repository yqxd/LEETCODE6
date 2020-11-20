/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var findMode = function (root) {
    result = new Array();
    var maxnum = 0;
    var dic = {};
    iter(root, dic);
    for(var i in dic){
        if(dic[i] > maxnum) {
            maxnum = dic[i];
        }
    }
    for(let i in dic){
        if(dic[i] === maxnum) {
            result.push(parseInt(i));
        }
    }
    return result;
};



var iter = function (root, dic) {
    if (root == null) {
        return;
    }
    if (!dic[root.val]) {
        dic[root.val] = 1;
    } else {
        dic[root.val] += 1;
    }
    iter(root.left, dic);
    iter(root.right, dic);
}

var root = new TreeNode(1)
var root1 = new TreeNode(2)
var root2 = new TreeNode(2)
// var root3 = new TreeNode(1)
// var root4 = new TreeNode(2)
root.right = root1
root1.left = root2
// root1.left = root3
// root1.right = root4
console.log(findMode(root))


