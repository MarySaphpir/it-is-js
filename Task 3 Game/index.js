const data = [
    { name : "колобок", src: "kolobok.jpg" },
    { name : "красная шапочка", src: "red-hat.jpg" },
    { name : "рапунцель", src: "rapuncel.jpg" },
    { name : "шрек", src: "shreck.jpg" },
    { name : "смешарики", src: "smeshariki.jpg" }
]

const dataCartoon = [... data];

const startBtn = document.querySelector(".startBtn");
const table = document.querySelector(".tablearea");
const form = document.querySelector(".form");
startBtn.addEventListener("click", initGame);
table.addEventListener('click', showCell);
form.addEventListener("click", checkInput);

let countClick = 7;
let currentName = "";
const numberCells = 4;
const numberRows = 4;

const cellSets = {
    width: "98",
    height: "98",
    opacity: "0.05"
}

function initGame(event) {
    event.preventDefault();
    resetGame();
    createTable();
    createInputForm();

    const imgBlock = document.querySelector(".img-block");
    table.addEventListener('click', showCell);
    imgBlock.style.background = `url(source/${dataCartoon[0].src})`;
    imgBlock.style.backgroundSize = "cover";
    document.querySelector(".startBtn").disabled = true;
    currentName = `${dataCartoon[0].name}`;
}

function createInputForm() {
    const markup = `<input type="text" class="input" placeholder="Ваш ответ..."/>
                    <button type="submit" class="submitBtn button">Отправить</button>`;
    form.innerHTML = markup;
}

function createTable() {
    const tablearea = document.querySelector('.tablearea');
    const table = document.createElement('table');
    
    for (let i = 0; i < numberRows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < numberCells; j++) {
            let td = document.createElement('td');
            tr.append(td);
        }
        table.appendChild(tr);
        tablearea.appendChild(table);
        const td = document.querySelectorAll("td");
        td.forEach((elem) => {
            elem.width = cellSets.width;
            elem.height = cellSets.height;
            })
    }
}

function showCell(event) {
    event.preventDefault();
    let output = document.querySelector(".message");
    if(event.target.nodeName === "TD" && countClick > 0) {
        event.target.style.opacity = cellSets.opacity;
        countClick--;
        output.innerText = `У вас осталось ${countClick} попытки`                  
    } else {
        output.innerText = "Ваши попытки закончились. Напишите ваш ответ";
        event.stopPropagation();
    } 
}

function checkInput(event) {
    event.preventDefault();
    if (event.target.nodeName !== "BUTTON") return;
    const result = document.querySelector(".input");
    let output = document.querySelector(".message");
    currentName.includes(result.value) ? output.innerText = `Вы угадали`
                                      : output.innerText = `Вы не угадали`;
    dataCartoon.shift();
    const td = document.querySelectorAll("td");
    [...td].forEach(elem => elem.style.background = "none");
    document.querySelector(".startBtn").disabled = false;
    input.value = "";
}

function resetGame() {
    countClick = 7;
    document.querySelector(".form").innerHTML = "";
    document.querySelector('.tablearea').innerHTML = "";
    document.querySelector(".img-block").style.background = "";
    document.querySelector(".message").innerText = "";
}
