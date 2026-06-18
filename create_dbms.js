require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('./backend/models/Course');

mongoose.connect(process.env.MONGODB_URI)
.then(async () => {
    console.log('DB Connected for creating DBMS Course');

    const dbmsNotes = [
        `## **Introduction to DBMS**

### **What is a DBMS?**
A Database Management System (DBMS) is software designed to store, retrieve, and manage data in databases. It acts as an interface between the database and its users or programs.

### **Key Characteristics**
- **Data Redundancy:** Minimizes duplication of data.
- **Data Integrity:** Ensures data remains accurate and consistent.
- **Data Security:** Controls who can access or modify data.

### **ACID Properties**
To ensure reliable transactions, a DBMS follows ACID properties:
1. **Atomicity:** All or nothing. A transaction either completes fully or not at all.
2. **Consistency:** Database transitions from one valid state to another.
3. **Isolation:** Transactions occur independently without interference.
4. **Durability:** Once committed, data remains saved even during power failure.

\`\`\`sql
-- Example of a transaction
BEGIN TRANSACTION;
UPDATE Accounts SET Balance = Balance - 100 WHERE ID = 1;
UPDATE Accounts SET Balance = Balance + 100 WHERE ID = 2;
COMMIT;
\`\`\`
`,
        `## **SQL & Relational Databases**

### **What is SQL?**
Structured Query Language (SQL) is the standard language for dealing with Relational Databases (RDBMS).

### **Basic SQL Queries**
\`\`\`sql
-- Selecting data
SELECT name, email FROM users WHERE age > 18;

-- Inserting data
INSERT INTO courses (title, category) VALUES ('DBMS', 'Database');

-- Updating data
UPDATE users SET status = 'active' WHERE id = 101;

-- Deleting data
DELETE FROM logs WHERE created_at < '2023-01-01';
\`\`\`

### **JOINs in SQL**
JOINs are used to combine rows from two or more tables based on a related column.
- **INNER JOIN:** Returns records that have matching values in both tables.
- **LEFT JOIN:** Returns all records from the left table, and matched records from the right.
- **RIGHT JOIN:** Returns all records from the right table, and matched records from the left.

\`\`\`sql
SELECT orders.id, customers.name
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;
\`\`\`
`,
        `## **NoSQL & Modern Databases**

### **What is NoSQL?**
NoSQL (Not Only SQL) databases are non-relational, distributed, and designed for large-scale data storage. They are flexible and don't require a fixed schema.

### **Types of NoSQL**
1. **Document-oriented:** Stores data in JSON-like documents (e.g., MongoDB).
2. **Key-Value pairs:** Stores data as key-value pairs (e.g., Redis).
3. **Column-family:** Stores data in columns instead of rows (e.g., Cassandra).
4. **Graph-based:** Focuses on relationships between data points (e.g., Neo4j).

### **MongoDB Example**
MongoDB uses collections and documents instead of tables and rows.
\`\`\`javascript
// Inserting a document in MongoDB
db.users.insertOne({
    name: "Chandan",
    role: "Developer",
    skills: ["JS", "Node", "MongoDB"]
});

// Finding a document
db.users.find({ role: "Developer" });
\`\`\`

### **Normalization vs Denormalization**
- **Normalization:** Reducing redundancy by dividing large tables into smaller ones (ideal for SQL).
- **Denormalization:** Combining data into single documents to speed up reads (ideal for NoSQL).
`
        ,`## **Normalization & Schema Design**

### **What is Normalization?**
Normalization is the database design technique used to organize tables in a manner that reduces redundancy and dependency of data. It divides larger tables into smaller tables and links them using relationships.

### **Normal Forms (NF)**
- **First Normal Form (1NF):** Each column must contain atomic (indivisible) values, and there must be no repeating groups.
- **Second Normal Form (2NF):** Must be in 1NF, and all non-key attributes must fully depend on the primary key (no partial dependency).
- **Third Normal Form (3NF):** Must be in 2NF, and no transitive dependency exists (non-prime attributes should not depend on other non-prime attributes).
- **Boyce-Codd Normal Form (BCNF):** A stronger version of 3NF. For any functional dependency $A \\rightarrow B$, $A$ must be a super key.

\`\`\`sql
-- Example of 3NF conversion:
-- Before (Transitive Dependency: Dept_Name depends on Dept_ID, which depends on Emp_ID)
-- Employees(Emp_ID, Emp_Name, Dept_ID, Dept_Name)

-- After (Splitting into two tables to reach 3NF)
CREATE TABLE Departments (
    Dept_ID INT PRIMARY KEY,
    Dept_Name VARCHAR(50)
);

CREATE TABLE Employees (
    Emp_ID INT PRIMARY KEY,
    Emp_Name VARCHAR(50),
    Dept_ID INT,
    FOREIGN KEY (Dept_ID) REFERENCES Departments(Dept_ID)
);
\`\`\`
`
        ,`## **Indexing & Query Optimization**

### **What is an Index?**
An index is a schema object containing entry points to data rows in a table. It is used to speed up the retrieval of rows by using pointers, similar to the index of a book.

### **Clustered vs Non-Clustered Indexes**
- **Clustered Index:** Defines the physical order in which data is stored in the table. There can be only one clustered index per table (typically the Primary Key).
- **Non-Clustered Index:** Creates a separate structure from the data rows. It contains the index key and a row locator pointing to the physical data. Multiple non-clustered indexes are allowed.

### **Query Execution Analysis**
Database engines provide tools like \`EXPLAIN\` to show how queries are planned and executed, allowing you to identify bottlenecks (like Full Table Scans).

\`\`\`sql
-- Creating an index on a frequently searched column
CREATE INDEX idx_users_email ON users(email);

-- Analyzing query execution plan
EXPLAIN SELECT * FROM users WHERE email = 'chandan@example.com';
\`\`\`
`
        ,`## **Concurrency & Lock Management**

### **Concurrency Problems**
When multiple transactions execute simultaneously, several anomalies can occur:
1. **Dirty Read:** A transaction reads data written by another concurrent uncommitted transaction.
2. **Non-Repeatable Read:** A transaction reads the same row twice but gets different data because another committed transaction modified it.
3. **Phantom Read:** A transaction runs a query returning a set of rows, but upon re-running, finds new rows inserted by another committed transaction.

### **Transaction Isolation Levels**
SQL standards define four levels of transaction isolation to control concurrency:
- **Read Uncommitted:** No isolation; allows dirty reads.
- **Read Committed:** Prevents dirty reads.
- **Repeatable Read:** Prevents dirty and non-repeatable reads.
- **Serializable:** Complete isolation (slowest but safest); prevents all anomalies.

### **Locking Mechanisms**
- **Shared Lock (S):** Allows concurrent reads but prevents writes.
- **Exclusive Lock (X):** Prevents both concurrent reads and writes.
- **Deadlock:** Occurs when two transactions are waiting for locks held by each other, causing a standstill.

\`\`\`sql
-- Set isolation level for a transaction
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN TRANSACTION;
-- Safe operations here
COMMIT;
\`\`\`
`
    ];

    const dbmsCourse = {
        title: 'DBMS Mastery',
        description: 'Master the fundamentals of Database Management Systems, SQL, and NoSQL databases.',
        category: 'Database',
        notes: dbmsNotes
    };

    // Check if it already exists to avoid duplicates
    const existing = await Course.findOne({ title: 'DBMS Mastery' });
    if (existing) {
        await Course.updateOne({ _id: existing._id }, { $set: dbmsCourse });
        console.log('DBMS Course updated!');
    } else {
        await Course.create(dbmsCourse);
        console.log('DBMS Course created successfully!');
    }

    process.exit();
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
