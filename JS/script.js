function processForm(event) {
    event.preventDefault();
}
const form = document.getElementById('survey-form');
const answers = {
    question1: form.elements.question1.value,
    question2: form.elements.question2.value,

};

const suggestion =suggestLanguage(answers);

saveAnswers(answers);

showResult(suggestion);
}


function suggestLanguage(answers) {
const storedAnswers = getStoredAnswers();

// Use the stored answers for branching logic if available
if (storedAnswers) {
  // Example branching logic using stored answers
  if (storedAnswers.question1 === 'option1') {
    // Suggestion based on stored answer to question 1
    return languages[0]; // Replace with appropriate language object
  } else if (storedAnswers.question2 === 'option2') {
    // Suggestion based on stored answer to question 2
    return languages[1]; // Replace with appropriate language object
  }
}

// If no stored answers or no specific suggestion, use default suggestion
return languages[2]; // Replace with appropriate language object
}

// Function to store the user's answers in local storage
function saveAnswers(answers) {
localStorage.setItem('surveyAnswers', JSON.stringify(answers));
}

// Function to retrieve the stored answers from local storage
function getStoredAnswers() {
const storedAnswers = localStorage.getItem('surveyAnswers');
return storedAnswers ? JSON.parse(storedAnswers) : null;
}

// ...

// Add an event listener to clear the stored answers when the page loads
window.addEventListener('load', function() {
localStorage.removeItem('surveyAnswers');
});