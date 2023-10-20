// form filling check
function checkInputType(value) {
    const userName = document.getElementById("userName");

    if (/^\d+$/.test(value)) {
        userName.type = "tel";
    } else if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)) {
        userName.type = "email";
    } else {
        userName.type = "text";
    }
}

// filled form style
const userName = document.getElementById("userName");
const password = document.querySelector("input[type='password']");
const submitButton = document.getElementById("submitButton");

function handleFormState() {
    if (userName.value.trim() !== "" && password.value.trim() !== "") {
        submitButton.classList.add("pointer-cursor");
        submitButton.classList.add("btn-filled");
    } else {
        submitButton.classList.remove("pointer-cursor");
        submitButton.classList.remove("btn-filled");
    }
}

userName.addEventListener("input", handleFormState);
password.addEventListener("input", handleFormState);