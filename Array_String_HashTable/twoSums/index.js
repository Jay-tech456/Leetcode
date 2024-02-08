/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // given. an array of integers nums and an integer target: 
        
    // return the indicies of two numbers that add up to the target 

    // there are two solutions to this problem
    /*   
        Solution #1 (brute force) --- Not and optimal solution 

        foreach element in nums
            for each count = element +1 in nums

                if nums[element] + nums[count] === target{ 
                    return [element, count]
                }
        return -1
        space complexity O(1)
        time complexity O(n2)
     */ 

    /*  Solution #2 ---> two pointer apprach


        time complexity O(n)
        space complexity O(1)
    */ 


    // Solution #3 HashMap


    const map = {} 

    for(let count = 0; count < nums.length; count++){ 

        let complement = target - nums[count]
        if(map[complement] != undefined){
            return [map[complement], count]
           
        } 
         map[nums[count]] = count
    }

    return []
};
