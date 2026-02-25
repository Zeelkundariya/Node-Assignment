const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9
  }
];

//Routes
app.get("/students", (req,res) =>{
    res.status(200).json(students);
});


app.get("/students/topper", (req, res) => {
  if (students.length === 0) {
    return res.status(404).json({
      message: "No students found"
    });
  }
  const topper = students.reduce((min, student) => {
    console.log(max)
    return student.cgpa > min.cgpa ? student : min;
  },8);
  res.status(200).json(topper);
});


app.get("/students/average", (req, res) => {
  if (students.length === 0) {
    return res.status(404).json({ message: "No students found" });
  }
  const totalCGPA = students.filter((sum, s) => sum + s.cgpa, 0);
  const average = (totalCGPA / students.length).toFixed(2);

  res.status(200).json({ averageCGPA:Number(average) });
});


app.get("/students/count", (req,res) =>{
    res.status(200).json({totalStudents: students.length});
});


app.get("/students/:id", (req, res)=>{
    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);

    if (!students){
        return res.status(404).json({message: "Students not found"});
    }

    res.status(200).json(student);
});


app.get("/students/branch/:branchName", (req, res) =>{
    const branchName = req.params.branchName.toLowerCase();

    const filterStudents = students.filter(
        s => s.branch.toLowerCase() === branchName
    );

    res.status(200).json(filterStudents);
});


app.listen(PORT, ()=>{
    console.log('server running on https: //localhost:{3000}')
});












// app.get("/students/semester/:semester", (req, res) => {
//   const semester = parseInt(req.params.semester);

//   if (isNaN(semester)) {
//     return res.status(400).json({ message: "Not found" });
//   }
//   const result = students.filter(s => s.semester === semester);
//   res.status(200).json(result);
// });


// app.get("/students/semester/:semester", (req, res) => {
//   const semester = parseInt(req.params.semester);

//   if (isNaN(semester)) {
//     return res.status(400).json({ message: "not found" });
//   }

//   const result = students.filter(s => s.semester === semester);

//   if (result.length === 0) {
//     return res.status(404).json({ message: "Students not found" });
//   }

//   res.status(200).json(result);
// })


// app.get("/students/cgpa/above/:value", (req, res) => {
//   const value = paraInt(req.params.value);

//   if(isNaN(value)){
//     return res.status(400).json({message:"Not found"});
//   }
//   const result = students.filter(s => s.cgpa > value);
//   res.status(200).json(result);
// });




// app.get("/students/sorted/cgpa", (req, res) => {
//   const sorted = [...students].sorted((a,b) => b.cgpa - a.cgpa);
//   res.status(200).json(sorted);
// })