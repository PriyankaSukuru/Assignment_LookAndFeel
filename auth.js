document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const firstName = event.target.firstName.value;
            const lastName = event.target.lastName.value;
            const dob = event.target.dob.value;
            const email = event.target.email.value;
            const phone = event.target.phone.value;
            const username = event.target.username.value;
            const password = event.target.password.value;

            const user = {
                firstName,
                lastName,
                dob,
                email,
                phone,
                username,
                password
            };

            localStorage.setItem(username, JSON.stringify(user));
            document.getElementById('signupMessage').textContent = 'Sign up successful! Redirecting to login page...';
            document.getElementById('signupMessage').style.color = 'green';

            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = event.target.username.value;
            const password = event.target.password.value;

            const storedUser = localStorage.getItem(username);

            if (storedUser) {
                const user = JSON.parse(storedUser);

                if (user.password === password) {
                    localStorage.setItem('loggedInUser', username); // Set the logged in user
                    document.getElementById('loginMessage').textContent = 'Login successful! Redirecting to home page...';
                    document.getElementById('loginMessage').style.color = 'green';

                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 2000);
                } else {
                    document.getElementById('loginMessage').textContent = 'Invalid username or password. Redirecting to sign-up page...';
                    document.getElementById('loginMessage').style.color = 'red';

                    setTimeout(() => {
                        window.location.href = 'signup.html';
                    }, 2000);
                }
            } else {
                document.getElementById('loginMessage').textContent = 'Invalid username or password. Redirecting to sign-up page...';
                document.getElementById('loginMessage').style.color = 'red';

                setTimeout(() => {
                    window.location.href = 'signup.html';
                }, 2000);
            }
        });
    }
});
