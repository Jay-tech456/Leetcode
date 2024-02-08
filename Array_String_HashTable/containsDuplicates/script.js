[200~/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    /* given an integer array, nums: 
            return true if the array has duplicates in the array
            returun false if it has all unque values
      
        soltuion #1 (Bute Force): 
                foreach element in nums: 
                    foreach element + 1 in nums: 
                        return true if there are duplicates vlaues

                return false if it is able to go through the two nested loops 
                        without having a duplicate values

                // space complexity O(1)
                // time complexity O(n2)
        solution #2 (two pointer approach): 
                    traditional two pointers to find the duplicate values 
                    in present of the array

                    may be O(n) depending how we code it

                    left = 0
                    right = left +1 
                    while left < right: 
                            if(arr[left] == arr[right]){
                                return true
                            }
                            right++
                            if(right == arr.length){ 
                                left += 1
                                right = left + 1
                            }
                    
        solution #3 (Hash Map)
            show bellow
      */           


      let map = {}

      for(let count = 0; count < nums.length; count++){ 

          if(nums[count] in map){ 
              return true
          } else { 
              map[nums[count]] = 1
          }
      }
      return false


/* 
	time complexity O(n) 
	Space Complexity O(n) 


 
	solution #4 convert it into a set 

	let set = new Set(nums) 
	return set.length != nums.length

	Time Complexity O(n) 
	Space Complexity O(n)
*/ 

}
    
