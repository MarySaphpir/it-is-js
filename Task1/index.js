
let usersData = [
    {id: 1, name: "Freddie", surname: "Mercury", age: 1946},
    {id: 2, name: "Elton", surname: "John", age: 1947},
    {id: 3, name: "Lewis", surname: "Capaldi", age: 1996},
    {id: 4, name: "John", surname: "Lennon", age: 1940},
    {id: 5, name: "David", surname: "Bowie", age: 1947},
    {id: 6, name: "Idris", surname: "Elba", age: 1972},
    {id: 7, name: "Bob", surname: "Marley", age: 1965},
];

const submitButton = document.querySelector("button");
submitButton.addEventListener("click", searchUser);


function checkLetter(str) {
    let regex = new RegExp("^[a-zA-Z]+$");  
    return regex.test(str)
}

function searchUser(event) {
    event.preventDefault();
    const name = document.querySelector("input[name=name]");
    const surname = document.querySelector("input[name=surname]");
    let resultField = document.querySelector(".output");
    if(!checkLetter(name.value) && !checkLetter(surname.value)) {
        resultField.innerText = "You must use latin characters";
        resetInput(name, surname);
        return;
    }
   const arrayNames = checkName(name.value, usersData);
   const arraySurnames = checkSurname(surname.value, usersData);
   const findedUser = findEqualData(arrayNames, arraySurnames);
   findedUser.length !== 0 ? createOutput(findedUser) : 
   resultField.innerText = "Don't found any person";
   resetInput(name, surname);
}

function checkName(string, data) {
    let users = [];
    let array = string.toLowerCase().split("");
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        count = 0;
        for (let j = 0; j < array.length; j++) {
            if (data[i].name.toLowerCase().includes(array[j])) {
                count ++;
            }
            if (count === 3) {
                users.push(data[i]);  
            }  
        } 
    }    

    return users;
}

function checkSurname(string, data) {
    let users = [];
    let array = string.toLowerCase().split("");
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        count = 0;
        for (let j = 0; j < array.length; j++) {
            if (data[i].surname.toLowerCase().includes(array[j])) {
                count ++;
            }
            if (count === 4) {
                users.push(data[i]);  
            }  
        } 
    }    

    return users;
}

function findEqualData(array, data) {
    return array.filter(elem => data.find(el => elem.name === el.name && elem.surname === el.surname));
}

function createOutput(array) {
    const output = document.querySelector(".output");
    const markup = array.reduce(
    (string, { name, surname, age }) => string + `<li>${name} ${surname} ${age}</li>`, "");
    output.innerHTML = markup;
}

function resetInput() {
    [...arguments].forEach(elem => elem.value = "")
}