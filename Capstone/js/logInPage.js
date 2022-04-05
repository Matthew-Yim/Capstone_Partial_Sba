function validate() {
    console.log("Validating!");

    //Variables linked to id "#id"
    let email = $("#email").val();
    let password = $("#password").val();
    let validationFail = false;

    let emailLabel = $("#emailLabel");
    let passwordLabel = $("#passwordLabel");

    if (!email) {
        console.log("email missing");
        validationFail = true;
        let pTag2 = document.createElement("p");
        emailLabel.append(pTag2);
        pTag2.innerHTML = "Email cannot be empty";
        pTag2.style.color = "red";
    }

    if (!password) {
        console.log("password missing");
        validationFail = true;
        let pTag4 = document.createElement("p");
        passwordLabel.append(pTag4);
        pTag4.innerHTML = "Password cannot be empty";
        pTag4.style.color = "red";
    }

    if (validationFail) {
        return false;
    }
    return true;
}

$(document).ready(function () {
    console.log("==ready!==");
});