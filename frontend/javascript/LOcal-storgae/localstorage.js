function submitForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const inUsername = 'HEMANTH';
    const inPassword = '12345678';
    if (username == inUsername && password == inPassword) {
        alert('Login successful');
           location.href='http://127.0.0.1:5500/homepage.html'
    } else {
        alert('Incorrect username or password');
    }
}
