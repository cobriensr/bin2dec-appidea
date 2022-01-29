import { get } from 'svelte/store';
import { bindigit } from '../stores/content';

// This challenge requires that the developer implementing it follow these constraints:
// Arrays may not be used to contain the binary digits entered by the user
// Determining the decimal equivalent of a particular binary digit in the sequence must be calculated using a single mathematical function

export default function binConvert(event: Event) {
    event.preventDefault();
    // retrieve value from store object
    let bindigitValue: string = get(bindigit);
    // initialize variables for use in for loop
    let result: number = 0;
    let base: number = 0;
    let parsedNum: number = 0;
    // The decimal number is equal to the sum of all the binary numbers with each digit being raised to the power of its index (base 2) before being summed
    // example: 1111 = 1*(2^3) + 1*(2^2) + 1*(2^1) + 1*(2^0) = 8 + 4 + 2 + 1 = 15
    for (let i: number = bindigitValue.length-1; i > -1; i--) {
        // retrieve binary number at position i in the binary number string
        parsedNum = Number(bindigitValue.charAt(i));
        // raise 2 to the position of i in the binary number string
        base = Math.pow(2, i);
        // multiply binary number by the base and sum together to convert to decimal
        result += (parsedNum*base);
    }
    // call the append function
    append(result);
}
function append(result: number) {
    // retrieve the p element from the HTML structure
    const resultPrint = document.getElementById("result");
    // print the message and the conversion result to the p element
    resultPrint!.innerHTML = "The converted decimal number is " + result.toString();
}