function validate() {
    console.log("Validating!");

    //Variables linked to id "#id"
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let confirmPassword = $("#confirmPassword").val();
    let validationFail = false;

    let firstNameLabel = $("#firstNameLabel");
    let lastNamLabel = $("#lastNameLabel");
    let emailLabel = $("#emailLabel");
    let passwordLabel = $("#passwordLabel");
    let confirmPasswordLabel = $("#confirmPasswordLabel");

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        console.log("All fields must be filled");
        validationFail = true;
    }

    if (!firstName) {
        validationFail = true;
        let pTag0 = document.createElement("p");
        firstNameLabel.append(pTag0);
        pTag0.innerHTML = "First name cannot be empty";
        pTag0.style.color = "red";
    }

    if (!lastName) {
        validationFail = true;
        let pTag1 = document.createElement("p");
        lastNameLabel.append(pTag1);
        pTag1.innerHTML = "Last name cannot be empty";
        pTag1.style.color = "red";
    }

    if (!email) {
        validationFail = true;
        let pTag2 = document.createElement("p");
        emailLabel.append(pTag2);
        pTag2.innerHTML = "Email cannot be empty";
        pTag2.style.color = "red";
    }

    if (password.length < 8 || password.length > 20) {
        console.log("Password must be between 8 and 20 characters long.");
        validationFail = true;
        let pTag3 = document.createElement("p");
        passwordLabel.append(pTag3);
        pTag3.innerHTML = "Password cannot be empty";
        pTag3.style.color = "red";
    }

    if (password !== confirmPassword) {
        console.log("something missing");
        validationFail = true;
        let pTag4 = document.createElement("p");
        confirmPasswordLabel.append(pTag4);
        pTag4.innerHTML = "Confirm Password cannot be empty";
        pTag4.style.color = "red";
    }

    let regex = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
    if (!password.match(regex)) {
        console.log("Password must contain letters and numbers.");
        validationFail = true;
    }
    if (validationFail) {
        return false;
    }
    return true;
}

$(document).ready(function () {
    console.log("==ready!==");
});
