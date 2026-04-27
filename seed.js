require('dotenv').config();
const mongoose = require('mongoose');
const Problem = require('./backend/models/Problem');
const Course = require('./backend/models/Course');

mongoose.connect(process.env.MONGODB_URI)
.then(async () => {
    console.log('DB Connected for seeding');
    
    await Problem.deleteMany({});
    await Course.deleteMany({});

    const courses = [
        { 
            title: 'C++ Masterclass', 
            description: 'Learn C++ from scratch.', 
            category: 'C++',
            notes: [
                "# **C++ Basics**",
                "C++ is a compiled, high-performance language often used in systems programming and game engines.",
                "## **Hello World Structure**",
                "```cpp\n#include <iostream>\n\nint main() {\n  std::cout << \"Hello World\\n\";\n  return 0;\n}\n```",
                "Every C++ program starts at the `main()` function. The `#include` pulls in the standard input/output stream library so we can print text."
            ]
        },
        { 
            title: 'Java & OOP', 
            description: 'Master Object-Oriented programming in Java.', 
            category: 'Java',
            notes: [
                "# **Java Object Oriented Programming**",
                "Java is a class-based, object-oriented language that runs on the Java Virtual Machine (JVM).",
                "## **Classes and Objects**",
                "A class is a blueprint for objects. Everything relies on encapsulation, inheritance, and polymorphism.",
                "```java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello World\");\n  }\n}\n```"
            ] 
        },
        { 
            title: 'Python 101', 
            description: 'Start your programming journey with Python.', 
            category: 'Python',
            notes: [
                "# **Python Basics**",
                "Python is an interpreted, high-level, general-purpose programming language.",
                "## **Indentation rules**",
                "Python uses whitespace (indentation) to define block structure rather than curly braces.",
                "```python\ndef solve():\n  print(\"Hello World\")\n\nsolve()\n```"
            ]
        },
        { 
            title: 'Web Development Bootcamp', 
            description: 'From DOM to full-stack scaling apps with JS, Node, and React.', 
            category: 'Web Dev',
            notes: [
                "# **Modern Web Development**",
                "The web is built on three pillars: HTML, CSS, and Javascript. To run JS outside the browser, we use Node.js.",
                "## **The Document Object Model (DOM)**",
                "The DOM connects web pages to scripts or programming languages. Using `document.getElementById()`, we can dynamically manipulate the DOM with Javascript."
            ]
        }
    ];

    const problems = [
        { title: 'Two Sum', description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nExample:\nInput: nums = [2,7,11,15], target = 9\nOutput: [0,1]', difficulty: 'Easy', category: 'Arrays', hints: ['Use a hash map to store previously seen numbers.'] },
        { title: 'Reverse Linked List', description: 'Reverse a singly linked list.\n\nExample:\nInput: head = [1,2,3,4,5]\nOutput: [5,4,3,2,1]', difficulty: 'Easy', category: 'Linked Lists', hints: ['Keep track of previous, current, and next nodes.'] },
        { title: 'Binary Tree Inorder Traversal', description: 'Given the root of a binary tree, return the inorder traversal of its nodes values.', difficulty: 'Medium', category: 'Trees', hints: ['Use recursion or a stack.'] },
        { title: 'Longest Common Subsequence', description: 'Given two strings text1 and text2, return the length of their longest common subsequence.', difficulty: 'Medium', category: 'DP', hints: ['Build a 2D DP array.'] },
        { title: 'Number of Islands', description: 'Given an m x n 2D binary grid which represents a map of 1s (land) and 0s (water), return the number of islands.', difficulty: 'Medium', category: 'Graphs', hints: ['Use BFS or DFS to traverse connected lands.'] },
        { title: 'Alien Dictionary', description: 'There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you. You are given a list of strings words from the alien languages dictionary, where the strings in words are sorted lexicographically by the rules of this new language. Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new languages rules.', difficulty: 'Hard', category: 'Graphs', hints: ['Topological sort.'] }
    ];

    await Course.insertMany(courses);
    await Problem.insertMany(problems);

    console.log('DB Seeded!');
    process.exit();
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
