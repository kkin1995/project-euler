function largestPalindromeProduct()
    firstElement = Int64[]
    secondElement = Int64[]
    palindromeProducts = Int64[]
    largestPalindrome = 0
    for i in 100:1000
        for j in 100:1000
            product = i * j
            if (string(product) == reverse(string(product)))
                if (product > largestPalindrome) # Checking if current Palindrome Product is larger than largest known one 
                    largestPalindrome = product
                    push!(firstElement, i)
                    push!(secondElement, j)
                    push!(palindromeProducts, largestPalindrome)
                end
            end
        end
    end
    return firstElement, secondElement, palindromeProducts
end

firstElement, secondElement, palindromeProducts = largestPalindromeProduct()

println("The largest palindrome product made from $(firstElement[end]) and $(secondElement[end]) is $(palindromeProducts[end])")