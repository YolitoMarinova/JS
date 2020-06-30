function solve() {
  let rightAnswers = 0;
  let sections = [...document.querySelectorAll('div#quizzie section')];

  let counter = 0;

  sections.forEach(s => {
    [...s.querySelectorAll('li')].forEach(l => l.addEventListener('click', nextQuestion));
  });

  function nextQuestion(event) {
    let target = event.target;
    let answer = target.textContent.trim();

    if (answer === 'onclick' ||
      answer === 'JSON.stringify()' ||
      answer === 'A programming API for HTML and XML documents') {
      rightAnswers++;
    }

    sections[counter].style.display = 'none';
    counter++;

    if (counter === 3) {
      let results = document.querySelector('ul#results');
      results.style.display = 'block';
      let h1 = results.querySelector('li.results-inner > h1');
      if (rightAnswers === 3) {
        h1.textContent = 'You are recognized as top JavaScript fan!';
      } else {
        h1.textContent = `You have ${rightAnswers} right answers.`;
      }
    } else {
      sections[counter].style.display = 'block';
    }
  };
}
