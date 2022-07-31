console.log("tu35..");

let fetchBtn = document.getElementById('Fecthbtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log("you click")
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', false)



    xhr.onload = function () {
        if (this.status === 200) {

            console.log(this.responseText)
        } else {
            console.error("some error occured")
        }
    }
    xhr.send();
    console.log("success");
}

let Backupbtn = document.getElementById('Backupbtn');
Backupbtn.addEventListener('click', PopBtnClick)

function PopBtnClick() {
    console.log("you click")
    const xhr = new XMLHttpRequest();

    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', false)
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/', false)
    // xhr.open('GET', 'Furit.json', false)





    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText)
            console.log(obj);
            let list = document.getElementById('list1');
            str = "";
            for (key in obj) {
                str += `<tr>
                        <td>${obj[key].name}</td>
                    <td>${obj[key].email}</td>
                    <td>${obj[key].phone}</td>
                    <td>${obj[key].address.city}</td>
                    </tr>`
                // str += `<tr>
                // <td>${obj[key].name}</td>
                // <td>${obj[key].price}</td>
                //     </tr>`

            }
            list.innerHTML = str;
        } else {
            console.error("some error occured")
        }
    }
    xhr.send();
    console.log("success 2");

}