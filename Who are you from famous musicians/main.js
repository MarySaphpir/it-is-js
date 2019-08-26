const arrayOfRockStars = [
    {name: 'Elvis', surname: 'Presley', age: 1935},
    {name: 'Mick', surname: 'Jagger', age: 1943},
    {name: 'John', surname: 'Lennon', age: 1940},
    {name: 'Steven', surname: 'Tyler', age: 1948},
    {name: 'Freddie', surname: 'Mercury', age: 1946},
    {name: 'Serj', surname: 'Tankian', age},
    {name: 'Corey', surname: 'Taylor', age},
    {name: 'Till', surname: 'Lindemann', age},
    {name: 'Adam', surname: 'Gontier', age},
    {name: 'Gary', surname: 'Moore', age},
];

let show = document.querySelector('.show');
let userName = document.querySelector('input[name=name]');
let userSurname = document.querySelector('input[name=surname]');
let userAge = document.querySelector('input[name=age]');
let btnSubmit = document.querySelector('button[name=submit]');
btnSubmit.addEventListener('click', valid);

function checkString(str) {
    let regex = new RegExp("^[a-zA-Z]+$");
    return regex.test(str); 
}

function checkNumber(num) {
    let regex = new RegExp("^[0-9]+$");
    return regex.test(num);
} 

function valid(event) {
    event.preventDefault();
    let fail = false;
    let userNameValue = userName.value;
    let userSurnameValue = userSurname.value;
    let userAgeValue = userAge.value;
    if (userNameValue == '' || userNameValue == ' ' || checkString(userNameValue) === false) {
        fail = 'You didn`t enter your name correct!';
        alert(fail);
    }
    if (userSurnameValue == '' || userSurnameValue == ' ' || checkString(userSurnameValue) === false) {
        fail = 'You didn`t enter your surname correct!';
        alert(fail);
    }
    if (userAgeValue == '' || userAgeValue == ' ' || checkNumber(userAgeValue) === false) {
        fail = 'You didn`t enter your date of birth correct!';
        alert(fail);
    }

    let usersNamesArray = checkUserName(userNameValue, arrayOfRockStars);
    let usersSurnamesArray = checkUserSurname(userSurnameValue, arrayOfRockStars);
    let findRockStar = findSameNames(usersNamesArray, usersSurnamesArray);
    if (findRockStar.length !== 0) {
        showRockStar(findRockStar);
    } else {
        let nothingToShow = document.createElement('p');
        nothingToShow.innerHTML = 'Unfortunately you don`t have any coincidence with the ROCK STARS!';
        show.append(nothingToShow);
    }
}

function showRockStar(rockStars) {
    rockStars.forEach(({name, surname})=> {
        let divForShow = document.createElement('div');
        let rockName = document.createElement("p");
        rockName.innerHTML = name;
        let rockSurnamea = document.createElement("p");
        rockSurnamea.innerHTML = surname;
        divForShow.append(name, surname);
        show.append(divForShow);
    });
}

function checkUserName(user, rockStars) {
    let arrayOfUser = [];
    let arrayOfWords = user.toLowerCase().split("");

    for (let i = 0; i < rockStars.length; i++) {
        let counter = 1;
        for (let j = 0; j < arrayOfWords.length; j++) {
            if (counter === 3) {
                arrayOfUser.push(rockStars[i]);
                break;
            }
            if (rockStars[i].name.includes(arrayOfWords[j])) {
                counter ++;
            }
        }
    }

    return arrayOfUser;
}

function checkUserSurname(user, rockStars) {
    let arrayOfUser = [];
    let arrayOfWords = user.toLowerCase().split('');

    for (let i = 0; i < rockStars.length; i++) {
        let counter = 1;
        for (let j = 0; j < arrayOfWords.length; j++) {
            if (counter === 3) {
                arrayOfUser.push(rockStars[i]);
                break;
            }
            if (rockStars[i].surname.includes(arrayOfWords[j])) {
                counter ++;
            }
        }
    }

    return arrayOfUser;
}

function findSameNames(arrayOfNames, arrayOfsurnames) {
    return arrayOfNames.filter(element => arrayOfsurnames.find(elem => element.name === elem.name && element.surname === elem.surname));
}