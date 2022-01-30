import { get } from 'svelte/store';
import { bindigit } from '../stores/content';

// This challenge requires that the developer implementing it follow these constraints:
// Arrays may not be used to contain the binary digits entered by the user
// Determining the decimal equivalent of a particular binary digit in the sequence must be calculated using a single mathematical function
// The decimal number is equal to the sum of all the binary numbers with each digit being raised to the power of its index (base 2) before being summed
// example: 1111 = 1*(2^3) + 1*(2^2) + 1*(2^1) + 1*(2^0) = 8 + 4 + 2 + 1 = 15

export default function binConvert(event: Event): void {
    event.preventDefault()
    const bindigitValue: string = get(bindigit)
    const result: number = binStringToNumber(bindigitValue)
    const selection = document.getElementById('result') as HTMLInputElement
    selection.value = result.toString()
}

function binStringToNumber(value: string): number {
    let result: number = 0
    for (let i: number = value.length - 1; i >= 0; i--) {
        const parsedNum: number = Number(value.charAt(i))
        const base: number = Math.pow(2, i)
        result += parsedNum * base
    }
    return result
}