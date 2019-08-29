let submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", createTable);


function createTable(event) {
    event.preventDefault();

    const number = document.querySelector('input[name=number]');
    const color = document.querySelector('input[name=color]');
    const tablearea = document.querySelector('.tablearea');
    const table = document.createElement('table');
    for (let i = 0; i < number.value; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            let td = document.createElement('td');
            tr.append(td);
        }
        table.appendChild(tr);
        table.setAttribute("border", "1");
    }
    tablearea.appendChild(table);
    const td = document.querySelectorAll("td");
    drawCells(number.value, color.value, [...td]);
}

function drawCells(number, color, array) {
    if (number % 2 === 0) {
        array.forEach((elem, index) => {
            elem.width = "60";
            elem.height = "60";
            if((index) % 3 === 0) {
                elem.style.background = color;
            }
        })
    }else {
        array.forEach((elem, index) => {
            elem.width = "60";
            elem.height = "60";
            if((index) % 2 === 0) {
                elem.style.background = color;
            }
        })
    }
}
