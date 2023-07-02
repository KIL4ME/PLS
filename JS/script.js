const surveyForm = document.getElementById('surveyForm');
const resultDiv = document.getElementById('result');

surveyForm.addEventListener('submit', function(event) {
  event.preventDefault();
  resultDiv.textContent = '';

  const experience = document.querySelector('input[name="experience"]:checked').value;
  const applications = document.querySelector('input[name="applications"]:checked').value;
  const dataAnalysis = document.querySelector('input[name="dataAnalysis"]:checked').value;
  const paradigm = document.querySelector('input[name="paradigm"]:checked').value;
  const color = document.querySelector('input[name="color"]:checked').value;

  if (experience === 'beginner' && applications === 'web' && dataAnalysis === 'no') {
    resultDiv.textContent = 'Based on your answers, we suggest you learn JavaScript!';
  } else if (experience === 'intermediate' && applications === 'mobile' && paradigm === 'objectOriented') {
    resultDiv.textContent = 'Based on your answers, we suggest you learn Ruby!';
  } else if (experience === 'advanced' && applications === 'desktop' && color === 'blue') {
    resultDiv.textContent = 'Based on your answers, we suggest you learn C++!';
  } else {
    resultDiv.textContent = 'Based on your answers, we suggest you learn Python!';
  }
});
