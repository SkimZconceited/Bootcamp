/*
var studentId;
var studentName;
async function fetchStudents() {
    const url = server + '/students';
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }
    const response = await fetch(url, options);
    const students = await response.json();
    populateContent(students);
}

async function addStudent() {
    const url = server + '/students';
    const student = { id: studentId, name: studentName };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    }
    console.log(student)
    const response = await fetch(url, options);
}
*/


/*
function populateContent(students) {
    var table = document.getElementById('content');
    table.innerHTML = "<tr><th>Student Id</th><th>Full Name</th></tr>";
    students.forEach(student => {
        var row = document.createElement('tr');
        var dataId = document.createElement('td');
        var textId = document.createTextNode(student.id);
        dataId.appendChild(textId);
        var dataName = document.createElement('td');
        var textName = document.createTextNode(student.name);
        dataName.appendChild(textName);
        row.appendChild(dataId);
        row.appendChild(dataName);
        table.appendChild(row);
    });
}
*/


/*
document.querySelector('form').addEventListener('submit', (e) => {
    for (var i = 1; i <= 7; i++) {
        if (radio[i].checked) {
            radio[i] = r[i].value;
        } else {
            radio[i] = null;
        }
        submit();
        e.preventDefault
    }
});
*/
/*
document.querySelector('form').addEventListener('submit', (e) => {
    studentId = document.getElementById('studentId').value;
    studentName = document.getElementById('studentName').value;
    if (studentId && studentName) {
        studentId = parseInt(studentId);
        addStudent();
        fetchStudents();
    }
    e.preventDefault();

});

*/

/*
function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());
    value.topics = data.getAll("topics");

    const jsonData = JSON.stringify(value);
    console.log(jsonData);
    //fs.writeFile('students.json', jsonData);
    /*console.log({
        value
    });
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
*/
const server = 'http://localhost:3000';
var x = true;

var c1 = document.getElementById("ask1");
var c2 = document.getElementById("ask2");
var c3 = document.getElementById("ask3");
var c4 = document.getElementById("ask4");
var c5 = document.getElementById("ask5");
var c6 = document.getElementById("ask6");
var c7 = document.getElementById("ask7");

function func1() {
    if (x) {
        c1.disabled = true;
        c2.disabled = true;
        c3.disabled = true;
        c4.disabled = true;
        c5.disabled = true;
        c6.disabled = true;
        x = false;
        console.log(x)
    } else {
        c1.disabled = false;
        c2.disabled = false;
        c3.disabled = false;
        c4.disabled = false;
        c5.disabled = false;
        c6.disabled = false;
        x = true;
        console.log(x)
    }
}

function func2() {
    if ((c1.checked == true) ||
        (c2.checked == true) ||
        (c3.checked == true) ||
        (c4.checked == true) ||
        (c5.checked == true) ||
        (c6.checked == true)) {
        c7.disabled = true;
    }
    if ((c1.checked == false) &&
        (c2.checked == false) &&
        (c3.checked == false) &&
        (c4.checked == false) &&
        (c5.checked == false) &&
        (c6.checked == false)) {
        c7.disabled = false;
    }
}

async function submit() {
    const url = server + '/students';
    const student = { a: ask1, b: ask2, c: ask3, d: ask4, e: ask5, f: ask6, g: ask7 };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    }
    const response = await fetch(url, options);
}

document.querySelector('feedback_form').addEventListener('submit', (e) => {
    if (c1.checked) {
        ask1 = c1.value;
    } else {
        ask1 = null
    }
    if (c2.checked) {
        ask2 = c2.value;
    } else {
        ask2 = null
    }
    if (c3.checked) {
        ask3 = c3.value;
    } else {
        ask3 = null
    }
    if (c4.checked) {
        ask4 = c4.value;
    } else {
        ask4 = null
    }
    if (c5.checked) {
        ask5 = c5.value;
    } else {
        ask5 = null
    }
    if (c6.checked) {
        ask6 = c6.value;
    } else {
        ask6 = null
    }
    if (c7.checked) {
        ask7 = c7.value;
    } else {
        ask7 = null
    }
    submit();
    fetchCheck();
    e.preventDefault();
});