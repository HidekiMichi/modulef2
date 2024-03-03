
document.getElementById('Email').addEventListener('input', function() {
    validateEmail();
  });
  
  document.getElementById('Password').addEventListener('input', function() {
    validatePassword();
  });
  
  function validateEmail() {
    const email = document.getElementById('Email').value;
    const emailError = document.getElementById('emailError');
    if(email.length > 3 && email.includes('@') && email.includes('.')) {
      emailError.textContent = '';
      checkAllValid();
    } else {
      emailError.textContent = 'Email must be more than 3 characters and contain "@" and "."';
      document.getElementById('successMessage').textContent = '';
      document.getElementById('submitButton').disabled = true;
    }
  }
  
  function validatePassword() {
    const password = document.getElementById('Password').value;
    const passwordError = document.getElementById('passwordError');
    if(password.length > 8) {
      passwordError.textContent = '';
      checkAllValid();
    } else {
      passwordError.textContent = 'Password must be more than 8 characters';
      document.getElementById('successMessage').textContent = '';
      document.getElementById('submit').disabled = true;
    }
  }
  
  function checkAllValid() {
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;
    if(email.length > 3 && email.includes('@') && email.includes('.') && password.length > 8) {
      document.getElementById('successMessage').textContent = 'All good to go!';
      document.getElementById('successMessage').className = 'success';
      document.getElementById('submit').disabled = false;
    } else {
      document.getElementById('submit').disabled = true;
    }
  }
  
  function submitForm() {
    const confirmation = confirm('Do you want to submit the form?');
    if(confirmation) {
      alert('Successful signup!');
    } else {
      window.location.reload();
    }
  }