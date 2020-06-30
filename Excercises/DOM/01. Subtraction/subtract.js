function subtract() {
    const firsNum = Number(document.getElementById("firstNumber").value);
    const secondNum = Number(document.getElementById("secondNumber").value);
    const result = document.getElementById("result");

    result.textContent = firsNum - secondNum;

}