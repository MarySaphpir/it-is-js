let data = [
    { name : "колобок", src: "kolobok.jpg" },
    { name : "красная шапочка", src: "red-hat.jpg" },
    { name : "рапунцель", src: "rapuncel.jpg" },
    { name : "шрек", src: "shreck.jpg" },
    { name : "смешарики", src: "smeshariki.jpg" }
]

let dataCartoon = [... data];

const startBtn = document.querySelector(".startBtn");
const table = document.querySelector(".tablearea");
const form = document.querySelector(".form");
startBtn.addEventListener("click", initGame);
table.addEventListener('click', showCell);
form.addEventListener("click", checkInput);
let countClick = 7;
let currentName = "";

function initGame(event) {
    event.preventDefault();
    countClick = 7;
    resetGame();
    createTable();
    createInputForm();
    const table = document.querySelector(".tablearea");
    table.addEventListener('click', showCell);
    const imgBlock = document.querySelector(".img-block");
    imgBlock.style.background = `url(source/${dataCartoon[0].src})`;
    imgBlock.style.backgroundSize = "cover";
    document.querySelector(".startBtn").disabled = true;
    currentName = `${dataCartoon[0].name}`;
}

function createInputForm() {

    const div = document.querySelector(".form");
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.classList.add("input");
    input.setAttribute("placeholder", "Enter there your answer...");
    const button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.classList.add("submitBtn");
    button.classList.add("button");
    button.innerText = "Send";
    div.append(input, button);
}

function createTable() {

    const tablearea = document.querySelector('.tablearea');
    const table = document.createElement('table');
    for (let i = 0; i < 4; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 4; j++) {
            let td = document.createElement('td');
            tr.append(td);
        }
        table.appendChild(tr);
        tablearea.appendChild(table);

        let td = document.querySelectorAll("td");
        td.forEach((elem, index) => {
            elem.width = "98";
            elem.height = "98";
            })
    }
}

function showCell(event) {
    event.preventDefault();
    let output = document.querySelector(".message");
    if(event.target.nodeName === "TD" && countClick > 0) {
        event.target.style.opacity = "0.05";
        countClick--;
        output.innerText = `You have ${countClick} attempts`;
    }else {
        output.innerText = "Your attempts are finished. You have to guess the name of cartoon";
        event.stopPropagation();
    } 
}

function checkInput(event) {
    event.preventDefault();
    if (event.target.nodeName !== "BUTTON") return;
    let input = document.querySelector(".input");
    let output = document.querySelector(".message");
    currentName.includes(input.value) ? output.innerText = `You guessed it`
                                      : output.innerText = `You did not guess`;
    dataCartoon.shift();
    let td = document.querySelectorAll("td");
    [...td].forEach(elem => elem.style.background = "none");
    document.querySelector(".startBtn").disabled = false;
    input.value = " ";
}

function resetGame(){
    document.querySelector(".form").innerHTML = "";
    document.querySelector('.tablearea').innerHTML = "";
    document.querySelector(".img-block").style.background = "";
    document.querySelector(".message").innerText = "";
}
