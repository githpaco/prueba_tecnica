document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html';
    }
    });