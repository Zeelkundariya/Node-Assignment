# Project title
Student CGPA API

# Objective
Build a REST API using Express.js to manage student CGPA records stored in an in-memory JSON array.

# Implemented Routes
 GET /students -> Get all students 
 GET /students/topper -> Get highest CGPA student 
 GET /students/average -> Get average CGPA 
 GET /students/count -> Get total students 
 GET /students/:id -> Get student by ID 
 GET /students/branch/:branchName -> Get students by branch 

# Sample URLs
/students
http://localhost:3000/students

/students/topper
http://localhost:3000/students/topper

/students/average
http://localhost:3000/students/average

/students/count
http://localhost:3000/students/count

/students/5
http://localhost:3000/students/:id

/students/branch/CSE
http://localhost:3000/students/branch/CSE

# Steps to Run Locally
npm install
npm start

# Deployed link