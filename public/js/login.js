document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        window.location.href = 'dashboard.html';
    })
    .catch((error) => {
        console.error('Error signing in:', error);
    });
});

