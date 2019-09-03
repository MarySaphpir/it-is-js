const usersData = [
    {id: 1, name: "Freddie", surname: "Mercury", age: 1946},
    {id: 2, name: "Elton", surname: "John", age: 1947},
    {id: 3, name: "Lewis", surname: "Capaldi", age: 1996},
    {id: 4, name: "John", surname: "Lennon", age: 1940},
    {id: 5, name: "David", surname: "Bowie", age: 1947},
    {id: 6, name: "Idris", surname: "Elba", age: 1972},
    {id: 7, name: "Bob", surname: "Marley", age: 1965},
];

const submitButton = document.querySelector(".submit-btn");
submitButton.addEventListener("click", searchUser);
const numberLettersName = 3;
const numberLetterSurname = 4;

function checkLetter(string) {
    let regex = new RegExp("^[a-zA-Z]+$");  
    return regex.test(string)
}

function searchUser(event) {
    event.preventDefault();
    const name = document.querySelector(".name");
    const surname = document.querySelector(".surname");
    let resultField = document.querySelector(".output-text");
    if(!checkLetter(name.value) && !checkLetter(surname.value)) {
        resultField.innerText = "You must use latin characters";
        resetInput(name, surname);
        return;
    }
   const arrayNames = checkName(name.value, usersData);
   const arraySurnames = checkSurname(surname.value, usersData);
   const findedUser = findEqualData(arrayNames, arraySurnames);
   findedUser.length ? createOutput(findedUser[0]) 
                     : resultField.innerText = "Sorry, don't found any person :(";
   resetInput(name, surname);
}

function checkName(name, users) {
    const findedUsers = [];
    const arrayFromName = name.toLowerCase().split("");
    let count = 0;
    for (let i = 0; i < users.length; i++) {
        count = 0;
        for (let j = 0; j < arrayFromName.length; j++) {
            if (users[i].name.toLowerCase().includes(arrayFromName[j])) {
                count++;
            }
            if (count === numberLettersName) {
                findedUsers.push(users[i]);  
            }  
        } 
    }    

    return findedUsers;
}

function checkSurname(surname, users) {
    const findedUsers = [];
    const arrayFromSurname = surname.toLowerCase().split("");
    let count = 0;
    for (let i = 0; i < users.length; i++) {
        count = 0;
        for (let j = 0; j < arrayFromSurname.length; j++) {
            if (users[i].surname.toLowerCase().includes(arrayFromSurname[j])) {
                count++;
            }
            if (count === numberLetterSurname) {
                findedUsers.push(users[i]);  
            }  
        } 
    }    

    return findedUsers;
}

function findEqualData(array, data) {
    return array.filter(elem => data.find(el => elem.name === el.name && elem.surname === el.surname));
}

function createOutput({name, surname, age}) {
    const output = document.querySelector(".output-text");
    const markup =`<p>Name: ${name}, Surname: ${surname}, Was born: ${age}</p>`;
    output.innerHTML = markup;
}

function resetInput() {
    [...arguments].forEach(elem => elem.value = "")
}
