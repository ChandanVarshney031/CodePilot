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
