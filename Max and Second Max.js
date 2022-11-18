class Solution {
  
    largestAndSecondLargest(sizeOfArray, arr)
    {
        const sortedUniqueArrayInDescending = [...new Set(arr.sort((a,b)=> b-a))]
        const largest = sortedUniqueArrayInDescending[0]
        const secondLargest = sortedUniqueArrayInDescending[1] ? sortedUniqueArrayInDescending[1] : -1
        return [largest,secondLargest]
    }
}
