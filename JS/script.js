function processForm(event) {
    event.preventDefault();
}
const form = document.getElementById('survey-form');
const answers = {
    question1: form.elements.question1.value,
    question2: form.elements.question2.value,

};

const suggestion =suggestLanguage(answers);

showResult(suggestion);

function suggestLanguage(answers) {
  
if (answers.question1 === 'option1') {
    return languages[0];
} else if (answers.question2 === 'option2') {
    return languages[1];
} else {
    return languages[2];
}
}

function showResult(suggestion) {
    const resultContainer = document.getElementById(result);
    resultContainer.style.display = 'block';
}