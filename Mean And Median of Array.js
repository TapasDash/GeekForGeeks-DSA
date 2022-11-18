class Solution {
    //Function to find median of the array elements.
    median(A,N)
    {
       const sortedArr = A.sort(function(a, b){return a - b});
       //Your code here
       //If median is fraction then convert it to integer and return
       if(N%2 != 0) return sortedArr[Math.floor(N/2)]
       else return Math.floor((sortedArr[Math.floor(N/2)]+sortedArr[Math.floor(N/2-1)])/2)
       
    }
    //Function to find mean of the array elements.
    mean(A,N)
    {
        //your code here
        return Math.floor(A.reduce((a,b) => a+b) / N)
    }
}
