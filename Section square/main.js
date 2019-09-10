let wrapperTable = document.querySelector('.wrapper-table');
let divTable = document.querySelector('.table');
let userNumber = document.querySelector('.input-number');
let userColor = document.querySelector('.input-color');
let btnShow = document.querySelector('button[name=submit]');
btnShow.addEventListener('click', showTable, false);

function showTable(event) {
    event.preventDefault();
    let trueNumber = checkNumber(userNumber.value);
    if(trueNumber) {
        if(numberOfTablesDivided() === 1) {
            alert('You have entered a number greater than 3! It is not possible for this program! This counts as 1!');
            checkAndPainting(userColor.value);
        }
        if (numberOfTablesDivided() === 3) {
            console.log(numberOfTablesDivided());
            checkAndPaintingForOdd(userColor.value);
        }
        if (numberOfTablesDivided() === 6) {
            console.log(numberOfTablesDivided());
            checkAndPaintingForEven(userColor.value);
        }
        if (numberOfTablesDivided() === 9) {
            console.log(numberOfTablesDivided());
            checkAndPaintingForOddForNine(userColor.value);
        }
    }
}

function checkNumber(number) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(number);
}

function colorWriteLatin (str) {
    return /[a-z]/i.test(str);
}

function numberOfTablesDivided() {
    let num = userNumber.value;
    if(checkNumber && num <= 3) {
        return (num * 3);
    } else {
        return (num - num) + 1;
    }
}

function checkAndPainting(color) {
    if(colorWriteLatin(color) && (userNumber.value != 0)) {
        divTable.style.background = color;
        divTable.style.display = 'table';
    }
}

function checkAndPaintingForOdd(color) {
    if(colorWriteLatin(color) && (userNumber.value != 0)) {
        divTable.style.display = 'table';
        let firstRow = document.querySelector('.first-row');
        let thirdtRow = document.querySelector('.third-row');
        firstRow.style.background = color;
        thirdtRow.style.background = color;
    }
}

function checkAndPaintingForEven(color) {
    if(colorWriteLatin(color) && (userNumber.value != 0)) {
        divTable.style.display = 'table';
        let tableRow1 = document.querySelector('.one');
        let tableRow3 = document.querySelector('.three');
        let tableRow5 = document.querySelector('.five');
        let tableRow7 = document.querySelector('.seven');
        let tableRow9 = document.querySelector('.nine');
        tableRow1.style.background = color;
        tableRow3.style.background = color;
        tableRow5.style.background = color;
        tableRow7.style.background = color;
        tableRow9.style.background = color;
    }
}

function checkAndPaintingForOddForNine(color) {
    if(colorWriteLatin(color) && (userNumber.value != 0)) {
        divTable.style.display = 'table';
        let tableRow3 = document.querySelector('.three');
        let tableRow4 = document.querySelector('.four');
        let tableRow7 = document.querySelector('.seven');
        let tableRow8 = document.querySelector('.eight');
        tableRow3.style.background = color;
        tableRow4.style.background = color;
        tableRow7.style.background = color;
        tableRow8.style.background = color;
    }
}
