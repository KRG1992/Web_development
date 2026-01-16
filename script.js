function formValidaition() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;
    if (name == "" || email == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }
    alert(`Thank you for your information ${name}!`);
    return true;
}

const dateInput = document.getElementById("date-input");

dateInput.addEventListener("change", (event) => {

    const dateString = event.target.value;
    console.log("Date string: ", dateString);

    const dateObject = new Date(`${dateString}T00:00`);
    console.log("Date object: ", dateObject);
})