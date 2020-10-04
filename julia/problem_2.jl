N = 4e6

x = 1
y = 2
sum = 0

while (x < N)
    global x = y
    global y = x + y
    if (x % 2 == 0)
        global sum += x
    end
end

println("Sum of Fibonacci Even Numbers: ", sum)