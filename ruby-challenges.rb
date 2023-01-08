# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# Pseudocode
# input: number
# output: sentence that says whether the number is even or odd
# process: I will create a method called is_even that checks to see if a number is even or odd. I will utilize the .even? method to check if a number is even. If it is true, it returns a sentence that says the number is true. If not, it returns a sentence that says the number is odd.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def is_even num
    if num.even? == true
        "#{num} is even"
    else
        "#{num} is odd"
    end
end

p is_even(num1)
# output: "7 is odd"
p is_even(num2)
# output: "42 is even"
p is_even(num3)
# output: "221 is odd"



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# Pseudocode
# input: a string
# output: the string with all of the vowels removed.
# process: I will create a method called verb_remove that takes in a string and removes all of the vowels using the .delete method.

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def verb_remove string
    string.delete "AaEeIiOoUu"
end

p verb_remove(beatles_album1)
# output: "Rbbr Sl"
p verb_remove(beatles_album2)
# output: "Sgt Pppr"
p verb_remove(beatles_album3)
# output: "bby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# Pseudocode
# input: word
# output: a sentence that says whether the string is a palindrome or not
# process: I will create a method called is_palindrome that takes in a word and checks to see if it is a palindrome. I need to make sure that I .downcase the word to make sure that I account for words being capitalized.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def is_palindrome word
    if word.downcase == word.reverse.downcase
        "#{word} is a palindrome"
    else
        "#{word} is not a palindrome"
    end
end

p is_palindrome(palindrome_tester1)
# output: "Racecar is a palindrome"
p is_palindrome(palindrome_tester2)
# output: "LEARN is not a palindrome"
p is_palindrome(palindrome_tester3)
# output: "Rotator is a palindrome"

