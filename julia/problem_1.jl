N = 1000
sum = 0

for i in 0:(N-1)
	if (i % 3 == 0) || (i % 5 == 0)
		global sum += i
	end
end

println("Sum of multiples of 3 and 5 under 1000 is: ", sum)

