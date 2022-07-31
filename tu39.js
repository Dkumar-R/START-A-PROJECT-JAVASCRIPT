console.log("tu39...")

// function func1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const error = true;
//             if (!error) {
//                 console.log("you promise has been resolved")
//                 resolve();
//             } else {
//                 console.log("you promise has not been resolved")
//                 reject("Sorry not fulfilled");
//             }
//         }, 2000)

//     })
// }

// func1().then(function(){
//     console.log("You: thanks")
// }).catch(function(error){
//     console.log("You: very bad " + error)
// })

//

const students = [
    { name: "chutye", subject: "Javascript" },
    { name: "chutye2", subject: "Javascript2" },

]

function enollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log("student has been errolled")
            // callback()
            let error = false;
            if (!error) {
                resolve();
            } else {
                reject("Sorry not fulfilled");
            }
        }, 3000);
    });
};

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>
        <li> ${student.subject}</li>`
        });
        document.getElementById('student').innerHTML = str;
        console.log("student has been fected")
    }, 1000);

};

let newStudent = { name: "chutye3", subject: "Javascript3" }
enollStudent(newStudent).then(function () {
    getStudents();
}).catch(function (error) {
    console.log("Some error occured " + error)
});