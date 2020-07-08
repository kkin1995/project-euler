# Problem 3
def primeFactors(n):
    p = 2
    while (n > p**2):
        if n % p == 0:
            print(p)
            n /= p
        else:
            p += 1
    
    print(n)

if __name__ == "__main__":
    print("The Prime Factors of 600851475143 are:")
    primeFactors(600851475143)