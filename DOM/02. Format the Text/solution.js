function solve() {
  let input = document.querySelector("div > #input").textContent;

  let output = document.querySelector("div #output");

  let sentences = input.split('. ');

  let currParagraph = document.createElement("p");

  let counter = 0;

  sentences.forEach(s => {
    currParagraph.textContent += s;
    counter++;

    if (counter === 3) {
      output.appendChild(currParagraph);
      currParagraph = document.createElement("p");
      counter = 0;
    }

    if (sentences[sentences.length - 1] === s) {
      output.appendChild(currParagraph);
    }
  });
}