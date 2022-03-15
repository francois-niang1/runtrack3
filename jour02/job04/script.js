document.addEventListener("DOMContentLoaded", (event) => {
    let keylogger = document.getElementById("keylogger");
    let onBody = document.body;

    onBody.addEventListener("keydown", (event) => {

        let letter = event.key;

        if (keylogger.focus) {
            keylogger.value = keylogger.value + letter;
        }
        else {
            keylogger.value = letter;
        }
    })
})