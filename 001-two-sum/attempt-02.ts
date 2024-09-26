/**
 * after a hint/video
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target): number[] | undefined {
    const output: Record<string, number> = {};

    for (const index of nums.keys()) {
        const num = nums[index];
        const difference = target - num;
        if (output.hasOwnProperty(difference.toString())) {
            return [output[difference.toString()], index];
        } else {
            output[num] = index;
        }
    }
};
