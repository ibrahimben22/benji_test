document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        document.getElementById('message').textContent = 'Connexion réussie !';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Nom d\'utilisateur ou mot de passe incorrect.';
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(`Prénom: ${firstname}, Nom: ${lastname}, Email: ${email}, Mot de passe: ${password}`);
    alert('Inscription réussie !');
});