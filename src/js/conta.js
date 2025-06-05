document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logoutButton');
    const boasVindasUsuario = document.getElementById('boasVindasUsuario');

    const userEmail = localStorage.getItem('userEmail');
    if (userEmail && boasVindasUsuario) {
        boasVindasUsuario.textContent = `Bem-vindo(a), ${userEmail}!`;
    } else if (boasVindasUsuario) {
         boasVindasUsuario.textContent = 'Bem-vindo(a)!';
    }


    if (logoutButton) {
        logoutButton.addEventListener('click', function () {

            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userEmail');

            alert('Você saiu da sua conta.');
            window.location.href = 'login.html';
        });
    }

    if (localStorage.getItem('isLoggedIn') !== 'true') {
        alert("Você precisa estar logado para acessar esta página.");
        window.location.href = 'login.html';
    }
});