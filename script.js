function validateForm() {
  let isValid = true;

  // Clear previous error messages
  clearErrors();

  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const emailInput = document.getElementById("email");

  //load fron local Storage
  document.addEventListener("DOMContentLoaded", () => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      username.value = savedUsername;
      validateUsername();
    }
  });
  // Add Event Listeners

  usernameInput.addEventListener("input", validateUsername);
  emailInput.addEventListener("input", validateEmail);
  passwordInput.addEventListener("input", validatePassword);
  confirmPasswordInput.addEventListener("input", validateConfirmPassword);
  // Form Submission
  const form = document.getElementById("registration-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate all fields
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    // Check if all fields are valid

    // If all fields are valid, show success message
    if (
      isUsernameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      successMessage.textContent = "Registration successful!";
      successMessage.style.color = "green";
      localStorage.setItem("username", username.value);
    } else {
      successMessage.textContent = "Please fix the errors above.";
      successMessage.style.color = "red";
    }
  });

  // Validation Functions
  buttton.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Email:", email);
    console.log("Confirm Password:", confirmPassword);
  });
  // You can add your form submission logic here

  //button to submit form
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", function () {
    // Perform form submission logic here

    console.log("submitButton");
    // For example, you can send the form data to a server or display a success message
    alert("Form submitted successfully!");
    form.submit();
  });

  if (isValid) {
    alert("Form submitted successfully!");

    return isValid;
  }
}
