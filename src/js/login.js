document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const mensagemErro = document.getElementById('mensagemErro');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            mensagemErro.textContent = '';
            mensagemErro.style.display = 'none';
            emailInput.style.borderColor = '#ccc';
            senhaInput.style.borderColor = '#ccc'; 

            let isValid = true;
            let erros = [];

            if (emailInput.value.trim() === '') {
                erros.push('O campo Email é obrigatório.');
                emailInput.style.borderColor = '#e74c3c';
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                erros.push('Por favor, insira um email válido.');
                emailInput.style.borderColor = '#e74c3c';
                isValid = false;
            }

            if (senhaInput.value.trim() === '') {
                erros.push('O campo Senha é obrigatório.');
                senhaInput.style.borderColor = '#e74c3c';
                isValid = false;
            }

            if (isValid) {
                console.log('Formulário válido. Tentando login com:');
                console.log('Email:', emailInput.value);
                console.log('Senha:', '********');

                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', emailInput.value);

                alert('Login simulado com sucesso!');
                loginForm.reset(); 
                window.location.href = "../../index.html"
            } else {
                mensagemErro.textContent = erros.join(' ');
                mensagemErro.style.display = 'block';
            }
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});