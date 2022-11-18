class Solution {
    binarysearch(arr, n, k) {
        let start = 0
        let end = n-1
        
        while(start <= end) {
            let mid = Math.floor((start + end) / 2)
            if(k === arr[mid]) 
                return mid
            else if(k > arr[mid])
                start = mid + 1
            else if(k < arr[mid])
                end = mid - 1
        }
         return -1
    }
}
