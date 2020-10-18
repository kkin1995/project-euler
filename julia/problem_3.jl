# Problem 3

function primeFactors(n)
    p = 2
    factors = Int64[]
    while (n > p^2)
        if (n % p == 0)
            push!(factors, p)
            n = n / p
        else
            p += 1
        end
    end
    push!(factors, n)
    return factors

end

factors = primeFactors(600851475143)
println("Prime Factors of 600851475143 are $factors")