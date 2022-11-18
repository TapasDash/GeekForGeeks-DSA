
/**
 * @param {number[]} array
 * @param {number} n
 * @returns {number}
*/

class Solution{
    MissingNumber(arr,n) {
    const a = arr.sort((a,b)=>a-b)
    const sumOfArr = a.reduce((a,b)=>a+b)
    const Sn = n*(n+1)/2
    const missingNumber = Sn - sumOfArr
    return missingNumber
}
}
