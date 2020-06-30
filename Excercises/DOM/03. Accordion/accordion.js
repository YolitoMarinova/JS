function toggle() {
    const btn = document.querySelector('div.head > .button');

    let text = document.getElementById("extra");

    if (btn.textContent !== "More") {
        text.style.display = "none";
        btn.textContent = "More";
        return;
    }

    text.style.display = "block";
    btn.textContent = "Less";
}