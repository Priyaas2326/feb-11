/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
   const students = studentArray.map(student => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
   studentArray.forEach(student => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function addData() {
  //Write your code here, just console.log
    const newStudent = {id:4, name:"susan", age:"20", marks:45};
  studentArray.push(newStudent);
  console.log(newStudent);
}

function removeFailedStudent() {
  //Write your code here, just console.log
   const filteredArray = studentArray.filter(student => student.marks >= 50);
  console.log(filteredArray);
}

function concatenateArray() {
  //Write your code here, just console.log
    const secondArray = [
    {id:4, name:"lisa", age:"20", marks:70},
    {id:5, name:"mike", age:"19", marks:65},
    {id:6, name:"jane", age:"18", marks:55}
  ];
  const combinedArray = studentArray.concat(secondArray);
  console.log(combinedArray);
}
