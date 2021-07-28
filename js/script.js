fetch('https://patszy.github.io/quiz-game/questions.json')
.then(response => response.json())
.then(data => {console.log(data)})
.catch(error => console.error(error))