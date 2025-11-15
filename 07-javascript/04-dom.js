// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", copyText);

function copyText() {
    const copiedText = document.getElementById("userInput1").value;
    console.log("Button press detected, text copied: ", copiedText);
    document.getElementById("output").innerHTML = copiedText;
    return copiedText;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area

const input = document.getElementById("userInput2");
input.addEventListener("input", copyTextOnEntry);

function copyTextOnEntry() {
    const copiedText = document.getElementById("userInput2").value;
    console.log("Input text detected, copying input per keypress...: ", copiedText);
    document.getElementById("output2").innerHTML = copiedText;
    return copiedText;
}

