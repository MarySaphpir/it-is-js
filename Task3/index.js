let data = [
    { name : "колобок", src: "kolobok.jpg" },
    { name : "красная шапочка", src: "red-hat.jpg" },
    { name : "рапунцель", src: "rapuncel.jpg" },
    { name : "шрек", src: "shreck.jpg" },
    { name : "смешарики", src: "smeshariki.jpg" }
]

let dataCartoon = [... data];

const startBtn = document.querySelector(".start-button");
const table = document.querySelector("#tablearea");
const form = document.querySelector(".form");
startBtn.addEventListener("click", initGame);
table.addEventListener('click', showCell);
form.addEventListener("click", checkInput);
let countClick = 7;
let currentName = "";

function initGame(event) {
    event.preventDefault();
    resetGame();
    createTable();
    createInputForm();
    let imgBlock = document.querySelector(".img-block");
    imgBlock.style.background = `url(source/${dataCartoon[0].src})`;
    document.querySelector(".start-button").disabled = true;
    currentName = `${dataCartoon[0].name}`;
}

function createInputForm() {
    const div = document.querySelector(".form");
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.classList.add("form__input");
    const button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.classList.add("form__button");
    button.innerText = "Send";
    div.append(input, button);
}

function createTable() {

    const tablearea = document.getElementById('tablearea');
    const table = document.createElement('table');
    for (let i = 0; i < 4; i++) {
        let tr = document.createElement('tr');
    
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );

        table.appendChild(tr);
        tablearea.appendChild(table);

        let td = document.querySelectorAll("td");
        td.forEach(elem => {
            elem.width = "72";
            elem.height = "72";
            })
    }
}

function showCell(event) {
    event.preventDefault();
    event.target.style.opacity = "0.05";
    let output = document.querySelector(".message");
    if(countClick !== 1) {
    countClick--;
    output.innerText = `You have ${countClick} attempts`;
    }else {
        output.innerText = "Your attempts are finished. You have to guess the name of cartoon";
        table.removeEventListener("click", showCell);
    } 
}

function checkInput(event) {
    event.preventDefault();
    if (event.target.nodeName !== "BUTTON") return;
    let input = document.querySelector(".form__input");
    let output = document.querySelector(".message");
    if (currentName.includes(input.value)) {
        output.innerText = `You guessed it`;
        dataCartoon.shift();
        let td = document.querySelectorAll("td");
        [...td].forEach(elem => elem.style.background = "none");
        document.querySelector(".start-button").disabled = false;
    } else {
        output.innerText = `You did not guess`;
    }
    input.value = " ";
}

function resetGame(){
    document.querySelector(".form").innerHTML = "";
    document.getElementById('tablearea').innerHTML = "";
    document.querySelector(".img-block").style.background = "";
    document.querySelector(".message").innerText = "";
}