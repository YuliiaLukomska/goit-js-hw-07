const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', checkFormSubmission);

function checkFormSubmission(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const loginFormValues = {
    email: email.trim(),
    password: password.trim(),
  };
  if (email.trim() === '' || password.trim() === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(loginFormValues);
    form.reset();
  }
}
