# Problem 1
def sumOfMultiplesOf3Or5(n):
	sum1 = 0

	for i in range(n):
		if i % 3 == 0 or i % 5 == 0:
			sum1 += i
	return sum1

if __name__ == "__main__":
	sum1 = sumOfMultiplesOf3Or5(1000)
	print("The Sum of Multiples of 3 or 5 below 1000 is {}".format(sum1))


