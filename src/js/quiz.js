document.addEventListener('DOMContentLoaded', function () {
    const perguntaContainer = document.getElementById('pergunta-container');
    const numeroPerguntaTexto = document.getElementById('numero-pergunta-texto');
    const perguntaTexto = document.getElementById('pergunta-texto');
    const opcoesContainer = document.getElementById('opcoes-container');
    const proximaPerguntaBtn = document.getElementById('proxima-pergunta-btn');
    const feedbackResposta = document.getElementById('feedback-resposta');

    const quizArea = document.getElementById('quiz-area');
    const resultadoContainer = document.getElementById('resultado-container');
    const resultadoTexto = document.getElementById('resultado-texto');
    const mensagemFinal = document.getElementById('mensagem-final');
    const reiniciarQuizBtn = document.getElementById('reiniciar-quiz-btn');

    let perguntasQuiz = [
        { 
            pergunta: "Como a impermeabilização do solo urbano influencia diretamente no risco de enchentes?",
            opcoes: [
                "A) Aumenta a evaporação da água da chuva",
                "B) Impede a infiltração da água, aumentando o escoamento superficial",
                "C) Reduz a velocidade das águas fluviais",
                "D) Melhora a qualidade da água da chuva"
            ],
            respostaCorreta: 1 
        },
        { 
            pergunta: "Em relação à gestão de riscos de desastres, o que é um \"mapa de risco de inundação\"?",
            opcoes: [
                "A) Um registro de desastres naturais antigos",
                "B) Um plano de evacuação de áreas costeiras",
                "C) Uma ferramenta que identifica áreas mais vulneráveis a alagamentos e orienta políticas públicas",
                "D) Um relatório estatístico de chuvas passadas"
            ],
            respostaCorreta: 2 
        },
        { 
            pergunta: "As enchentes são mais frequentes em regiões com:",
            opcoes: [
                "A) Alto índice de chuvas e pouca infraestrutura de drenagem",
                "B) Clima seco e desértico",
                "C) Muitas montanhas e pouca água",
                "D) Florestas densas"
            ],
            respostaCorreta: 0 
        },
        { 
            pergunta: "Durante uma enchente, o que é recomendado fazer?",
            opcoes: [
                "A) Ficar dentro do carro, mesmo que submerso",
                "B) Procurar abrigo em locais altos e seguros",
                "C) Tentar atravessar ruas alagadas a pé",
                "D) Abrir os bueiros para escoar mais rápido"
            ],
            respostaCorreta: 1
        },
        { 
            pergunta: "Qual o papel das bacias de retenção (ou piscinões) na mitigação de enchentes urbanas?",
            opcoes: [
                "A) Substituem o sistema de esgoto doméstico",
                "B) Servem para armazenar esgoto tratado",
                "C) Armazenam temporariamente o excesso de água da chuva, liberando-a lentamente",
                "D) Aumentam a captação de água subterrânea para abastecimento"
            ],
            respostaCorreta: 2 
        },
        { 
            pergunta: "Como a mudança climática pode afetar a frequência e a intensidade das enchentes?",
            opcoes: [
                "A) Tornando os rios mais profundos",
                "B) Reduzindo a quantidade de chuvas globais",
                "C) Aumentando eventos extremos, como chuvas intensas em curtos períodos de tempo",
                "D) Mantendo o regime hídrico estável, porém com menos impacto"
            ],
            respostaCorreta: 2 
        },
        {
            pergunta: "O que são áreas de várzea?",
            opcoes: [
                "A) Regiões montanhosas propensas a avalanches",
                "B) Áreas baixas próximas a rios, sujeitas a alagamentos",
                "C) Regiões costeiras com dunas",
                "D) Encostas usadas para plantio"
            ],
            respostaCorreta: 1
        },
        { 
            pergunta: "Qual das opções abaixo representa uma consequência ambiental indireta de enchentes frequentes em áreas urbanas?",
            opcoes: [
                "A) Aumento da biodiversidade local",
                "B) Reflorestamento natural de áreas degradadas",
                "C) Contaminação de corpos d'água por esgoto e resíduos sólidos",
                "D) Diminuição do nível dos rios"
            ],
            respostaCorreta: 2
        },
        { 
            pergunta: "Qual destas atitudes do cidadão pode ajudar a evitar enchentes?",
            opcoes: [
                "A) Jogar lixo em terrenos baldios",
                "B) Não jogar lixo nas ruas e bueiros",
                "C) Construir casas em encostas íngremes",
                "D) Cimentar todo o quintal"
            ],
            respostaCorreta: 1
        },
        { 
            pergunta: "Qual é o papel das galerias pluviais no controle das enchentes?",
            opcoes: [
                "A) Impedir o vento forte",
                "B) Escoar a água da chuva para evitar acúmulo nas ruas",
                "C) Armazenar lixo doméstico",
                "D) Aumentar a pressão da água nas torneiras"
            ],
            respostaCorreta: 1
        }
    ];

    let perguntaAtualIndex = 0;
    let pontuacao = 0;

    function carregarPergunta() {
        if (perguntaAtualIndex < perguntasQuiz.length) {
            const perguntaData = perguntasQuiz[perguntaAtualIndex];
            numeroPerguntaTexto.textContent = `Pergunta ${perguntaAtualIndex + 1} de ${perguntasQuiz.length}`;
            perguntaTexto.textContent = perguntaData.pergunta;
            opcoesContainer.innerHTML = '';
            feedbackResposta.textContent = '';
            feedbackResposta.className = 'feedback-resposta';


            perguntaData.opcoes.forEach((opcao, index) => {
                const botaoOpcao = document.createElement('button');
                botaoOpcao.textContent = opcao;
                botaoOpcao.addEventListener('click', () => selecionarResposta(index, botaoOpcao));
                opcoesContainer.appendChild(botaoOpcao);
            });
            proximaPerguntaBtn.style.display = 'none';
        } else {
            mostrarResultado();
        }
    }

    function selecionarResposta(indexSelecionado, botaoClicado) {
        const perguntaData = perguntasQuiz[perguntaAtualIndex];
        const respostaCorreta = perguntaData.respostaCorreta;

        Array.from(opcoesContainer.children).forEach(botao => {
            botao.disabled = true;
        });

        if (indexSelecionado === respostaCorreta) {
            pontuacao++;
            botaoClicado.classList.add('correta');
            feedbackResposta.textContent = "Correto!";
            feedbackResposta.className = 'feedback-resposta correta';
        } else {
            botaoClicado.classList.add('incorreta');
            opcoesContainer.children[respostaCorreta].classList.add('correta');
            feedbackResposta.textContent = "Incorreto!";
            feedbackResposta.className = 'feedback-resposta incorreta';
        }
        proximaPerguntaBtn.style.display = 'block';
    }

    function proximaPergunta() {
        perguntaAtualIndex++;
        carregarPergunta();
    }

    function mostrarResultado() {
        quizArea.style.display = 'none';
        resultadoContainer.style.display = 'block';
        resultadoTexto.textContent = `Você acertou ${pontuacao} de ${perguntasQuiz.length} perguntas!`;

        if (pontuacao >= 7) {
            mensagemFinal.textContent = "Parabéns! Você conhece bem sobre prevenção de enchentes.";
        } else if (pontuacao >= 4) {
            mensagemFinal.textContent = "Bom trabalho! Continue aprendendo para se proteger ainda mais.";
        } else {
            mensagemFinal.textContent = "Não desanime! Reveja os temas e tente novamente para aprender mais.";
        }
    }

    function reiniciarQuiz() {
        perguntaAtualIndex = 0;
        pontuacao = 0;
        resultadoContainer.style.display = 'none';
        quizArea.style.display = 'block';
        proximaPerguntaBtn.style.display = 'none';
        feedbackResposta.textContent = '';
        feedbackResposta.className = 'feedback-resposta';
        carregarPergunta();
    }

    proximaPerguntaBtn.addEventListener('click', proximaPergunta);
    reiniciarQuizBtn.addEventListener('click', reiniciarQuiz);

    carregarPergunta();
});