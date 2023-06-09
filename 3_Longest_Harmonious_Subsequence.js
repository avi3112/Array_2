// We define a harmonious array as an array where the difference between its maximum value
// and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence
// among all its possible subsequences.

// A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:
// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5

// Explanation: The longest harmonious subsequence is [3,2,2,2,3].

function harmonious(nums){
    let newarr= nums.sort()
    let left=0
    let right=1
    let result=0
    while(right<newarr.length){
        let diff=newarr[right]-newarr[left]
        if(diff==1){
            
        }
    }
}

const result= harmonious([1,3,2,2,5,2,3,7])
console.log(result)