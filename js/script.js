fetch('https://patszy.github.io/quiz-game/questions.json')
.then(response => response.json())
.then(data => {
    console.log(data);
    setUp(data);
})
.catch(error => console.error(error));

function setUp(data) {
    let questionAmount = 0;
    const headerInput = document.querySelector(`.header__input`);
    const mainQuestion = document.querySelector(`.main__question`);

    headerInput.max = data.length-1;

    headerInput.addEventListener(`input`, (event)=> {
        questionAmount = event.target.value;
        if(questionAmount > parseInt(headerInput.max)) {
            questionAmount = headerInput.max
            event.target.value = questionAmount;
        }

        mainQuestion.innerHTML = Object.entries(data[drawNumber(questionAmount)])[0][0];
    })
}

function drawNumber(number) {
    let rand = Math.floor(Math.random()+1*number);
    return rand;
}