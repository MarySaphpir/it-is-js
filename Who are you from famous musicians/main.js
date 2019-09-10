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

const show = document.querySelector('.show');
const userName = document.querySelector('input[name=name]');
const userSurname = document.querySelector('input[name=surname]');
const userAge = document.querySelector('input[name=age]');
const btnSubmit = document.querySelector('button[name=submit]');
btnSubmit.addEventListener('click', valid);

function checkString(str) {
    const regex = new RegExp("^[a-zA-Z]+$");
    return regex.test(str); 
}

function checkNumber(num) {
    const regex = new RegExp("^[0-9]+$");
    return regex.test(num);
} 

function valid(event) {
    event.preventDefault();
    let fail = false;
    const userNameValue = userName.value;
    const userSurnameValue = userSurname.value;
    const userAgeValue = userAge.value;
    if (!userNameValue.length || !checkString(userNameValue)) {
        fail = 'You didn`t enter your name correct!';
        alert(fail);
    }
    if (!userSurnameValue.length || !checkString(userSurnameValue)) {
        fail = 'You didn`t enter your surname correct!';
        alert(fail);
    }
    if (!userAgeValue.length || !checkNumber(userAgeValue)) {
        fail = 'You didn`t enter your date of birth correct!';
        alert(fail);
    }

    const usersNamesArray = checkUserName(userNameValue, arrayOfRockStars);
    const usersSurnamesArray = checkUserSurname(userSurnameValue, arrayOfRockStars);
    const findRockStar = findSameNames(usersNamesArray, usersSurnamesArray);
    if (findRockStar.length !== 0) {
        showRockStar(findRockStar);
    } else {
        const nothingToShow = document.createElement('p');
        nothingToShow.innerHTML = 'Unfortunately you don`t have any coincidence with the ROCK STARS!';
        show.append(nothingToShow);
    }
}

function showRockStar(rockStars) {
    rockStars.forEach(({name, surname})=> {
        const divForShow = document.createElement('div');
        const rockName = document.createElement("p");
        rockName.innerHTML = name;
        const rockSurnamea = document.createElement("p");
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
            counter === 3 ? arrayOfUser.push(rockStars[i]) :
            rockStars[i].name.includes(arrayOfWords[j]) ? counter ++ : counter;
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
            counter === 3 ? arrayOfUser.push(rockStars[i]) :
            rockStars[i].surname.includes(arrayOfWords[j]) ? counter ++ : counter;
        }
    }

    return arrayOfUser;
}

function findSameNames(arrayOfNames, arrayOfsurnames) {
    return arrayOfNames.filter(element => arrayOfsurnames.find(elem => element.name === elem.name && element.surname === elem.surname));
}