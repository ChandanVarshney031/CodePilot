// Static fallback problems data for CodePilot
const PROBLEMS_DATA = [
  {
    "_id": "prob_1",
    "title": "Two Sum",
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "difficulty": "Easy",
    "category": "Arrays",
    "hints": [
      "Use a Hash Map"
    ]
  },
  {
    "_id": "prob_2",
    "title": "Reverse String",
    "description": "Write a function that reverses a string. The input string is given as an array of characters.",
    "difficulty": "Easy",
    "category": "Strings",
    "hints": [
      "Two pointers"
    ]
  },
  {
    "_id": "prob_3",
    "title": "Palindrome Number",
    "description": "Given an integer x, return true if x is a palindrome, and false otherwise.",
    "difficulty": "Easy",
    "category": "Math",
    "hints": [
      "Convert to string or reverse half of the number"
    ]
  },
  {
    "_id": "prob_4",
    "title": "Valid Parentheses",
    "description": "Given a string containing just the characters (, ), {, }, [ and ], determine if the input string is valid.",
    "difficulty": "Easy",
    "category": "Stacks",
    "hints": [
      "Use a stack"
    ]
  },
  {
    "_id": "prob_5",
    "title": "Merge Two Sorted Lists",
    "description": "Merge two sorted linked lists and return it as a new sorted list.",
    "difficulty": "Easy",
    "category": "Linked Lists",
    "hints": [
      "Dummy node and two pointers"
    ]
  },
  {
    "_id": "prob_6",
    "title": "Maximum Subarray",
    "description": "Find the contiguous subarray which has the largest sum and return its sum.",
    "difficulty": "Easy",
    "category": "DP",
    "hints": [
      "Kadane Algorithm"
    ]
  },
  {
    "_id": "prob_7",
    "title": "Climbing Stairs",
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    "difficulty": "Easy",
    "category": "DP",
    "hints": [
      "Fibonacci sequence mapping"
    ]
  },
  {
    "_id": "prob_8",
    "title": "Symmetric Tree",
    "description": "Given the root of a binary tree, check whether it is a mirror of itself.",
    "difficulty": "Easy",
    "category": "Trees",
    "hints": [
      "Recursive approach checking left and right symmetric matching"
    ]
  },
  {
    "_id": "prob_9",
    "title": "Missing Number",
    "description": "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
    "difficulty": "Easy",
    "category": "Math",
    "hints": [
      "Use Gauss formula (n * (n+1) / 2)"
    ]
  },
  {
    "_id": "prob_10",
    "title": "Contains Duplicate",
    "description": "Given an integer array nums, return true if any value appears at least twice in the array.",
    "difficulty": "Easy",
    "category": "Arrays",
    "hints": [
      "Use a Hash Set or sort the array"
    ]
  },
  {
    "_id": "prob_11",
    "title": "LRU Cache",
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    "difficulty": "Medium",
    "category": "Design",
    "hints": [
      "Hash Map + Doubly Linked List"
    ]
  },
  {
    "_id": "prob_12",
    "title": "Number of Islands",
    "description": "Given an m x n 2D binary grid which represents a map of 1s (land) and 0s (water), return the number of islands.",
    "difficulty": "Medium",
    "category": "Graphs",
    "hints": [
      "DFS or BFS traversal starting from 1s"
    ]
  },
  {
    "_id": "prob_13",
    "title": "Longest Substring Without Repeating",
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "difficulty": "Medium",
    "category": "Strings",
    "hints": [
      "Sliding Window technique"
    ]
  },
  {
    "_id": "prob_14",
    "title": "3Sum",
    "description": "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that they sum to 0.",
    "difficulty": "Medium",
    "category": "Arrays",
    "hints": [
      "Sort first, then use Two Pointers"
    ]
  },
  {
    "_id": "prob_15",
    "title": "Word Break",
    "description": "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of dictionary words.",
    "difficulty": "Medium",
    "category": "DP",
    "hints": [
      "DP array of booleans checking prefix validation"
    ]
  },
  {
    "_id": "prob_16",
    "title": "Course Schedule",
    "description": "There are a total of numCourses courses you have to take. You are given prerequisites. Return true if you can finish all courses.",
    "difficulty": "Medium",
    "category": "Graphs",
    "hints": [
      "Topological Sort (Kahn's Algorithm)"
    ]
  },
  {
    "_id": "prob_17",
    "title": "Coin Change",
    "description": "You are given an integer array coins and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount.",
    "difficulty": "Medium",
    "category": "DP",
    "hints": [
      "Bottom-up DP calculating min coins per amount up to target"
    ]
  },
  {
    "_id": "prob_18",
    "title": "Product of Array Except Self",
    "description": "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
    "difficulty": "Medium",
    "category": "Arrays",
    "hints": [
      "Calculate prefix and suffix products arrays"
    ]
  },
  {
    "_id": "prob_19",
    "title": "Validate Binary Search Tree",
    "description": "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
    "difficulty": "Medium",
    "category": "Trees",
    "hints": [
      "Inorder traversal or passing min/max boundaries limits"
    ]
  },
  {
    "_id": "prob_20",
    "title": "Rotting Oranges",
    "description": "You are given an m x n grid where each cell can have one of three values: 0 (empty), 1 (fresh orange), 2 (rotten orange). Return minimum minutes until no cell has a fresh orange.",
    "difficulty": "Medium",
    "category": "Graphs",
    "hints": [
      "Multi-source BFS"
    ]
  },
  {
    "_id": "prob_21",
    "title": "N-Queens",
    "description": "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.",
    "difficulty": "Hard",
    "category": "Backtracking",
    "hints": [
      "Keep track of used columns, positive diagonals, and negative diagonals using HashSets"
    ]
  },
  {
    "_id": "prob_22",
    "title": "Trapping Rain Water",
    "description": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    "difficulty": "Hard",
    "category": "Arrays",
    "hints": [
      "Two pointers from outside going inwards, tracking max left and max right walls"
    ]
  },
  {
    "_id": "prob_23",
    "title": "Median of Two Sorted Arrays",
    "description": "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    "difficulty": "Hard",
    "category": "Binary Search",
    "hints": [
      "Binary Search on the partition index of the smaller array"
    ]
  },
  {
    "_id": "prob_24",
    "title": "Merge k Sorted Lists",
    "description": "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    "difficulty": "Hard",
    "category": "Linked Lists",
    "hints": [
      "Use a Minimum Priority Queue (Heap)"
    ]
  },
  {
    "_id": "prob_25",
    "title": "Alien Dictionary",
    "description": "There is a new alien language that uses the English alphabet. Given a list of words sorted lexicographically, return a string of the unique letters sorted.",
    "difficulty": "Hard",
    "category": "Graphs",
    "hints": [
      "Topological Sort to find dependency ordering"
    ]
  },
  {
    "_id": "prob_26",
    "title": "Word Ladder",
    "description": "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words. Return the number of words in the shortest transformation sequence.",
    "difficulty": "Hard",
    "category": "Graphs",
    "hints": [
      "BFS on characters changing one by one"
    ]
  },
  {
    "_id": "prob_27",
    "title": "Edit Distance",
    "description": "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.",
    "difficulty": "Hard",
    "category": "DP",
    "hints": [
      "2D DP table matching characters recursively"
    ]
  },
  {
    "_id": "prob_28",
    "title": "Largest Rectangle in Histogram",
    "description": "Given an array of integers heights representing the histograms bar height where the width of each bar is 1, return the area of the largest rectangle.",
    "difficulty": "Hard",
    "category": "Stacks",
    "hints": [
      "Use a Monotonic Increasing Stack to track left and right boundaries"
    ]
  },
  {
    "_id": "prob_29",
    "title": "Regex Matching",
    "description": "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where '.' Matches any single character and '*' Matches zero or more of the preceding element.",
    "difficulty": "Hard",
    "category": "DP",
    "hints": [
      "2D Dynamic Programming matrix checking match state transitions"
    ]
  },
  {
    "_id": "prob_30",
    "title": "Serialize and Deserialize Binary Tree",
    "description": "Design an algorithm to serialize and deserialize a binary tree.",
    "difficulty": "Hard",
    "category": "Trees",
    "hints": [
      "Preorder BFS or DFS storing nulls strategically"
    ]
  }
];

if (typeof window !== 'undefined') {
    window.PROBLEMS_DATA = PROBLEMS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PROBLEMS_DATA;
}
