/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var len = nums.length;
    var hashmap = {};
    
    for(var i = 0; i < len; i++){
        if(hashmap.hasOwnProperty(nums[i])){
            delete hashmap[nums[i]];
        } else {
            hashmap[nums[i]] = nums[i];
        }
    }
    
    return hashmap[Object.keys(hashmap)[0]];
};
