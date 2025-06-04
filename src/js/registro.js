document.addEventListener('DOMContentLoaded', function () {
    const registroForm = document.getElementById('registroForm');
    const nomeCompletoInput = document.getElementById('nomeCompleto');
    const emailRegistroInput = document.getElementById('emailRegistro');
    const enderecoInput = document.getElementById('endereco');
    const senhaRegistroInput = document.getElementById('senhaRegistro');
    const confirmarSenhaInput = document.getElementById('confirmarSenha');
    const termosCheckbox = document.getElementById('termos');
    const mensagemErroRegistro = document.getElementById('mensagemErroRegistro');

    if (registroForm) {
        registroForm.addEventListener('submit', function (event) {
            event.preventDefault();

            mensagemErroRegistro.textContent = '';
            mensagemErroRegistro.style.display = 'none';
            const inputs = [nomeCompletoInput, emailRegistroInput, senhaRegistroInput, confirmarSenhaInput, termosCheckbox];
            inputs.forEach(input => {
                if (input.type !== 'checkbox') {
                    input.style.borderColor = '#ccc';
                }
            });

            let isValid = true;
            let erros = [];

            if (nomeCompletoInput.value.trim() === '') {
                erros.push('O campo Nome Completo é obrigatório.');
                nomeCompletoInput.style.borderColor = '#e74c3c';
                isValid = false;
            }

            if (emailRegistroInput.value.trim() === '') {
                erros.push('O campo Email é obrigatório.');
                emailRegistroInput.style.borderColor = '#e74c3c';
                isValid = false;
            } else if (!isValidEmail(emailRegistroInput.value.trim())) {
                erros.push('Por favor, insira um email válido.');
                emailRegistroInput.style.borderColor = '#e74c3c';
                isValid = false;
            }

            if (enderecoInput.value.trim() === '') {
                erros.push('O campo Endereço é obrigatório.');
                enderecoInput.style.borderColor = '#e74c3c';
                isValid = false;
            } 

            if (senhaRegistroInput.value.trim() === '') {
                erros.push('O campo Senha é obrigatório.');
                senhaRegistroInput.style.borderColor = '#e74c3c';
                isValid = false;
            } else if (senhaRegistroInput.value.trim().length < 6) {
                erros.push('A senha deve ter pelo menos 6 caracteres.');
                senhaRegistroInput.style.borderColor = '#e74c3c';
                isValid = false;
            }

            if (confirmarSenhaInput.value.trim() === '') {
                erros.push('O campo Confirmar Senha é obrigatório.');
                confirmarSenhaInput.style.borderColor = '#e74c3c';
                isValid = false;
            } else if (senhaRegistroInput.value.trim() !== confirmarSenhaInput.value.trim()) {
                erros.push('As senhas não coincidem.');
                senhaRegistroInput.style.borderColor = '#e74c3c';
                confirmarSenhaInput.style.borderColor = '#e74c3c';
                isValid = false;
            }

            if (!termosCheckbox.checked) {
                erros.push('Você deve aceitar os Termos de Uso.');
                isValid = false;
            }


            if (isValid) {
                console.log('Formulário de registro válido. Tentando registrar com:');
                console.log('Nome:', nomeCompletoInput.value);
                console.log('Email:', emailRegistroInput.value);

                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', emailRegistroInput.value);

                alert('Registro simulado com sucesso!');
                registroForm.reset();
                window.location.href = "../../index.html"
            } else {
                mensagemErroRegistro.innerHTML = erros.join('<br>');
                mensagemErroRegistro.style.display = 'block';
            }
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});