// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:
// Input: nums = [1,2,3,4,5,6]
// Output: 6



function maxproduct(arr){
    let newarr= arr.sort()
    let len=newarr.length
    let maxproduct=newarr[len-1]*newarr[len-2]*newarr[len-3]
    return maxproduct

}


const result=maxproduct([1,2,3,4,5,6])
console.log(result)