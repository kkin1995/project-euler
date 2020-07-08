# Problem 2
def sumOfFibonacciEven(n):
	x,y = 1,2
	sum = 0
	while x < n:
		x,y = y,x+y
		if x % 2 == 0:
			sum += x

	return sum

if __name__ == "__main__":
	sum1 = sumOfFibonacciEven(4e6)
	print("The sum of the Fibonacci numbers not exceeding 4 Million {}".format(sum1))