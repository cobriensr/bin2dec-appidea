import { get } from 'svelte/store';
import { bindigit } from '../stores/content';

// This challenge requires that the developer implementing it follow these constraints:
// Arrays may not be used to contain the binary digits entered by the user
// Determining the decimal equivalent of a particular binary digit in the sequence must be calculated using a single mathematical function

export default function binConvert(event: Event) {
    event.preventDefault();
    let bindigitValue: string = get(bindigit);
    let valueLength: number = bindigitValue.length;
    let result: number = 0;
    let base: number = 0;
    // The decimal number is equal to the sum of all the binary numbers with each digit being raised to the power of its index (base 2) before being summed
    // example: 1111 = 1*(2^3) + 1*(2^2) + 1*(2^1) + 1*(2^0) = 8 + 4 + 2 + 1 = 15
    for (let i = valueLength-1; i > -1; i--) {
        let parsedNum: number = Number(bindigitValue.charAt(i));
        base = Math.pow(2, i);
        result += (parsedNum*base);
    }
    append(result);
}

function append(result: number) {
    const resultPrint = document.getElementById("result");
    resultPrint!.innerHTML = "The converted decimal number is " + result.toString();
}