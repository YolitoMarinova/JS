function growingWord() {
  const word = document.querySelector("#exercise > p");
  let px = 2;
  let colorChange = {
    "blue": "green",
    "green": "red",
    "red": "blue"
  };

  if (!word.hasAttribute("style")) {
    word.setAttribute("style", `color:blue; font-size: ${px}px`)
  } else {
    let currPx = word.style["font-size"];
    px = currPx.substr(0, currPx.length -2) * 2;
    let currColor = word.style.color;
    word.setAttribute("style", `color:${colorChange[currColor]}; font-size: ${px}px`)
  }
}