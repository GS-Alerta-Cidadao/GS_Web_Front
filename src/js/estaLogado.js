document.addEventListener('DOMContentLoaded', function () {
    const authLink = document.getElementById('auth-link');
    const authLinkImg = document.getElementById('auth-link-img');
    const authLinkText = document.getElementById('auth-link-text');

    if (!authLink || !authLinkImg || !authLinkText) {
        return;
    }

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userEmail = localStorage.getItem('userEmail');

    if (isLoggedIn) {
        authLink.href = authLink.getAttribute('data-loggedin-href');
        authLinkImg.src = authLinkImg.getAttribute('data-loggedin-src');
        authLinkImg.alt = authLinkImg.getAttribute('data-loggedin-alt');

        let displayText = authLinkText.getAttribute('data-loggedin-text');
        if (userEmail) {
            const namePart = userEmail.split('@')[0];
            displayText = namePart.charAt(0).toUpperCase() + namePart.slice(1);
        }
        authLinkText.textContent = displayText;

    } else {
        authLink.href = authLink.getAttribute('data-loggedout-href');
        authLinkImg.src = authLinkImg.getAttribute('data-loggedout-src');
        authLinkImg.alt = authLinkText.getAttribute('data-loggedout-text');
        authLinkText.textContent = authLinkText.getAttribute('data-loggedout-text');
    }
});