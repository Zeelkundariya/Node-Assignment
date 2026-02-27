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
Render : https://node-assignment-1jav.onrender.com
Postman : https://documenter.getpostman.com/view/50840741/2sBXcEmgS1









# Project title
E-Commerce Product Management REST API

# Objective
The objective of this project is to build a RESTful API using Express.js that manages product data for an e-commerce platform using an in-memory JSON array.

# Implemented Routes
 GET /products -> Get all products         
 GET /products/:id -> Get product by ID        
 GET /products/category/:categoryName -> Get products by category 
 POST /products -> add a new product 
 PUT /products/:id -> Replace entire product 
 PUT /products/:id/stock -> Update only stock     
 PUT /products/:id/price -> Update only price      

# Sample URLs
 GET/products
 http://localhost:3001/products

GET /products/:id
http://localhost:3001/products/5

GET /products/category/:categoryName
http://localhost:3001/products/category/Footwear

POST /products
http://localhost:3001/products

PUT /products/:id
http://localhost:3001/products/4

PUT /products/:id/stock
http://localhost:3001/products/2/stock

PUT /products/:id/price
http://localhost:3001/products/3/price

# Steps to Run Locally
npm install
npm start

# Deployed link
Render : https://node-assignment-3-1hpo.onrender.com
Postman : https://documenter.getpostman.com/view/50840741/2sBXcGEzuD



# Project title
 State Statistics Management API

# Objective
The objective of the State Statistics Management API project is to design and implement a fully functional RESTful API using Express.js that manages statistical data of Indian states using an in-memory data structure.

# Implemented Routes
GET /states -> Get all states

GET /states/:id -> Get state by ID

GET /states/highest-gdp -> Get state with highest GDP

POST /states -> Add new state

PUT /states/:id -> Replace full state

PUT /states/:id/budget -> Update budget

PUT /states/:id/population -> Update population

PATCH /states/:id/literacy -> Update literacy

PATCH /states/:id/gdp -> Update GDP

PATCH /states/:id -> Update any field

DELETE /states/:id -> Delete by ID

DELETE /states/name/:stateName -> Delete by name

DELETE /states/low-literacy/:percentage -> Delete low literacy states

# Sample URLs
GET /states
http://localhost:3000/states

GET /states/:id
http://localhost:3000/states/7

GET /states/highest-gdp
http://localhost:3000/states/highest

POST /states
http://localhost:3000/states

PUT /states/:id
http://localhost:3000/states/4

PUT /states/:id/budget
http://localhost:3000/states/

PUT /states/:id/population
http://localhost:3000/states/5

PATCH /states/:id/literacy
http://localhost:3000/states/8

PATCH /states/:id/gdp
http://localhost:3000/states/7

PATCH /states/:id
http://localhost:3000/states/6

DELETE /states/:id
http://localhost:3000/states/:id

DELETE /states/name/:stateName
http://localhost:3000/states/name/:state

DELETE /states/low-literacy/:percentage
http://localhost:3000/states/low-literacy/:percentage



# Steps to Run Locally
npm install
npm start


# Deployed link
Render : 
Postman : 

