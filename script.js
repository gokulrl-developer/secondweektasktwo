const namegiven = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const form = document.getElementById("form");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const numError = document.getElementById("numError");

// Regular expressions for validation
const email_valid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const num_valid = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form submission
  
  // Validation checks
  if (namegiven.value.trim() === "") {
    nameError.innerHTML = "Name is required";
  } else {
    nameError.innerHTML = "";
  }

  if (!email.value.match(email_valid)) {
    emailError.innerHTML = "Enter a valid email";
  } else {
    emailError.innerHTML = "";
  }

  if (!phone.value.match(num_valid)) {
    numError.innerHTML = "Enter a valid phone number";
  } else {
    numError.innerHTML = "";
  }

  // If all validations pass, you can proceed with form submission
  if (namegiven.value.trim() !== "" && email.value.match(email_valid) && phone.value.match(num_valid)) {
    form.submit(); // Submit the form
    clearFields(); // Clear form fields

  }
});

function clearFields() {
  // Reset the form, which includes clearing all input fields and hidden inputs
  form.reset();

  // Clear any additional error messages or other elements if needed
  nameError.innerHTML = "";
  emailError.innerHTML = "";
  numError.innerHTML = "";
}
