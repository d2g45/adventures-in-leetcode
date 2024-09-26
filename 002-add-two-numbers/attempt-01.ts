/**
 * Failed on test with large number
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const sum = getNumber(l1) + getNumber(l2);
    const splitSum = sum
        .toString()
        .split("")
        .map((item) => Number(item))
        .reverse();
    return generateListNode(splitSum);
}

const getNumber = (list: ListNode | null): number => {
    const output: number[] = [];

    let currentList: ListNode | null = list as ListNode;
    while (currentList) {
        output.push(currentList.val);
        currentList = currentList.next ?? null;
    }

    return +output
        .reverse()
        .map((item: number) => item.toString())
        .join("");
};

const generateListNode = (splitSum: number[]): ListNode | null => {
    const nextNumbers: Array<number[] | null> = [];

    for (let i = 0; i < splitSum.length; i++) {
        const numbers: number[] | null = splitSum.slice(i + 1, splitSum.length);
        nextNumbers.push(numbers && numbers.length ? numbers : null);
    }

    const reversed = splitSum.reverse();

    let current: ListNode | null = null;
    for (let i = 0; i < reversed.length; i++) {
        current = new ListNode(reversed[i], current);
    }

    return current;
};
