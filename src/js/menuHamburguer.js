document.addEventListener('DOMContentLoaded', function () {
    const menuHamburguerBotao = document.getElementById('menuHamburguer');
    const navPrincipalElemento = document.getElementById('navPrincipal');

    if (menuHamburguerBotao && navPrincipalElemento) {
        menuHamburguerBotao.addEventListener('click', function () {
            navPrincipalElemento.classList.toggle('nav-ativa');
            
            this.classList.toggle('hamburguer-ativo');

            const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !isExpanded);
        });
    } else {
        console.warn("Botão do menu hambúrguer ou navegação principal não encontrados.");
    }
});