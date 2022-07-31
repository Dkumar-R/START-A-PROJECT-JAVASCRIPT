console.log("tu37..")

const students = [
    { name: "chutye", subject: "Javascript" },
    { name: "chutye2", subject: "Javascript2" },
   
]

function enollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("student has been errolled")
        callback()
    }, 3000);
}

function getStudents(){
    setTimeout(function() {
      let str = "";
      students.forEach(function(student){
        str += `<li> ${student.name}</li>
        <li> ${student.subject}</li>`
      });
      document.getElementById('student').innerHTML = str;
      console.log("student has been fected")
    }, 1000);
    
}

let newStudent =  { name: "chutye3", subject: "Javascript3" }
 enollStudent(newStudent,getStudents);
//  getStudents();

    