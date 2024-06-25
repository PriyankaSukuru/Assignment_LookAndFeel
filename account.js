document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem(localStorage.getItem('loggedInUser')));

    if (user) {
        document.getElementById('firstName').textContent = user.firstName;
        document.getElementById('lastName').textContent = user.lastName;
        document.getElementById('dob').textContent = user.dob;
        document.getElementById('email').textContent = user.email;
        document.getElementById('phone').textContent = user.phone;

        document.getElementById('logoutButton').addEventListener('click', () => {
            localStorage.removeItem('loggedInUser');
            window.location.href = 'kiki.html';
        });
    } else {
        window.location.href = 'login.html';
    }
});
