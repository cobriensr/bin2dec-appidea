# Binary to Decimal Converter

This application takes an 8 digit binary number and converts to a decimal number with a maximum value of 255.

To convert the binary number to decimal, the calculation uses each binary number's digit position.

## Using Positions

To convert the binary number to decimal using positions follow the steps below:

1: Raise each number to the power of it's position starting with the first digit on the left. Binary numbers are raised to each position's power with a base of 2.

Example: 111 = (1*(2^2))+(1*(2^1))+(1*(2^0))

The position of the binary number's digit is 0-indexed, which means it starts at 0 and not 1.

2: After raising each number to the power of it's position, multiply the results together for each digit.

Example: 111 = (1*(2^2))+(1*(2^1))+(1*(2^0)) -> (1*(4))+(1*(2))+(1*(1)) ->(4)+(2)+(1)

3: Add the results and you will get the decimal equivalent of the given binary number.

Example: 111 = 4 + 2 + 1 = 7

## Getting Started

To run this application locally, you can clone this repository and then run the following commands:

1. npm install
2. npm run dev

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.
