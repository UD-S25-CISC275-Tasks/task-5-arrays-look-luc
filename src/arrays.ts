/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let numRet = numbers.map((num: string): number =>
        isNaN(Number(num)) ? 0 : Number(num),
    );
    return numRet;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let amount = amounts.map((num: string): number =>
        num.length === 1 && num[0] === "$" ? 0
        : num[0] === "$" ?
            isNaN(Number(num.substring(1))) ? 0
            :   Number(num.substring(1))
        : isNaN(Number(num)) ? 0
        : Number(num),
    );

    return amount;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((str) => str[str.length - 1] !== "?")
        .map((str: string): string => {
            if (str[str.length - 1] === "!") {
                return str.toUpperCase();
            } else {
                return str;
            }
        });
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let num4: number = words.filter((word) => word.length < 4).length;
    return num4;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let counter: number = 0;
    if (colors.length === 0) {
        return true;
    } else {
        counter += colors.filter((color) => color === "red").length;
        counter += colors.filter((color) => color === "green").length;
        counter += colors.filter((color) => color === "blue").length;
    }
    if (counter === colors.length) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let numSum: number = 0;
    let itemStr = "";
    if (addends.length === 0) {
        return "0=0";
    } else {
        numSum = addends.reduce((sum: number, num: number) => sum + num, 0);
        itemStr = addends.join("+");
    }
    return numSum.toString() + "=" + itemStr;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let numSum: number = 0;
    let newVal: number[] = [];
    let indexFirNeg: number;

    //for loop inspired from Google's Gemini
    /*this checks where is the first occurence of a negative number
    then goes through the original array to add up the sum and place it in the right spot in relation to the negative*/
    indexFirNeg = values.findIndex((val: number) => val < 0);
    numSum = values
        .slice(0, indexFirNeg === -1 ? values.length : indexFirNeg)
        .reduce((sum: number, num: number) => sum + num, 0);

    //overall code inspired from Google's Gemini
    /*This checks if there was a negative ever existed and if so we cut the original array up to the negative and add it to 
    the new array then adds the sum of all of the positive integers then puts the rest of the original array from the index +1
    of the negative.*/
    if (indexFirNeg !== -1) {
        newVal = values.slice(0, indexFirNeg + 1);
        newVal.push(numSum);
        newVal = newVal.concat(values.slice(indexFirNeg + 1));
    } else {
        newVal = values.slice();
        newVal.push(numSum);
    }
    return newVal;
}
