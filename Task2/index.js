const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", createTable);
const numberCells = 3;
const cellSize = {
    width: "60",
    height: "60"
};

function createTable(event) {
    event.preventDefault();
    const number = document.querySelector('.input-number');
    const color = document.querySelector('.input-color');
    const tablearea = document.querySelector('.tablearea');
    const table = document.createElement('table');

    for (let i = 0; i < number.value; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < numberCells; j++) {
            const td = document.createElement('td');
            tr.append(td);
        }
        table.appendChild(tr);
        table.setAttribute("border", "1");
    }
    tablearea.appendChild(table);
    const td = document.querySelectorAll("td");
    drawCells(number.value, color.value, [...td]);
}

function drawCells(inputNumber, inputColor, cells) {
    cells.forEach((cell, index) => {
        cell.width = cellSize.width;
        cell.height = cellSize.height;
        if (inputNumber % 2 === 0) {
            if((index) % 3 === 0) {
                cell.style.background = inputColor;
             }
        } else {
            if((index) % 2 === 0) {
                cell.style.background = inputColor;
            }
        }
    })
}
