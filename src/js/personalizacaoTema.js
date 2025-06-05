document.addEventListener('DOMContentLoaded', function () {
    const temaSwitchers = document.querySelectorAll('.tema-switcher');
    const body = document.body;
    const classesDeTemaConhecidas = ['tema-escuro', 'tema-contraste', 'tema-padrao']; 

    function aplicarTema(nomeTemaEscolhido) {
        classesDeTemaConhecidas.forEach(classe => {
            body.classList.remove(classe);
        });

        if (nomeTemaEscolhido === 'escuro') {
            body.classList.add('tema-escuro');
        } else if (nomeTemaEscolhido === 'contraste') {
            body.classList.add('tema-contraste');
        } else if (nomeTemaEscolhido === 'padrao') {
        }

        localStorage.setItem('temaPreferido', nomeTemaEscolhido);
    }

    const temaSalvo = localStorage.getItem('temaPreferido');
    if (temaSalvo) {
        aplicarTema(temaSalvo);
    } else {
        aplicarTema('padrao');
    }

    temaSwitchers.forEach(switcher => {
        switcher.addEventListener('click', function (event) {
            event.preventDefault(); 
            const temaClicado = this.getAttribute('data-tema');
            aplicarTema(temaClicado);
        });
    });
});