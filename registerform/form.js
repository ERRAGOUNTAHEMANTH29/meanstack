function handleSubmit(event) {
    event.preventDefault();
    // Add your form submission logic here
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Example: Log form values to the console
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  
    // Implement your form submission to the server here
  }
  