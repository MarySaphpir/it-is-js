const backgroundsImg = [
    {url: '/image/184faa67454b6db49b37a2437b5f0907.jpg', answer: 'Thor'},
    {url: '/image/ce435839ff12e2cee90e956c15f9804a.jpg', answer: 'Hulk'},
    {url: '/image/ffd15883f24b8533bf17e209dcad3b9c.jpg', answer: 'Captain America'},
    {url: '/image/iron-man-mark-lxxxv-deluxe_marvel_gallery_5cd0b07a7799d-600x600.jpg', answer: 'Iron man'},
    {url: '/image/thanos-deluxe_marvel_gallery_5cf97a1bc452e-600x600.jpg', answer: 'Thanos'},
];

const scoresConfig = {
    '0': 5,
    '1': 5,
    '2': 5,
    '3': 4,
    '4': 3,
    '5': 2,
    '6': 2,
    '7': 1
  };

const store = {
    backgroundsImg,
    user: {
      countClick: 0,
      currentBackgroundIndex: 0,
      score: 0,
    },
    global: {
        scoresConfig,
      }
};

  function changeBackground(node, url) {
    node.style.backgroundImage = url;
}

const divContainerImage = document.createElement('div');
divContainerImage.className = 'container-image';
document.body.appendChild(divContainerImage);
const h1 = document.createElement('h1');
const h1Text = document.createTextNode('Guess every Marvel hero!');
h1.appendChild(h1Text);
divContainerImage.appendChild(h1);

const table = (function createTable() {
    const table = document.createElement('table');
    table.className = 'color-overlay';
    for (let i = 0; i < 5; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 5; j++) {
            const td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    divContainerImage.appendChild(table);
    return table;
})();

const form = document.createElement('form');
const inputAnswer = document.createElement('input');
inputAnswer.setAttribute('type', 'text');
inputAnswer.setAttribute('placeholder', 'Enter your answer here!');
form.appendChild(inputAnswer);
document.body.appendChild(form);
const btn = document.createElement('button');
btn.setAttribute('type', 'submit');
const btnText = document.createTextNode('Send answer');
btn.appendChild(btnText);
form.appendChild(btn);

changeBackground(divContainerImage, `url(${store.backgroundsImg[store.user.currentBackgroundIndex].url})`);

const answerUser = document.querySelector('input');
const btnSendAnswer = document.querySelector('button');
const containerImage = document.querySelector('.container-image');
const colorOverlay = document.querySelector('.color-overlay');

function showImage(event) {
    event.preventDefault();
    if(event.target.nodeName === 'TD' && store.user.countClick < 7) {
        event.target.style.opacity = 0;
        store.user.countClick++;
    }
}

const h2 = document.createElement('h2');
const h2Header = document.querySelector('h2');
let totalScore = 0;

function makeAnswer() {
    document.body.insertBefore(h2, divContainerImage);
    store.user.score = store.global.scoresConfig[store.user.countClick];
    h2.innerText = `Score ${store.user.score}`;
    totalScore += store.user.score;
    console.log(totalScore);
}

function isSameString(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

function nextImage() {
    document.body.removeChild(h2);
    h2.innerText = '';
    store.user.currentBackgroundIndex++;
    changeBackground(divContainerImage, `url(${backgroundsImg[store.user.currentBackgroundIndex].url}`);
    answerUser.value = '';
    [...table.getElementsByTagName('td')].forEach(node => node.style.opacity = '.99');
    store.user.countClick = 0;
}

function checkAnswer(event) {
    event.preventDefault();
    if (isSameString(answerUser.value, backgroundsImg[store.user.currentBackgroundIndex].answer) && backgroundsImg[store.user.currentBackgroundIndex + 1]) {
        makeAnswer();
        setTimeout(nextImage, 3000);
    } else if (answerUser.value === '' || answerUser.value === ' ') {
        document.body.insertBefore(h2, divContainerImage);
        h2.innerText = 'Please enter your answer correct';
    } else {
        document.body.insertBefore(h2, divContainerImage);
        h2.innerText = `Your final score ${totalScore} out of a possible 25!`;
    }
}

containerImage.addEventListener('click', showImage);
btnSendAnswer.addEventListener('click', checkAnswer);