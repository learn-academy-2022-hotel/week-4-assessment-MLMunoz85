# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: OOP or object-oriented programming is when everything in the programming language is an instance of a class. This is different from functional programming which uses builds programs through the use of functions.

Researched answer: OOP or object-oriented programming is when everything in the programming language is an instance of a class. Object-oriented programming groups related functions and their variables into objects. In an object, functions are referred to as methods and variables are referred to as properties. This is different from functional programming which builds programs through the use of functions. Functional programming avoids changing-state and mutable data, it uses immutable data, for example once you have declared a variable you can't redefine it. OOP uses mutable data, which lets you freely change states and data.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: A float is a partial number while an interger is a whole number in Ruby. For example an interger is a whole number like 5, 12, 3, 100. A float is a partial number like 5.5, 12.3, 3.8, 100.4

Researched answer: An integer (more commonly called an int) is a number without a decimal point. For example an interger is a whole number like 5, 12, 3, 100. A float is a floating-point number, which means it is a number that has a decimal place, such as 5.5, 12.3, 3.8, 100.4. Floats are used when more precision is needed.

3. Ruby has an implicit return. What does that mean?

Your answer: This means that when a return would normally be used to execute code, you don't need to use return in Ruby because it is implied.

Researched answer: This means that if a return is the last expression in a path of execution, there's no need for the return keyword. For example:
def is_even num
    if num.even? == true
        "#{num} is even"
    else
        "#{num} is odd"
    end
end
Normally you would need a return on line 28 and 30 for the code to be executed. But because Ruby has an implicit return, it is not needed.

4. What is a block in Ruby?

Your answer: A block is an anonymous function that is enclosed in a do/end statement.

Researched answer: A block looks similar to a method in Ruby. Methods consist of a name, but with blocks we don’t need to write a name, and always pass to a method call.
Blocks are a handy and powerful feature in Ruby, and we can use them anywhere. They are anonymous pieces of code that accept input from arguments and return a value. Blocks are enclosed in do-end statements and pipes || are used to define an argument in a block.

5. How do you extract a value in a Ruby hash?

Your answer: In Ruby, the values in a hash can be accessed using bracket notation. After the hash name, type the key in square brackets in order to access the value.

Researched answer: In Ruby, the values in a hash can be accessed using bracket notation. After the hash name, type the key in square brackets in order to access the value. For example, let's say we have a hash called pets:
pets = {
  "dog" => "Keanu",
  "breed" => "Shiba Inu",
  "age_in_years" => 1,
}
If I want to extract the value for the breed key I would do the following:
p pets["breed"]
If I wanted to extract all the values I could do:
p pets.values

## Looking Ahead: Terms for Next Week

1. Class Inheritance: Ruby is the ideal object-oriented language. In an object-oriented programming language, inheritance is one of the most important features. Inheritance allows the programmer to inherit the characteristics of one class into another class. Ruby supports only single class inheritance. Inheritance provides the concept of “reusability”, i.e. If a programmer wants to create a new class and there is a class that already includes some of the code that the programmer wants, then he or she can derive a new class from the existing class. By doing this, it increases the reuse of the fields and methods of the existing class without creating extra code.

2. RSpec: RSpec is a domain-specific language testing tool written in Ruby to test Ruby code. It is a behavior-driven development framework, used for the most part in Rails applications. The "R" stands for Ruby, and "Spec" is short for Specification.

3. CRUD: CRUD (Create, Read, Update, Delete) is an acronym for ways one can operate on stored data. It is a mnemonic for the four basic functions of persistent storage. The C stands for create, R stands for read, U stands for update, and the D stands for delete.

4. Test-driven development: Test-driven development (TDD), also called test-driven design, is a method of implementing software programming that interlaces unit testing, programming and refactoring on source code. Before any new code is written, the programmer must first create a failing unit test. Then, the programmer -- or pair, or mob -- creates just enough code to satisfy that requirement. Once the test is passing, the programmer may refactor the design, making improvements without changing the behavior.

5. HTTP: HTTP stands for hyper text transfer protocol. HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser.
