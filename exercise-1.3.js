// "Declare a function that takes three numbers as arguments and returns the sum of the squares of the two larger numbers."

// To complete this function, we first must determine the smallest number using a series of conditionals. Then we take the sum 
// of the squares of the two largest numbers.

function sum_of_square_of_larger_two(a, b, c) {
    const a_squared = a * a;
    const b_squared = b * b;
    const c_squared = c * c;

    return (a >= b && b >= c) || (b >= a && a >= c)
	       ? (a_squared) + (b_squared)
	       : (a >= c && c >= b) || (c >= a && a >= b)
	       ? (a_squared) + (c_squared)
	       : (b_squared) + (c_squared)
}

