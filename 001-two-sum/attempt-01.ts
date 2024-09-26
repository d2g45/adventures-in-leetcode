/**
 * this is too slow
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

type TTwoSumOutput = {
    indexes: number[];
    sum: number;
};

var twoSum = function (nums, target): number[] | undefined {
    const output: TTwoSumOutput[] = [];

    nums.forEach((num, index) => {
        nums.forEach((num2, jndex) => {
            if (index !== jndex && index < jndex) {
                output.push({
                    indexes: [index, jndex],
                    sum: num + num2,
                });
            }
        });
    });

    return output.find((object) => object && object.sum === target)?.indexes ?? undefined;
};
