/**
 * Accepted, not the best. Read a hint in the discussions
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

const getNumbers = (list): number[] => {
    const output: number[] = [];

    let currentList = list;
    while (currentList) {
        output.push(currentList.val);
        currentList = currentList.next;
    }

    return output;
};

const normalizeNumberArray = (numbers: number[], max: number): number[] => {
    const len = numbers.length;
    return len === max ? numbers : [...numbers, ...Array(max - len).fill(0)];
};

const splitSum = (numbers1: number[], numbers2: number[]): number[] => {
    let output: number[] = [];
    let carry = 0;
    for (let i = 0; i < numbers1.length; i++) {
        const tempSum = numbers1[i] + numbers2[i] + carry;
        const sum = tempSum >= 10 ? tempSum - 10 : tempSum;

        carry = tempSum >= 10 ? 1 : 0;
        output.push(sum);
    }

    if (carry > 0) {
        output.push(carry);
    }

    return output;
};

const generateListNode = (splitSum: number[]): ListNode | null => {
    const nextNumbers: Array<number[] | null> = [];

    for (let i = 0; i < splitSum.length; i++) {
        const numbers = splitSum.slice(i + 1, splitSum.length);
        nextNumbers.push(numbers.length ? numbers : null);
    }

    const reversed = splitSum.reverse();
    const reversedNext = nextNumbers.reverse();

    let current: ListNode | null = null;
    for (let i = 0; i < reversed.length; i++) {
        current = new ListNode(reversed[i], current);
    }

    return current;
};

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const l1Numbers: number[] = getNumbers(l1);
    const l1Len: number = l1Numbers.length;
    const l2Numbers: number[] = getNumbers(l2);
    const l2Len: number = l2Numbers.length;

    const maxLen = Math.max(l1Len, l2Len);

    const l1Normalized: number[] = normalizeNumberArray(l1Numbers, maxLen);
    const l2Normalized: number[] = normalizeNumberArray(l2Numbers, maxLen);

    const sums = splitSum(l1Normalized, l2Normalized);
    return generateListNode(sums);
}
