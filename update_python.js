require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('./backend/models/Course');

mongoose.connect(process.env.MONGODB_URI)
.then(async () => {
    console.log('DB Connected for updating Python');

    const pythonNotes = [
        "# **Python 101: Complete Notes**\n\nWelcome to the complete Python guide. Python is famous for its elegant, highly readable syntax and rapid development speed.",
        "## **1. Variables & Data Types**\nPython variables do not need explicit type declarations. The type is inferred automatically at runtime.\n```python\n# Variables and basic types\nname = \"Alice\"       # String\nage = 25             # Integer\nprice = 19.99        # Float\nis_active = True     # Boolean\n\n# Dynamic typing in action\nx = 10\nx = \"Now I am a string\"\n\nprint(f\"{name} is {age} years old.\")\n```",
        "## **2. Control Flow (If-Else)**\nPython uses indentation (whitespace) to determine block scopes instead of curly braces `{}`.\n```python\nscore = 85\n\nif score >= 90:\n    print(\"A Grade\")\nelif score >= 80:\n    print(\"B Grade\")\nelse:\n    print(\"C Grade\")\n```",
        "## **3. Loops (For, While)**\nLoops are simple and intuitive. You often use `range()` to loop a specific number of times.\n```python\n# For loop using range(start, stop, step)\nfor i in range(3):\n    print(i, end=\" \")  # Output: 0 1 2\n\nprint(\"\") # newline\n\n# While loop\ncount = 0\nwhile count < 3:\n    print(count, end=\" \") # Output: 0 1 2\n    count += 1\n```",
        "## **4. Lists (Dynamic Arrays)**\nLists in Python are dynamic, order-preserved, and can hold mixed variable types in contiguous sequence.\n```python\n# Initialization\nfruits = [\"apple\", \"banana\", \"cherry\"]\n\n# Insertions & Deletions\nfruits.append(\"orange\")       # O(1) mostly. Adds to the end\nfruits.insert(1, \"mango\")     # O(N). Inserts at index 1\nlast = fruits.pop()           # O(1) Removes and returns last element\n\n# Traversing and Indexing\nprint(f\"First fruit: {fruits[0]}\")\n\nfor index, fruit in enumerate(fruits):\n    print(f\"{index}: {fruit}\")\n\n# Built-in algorithms\nfruits.sort()                 # sorts alphabetically directly\nfruits.reverse()              # reverses the list in place\n```",
        "## **5. Dictionaries (Hash Maps)**\nDictionaries (`dict`) store items in key-value pairs using extremely fast Hash Tables. Keys must be unique.\n```python\nages = {\n    \"Alice\": 28,\n    \"Bob\": 34\n}\n\n# Insertion & Updates\nages[\"Charlie\"] = 40\n\n# Accessing (safely using .get() to avoid KeyErrors)\nprint(ages.get(\"Alice\", \"Not Found\")) # 28\n\n# Traversing a dictionary effectively\nfor key, value in ages.items():\n    print(f\"{key} is {value}\")\n\n# Deletion\ndel ages[\"Alice\"]\n```",
        "## **6. Sets**\nSets are unordered collections with no duplicate elements. Great for constant-time complexity `O(1)` membership checks.\n```python\n# Creating a set\nunique_nums = {10, 20, 30}\n\nunique_nums.add(20) # Ignored, 20 is already in the set\n\n# Searching (Membership check natively using `in`)\nif 10 in unique_nums:\n    print(\"10 is present!\")\n\n# Exploring math set operations\nset_a = {1, 2, 3}\nset_b = {3, 4, 5}\n\nprint(set_a.union(set_b))        # {1, 2, 3, 4, 5}\nprint(set_a.intersection(set_b)) # {3}\n```",
        "## **7. Tuples**\nTuples are identical to lists, but they are **immutable** (they cannot be changed, resized, or modified after creation).\n```python\n# Tuples natively use parentheses\ncoordinates = (45.0, -90.0)\n\n# Destructuring (Unpacking)\nlat, lon = coordinates\nprint(f\"Latitude: {lat}\")\n\n# coordinates[0] = 50.0  => Error! Tuple object does not support item assignment\n```",
        "## **8. Functions and Classes (Custom Objects)**\nPython uses `def` for functions and `class` to spin up Object-Oriented layouts like classes.\n```python\n# Function definition with type-hints (Optional)\ndef greet(name: str = \"World\") -> str:\n    return f\"Hello, {name}!\"\n\n# Custom Class Structure (OOP)\nclass Node:\n    # The __init__ function acts as the Object Constructor\n    def __init__(self, data):\n        self.data = data\n        self.next = None\n\n# Creating Objects\nhead = Node(10)\nhead.next = Node(20)\n\nprint(f\"Head data: {head.data}\")\n```"
    ];

    await Course.updateOne(
        { title: 'Python 101' },
        { $set: { notes: pythonNotes } }
    );

    console.log('Python Notes Updated in DB!');
    process.exit();
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
