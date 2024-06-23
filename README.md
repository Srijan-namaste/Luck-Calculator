# Luck-Calculator
It is a number-guessing game made on JAVA Script. It directs you whether the number you are guessing is above or below the hidden number. Number of attempts you take to guess the number is counted. The lesser the number of attempts more your LUCK SCORE is.  The best way is to GUESS & get your real luck score, otherwise, use the Mathematical way (binary search).

To determine the maximum number of guesses needed to find a number between 1 and 100 in a number-guessing game, you can use a strategy known as binary search. Binary search is an efficient way to find an item in a sorted list by repeatedly dividing the search interval in half.

Here’s how it works:

1. Start with the interval from 1 to 100.
2. In each step, guess the midpoint of the current interval.
3. Adjust the interval to be the lower or upper half Based on whether the guess is too high or too low.
4. Repeat this process until the number is found.
The maximum number of guesses needed can be determined by calculating how many times you can halve the interval until you are left with a single number. This is given by the base-2 logarithm of the number of possible choices, rounded up to the nearest whole number.

Mathematically, it is represented as:
⌈log2 n⌉ where n=100 i.e log2 n approx. 6.64 approx. 7.
Thus, the maximum number of guesses needed to guarantee finding the number in a guessing game between 1 and 100 is 7.
