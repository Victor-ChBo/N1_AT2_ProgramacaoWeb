const bancoDePersonagens = {
    naruto: {
        nome: "Naruto Uzumaki",
        descricao: "Você é determinado, barulhento e nunca desiste! Você valoriza seus amigos acima de tudo e tem uma força de vontade inabalável.",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/94/Naruto_Uzumaki.png/250px-Naruto_Uzumaki.png"
    },
    sasuke: {
        nome: "Sasuke Uchiha",
        descricao: "Você é focado, independente e um verdadeiro prodígio. Busca sempre superar seus próprios limites, agindo de forma analítica.",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/0/02/Sasuke_Uchiha.png/250px-Naruto_Uchiha.png"
    },
    sakura: {
        nome: "Sakura Haruno",
        descricao: "Você é inteligente, tem um controle perfeito e é excelente em dar suporte. Quando necessário, demonstra uma força colossal!",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1a/Sakura_Haruno.png/250px-Sakura_Haruno.png"
    }
};

const listaDePerguntas = [
    {
        pergunta: "1. O que você faz no seu tempo livre?",
        opcoes: [
            { texto: "Encho o saco dos outros e tento ficar chamando a atenção.", pontos: { naruto: 3, sasuke: 1, sakura: 2 } },
            { texto: "Farmo aura.", pontos: { naruto: 1, sasuke: 3, sakura: 1 } },
            { texto: "Fico falando do Sasuke.", pontos: { naruto: 1, sasuke: 2, sakura: 3 } }
        ]
    },
    {
        pergunta: "2. Qual é a sua principal motivação?",
        opcoes: [
            { texto: "Matar alguém.", pontos: { naruto: 1, sasuke: 3, sakura: 2 } },
            { texto: "Ser hokage.", pontos: { naruto: 3, sasuke: 1, sakura: 1 } },
            { texto: "Ser útil.", pontos: { naruto: 2, sasuke: 1, sakura: 3 } }
        ]
    },
    {
        pergunta: "3. Seu personagem favorito do time 7 tem quais habilidades?",
        opcoes: [
            { texto: "Só rasengan.", pontos: { naruto: 3, sasuke: 1, sakura: 1 } },
            { texto: "Todos menos rasengan.", pontos: { naruto: 1, sasuke: 3, sakura: 1 } },
            { texto: "Cura algumas feridas de kunai.", pontos: { naruto: 1, sasuke: 1, sakura: 3 } }
        ]
    },
    {
        pergunta: "4. Como você agiria em equipe?",
        opcoes: [
            { texto: "Tomaria a frente e atacaria o inimigo de surpresa", pontos: { naruto: 3, sasuke: 1, sakura: 2 } },
            { texto: "Preferiria agir sozinho, os outros só me atrasariam.", pontos: { naruto: 1, sasuke: 3, sakura: 1 } },
            { texto: "Analisaria a situação e curaria os aliados se precisassem.", pontos: { naruto: 1, sasuke: 1, sakura: 3 } }
        ]
    },
    {
        pergunta: "5. Qual animal você escolheria como invocação?",
        opcoes: [
            { texto: "Sapo (Versatilidade e salto).", pontos: { naruto: 3, sasuke: 1, sakura: 1 } },
            { texto: "Cobra (Furtividade e veneno).", pontos: { naruto: 1, sasuke: 3, sakura: 1 } },
            { texto: "Lesma (Regeneração e divisão).", pontos: { naruto: 1, sasuke: 1, sakura: 3 } }
        ]
    },
    {
        pergunta: "6. Como você lida com uma derrota?",
        opcoes: [
            { texto: "Me levanto, grito que não vou desistir e tento de novo.", pontos: { naruto: 3, sasuke: 1, sakura: 1 } },
            { texto: "Fico com muita raiva e busco meios drásticos para evoluir.", pontos: { naruto: 1, sasuke: 3, sakura: 1 } },
            { texto: "Choro no início, mas prometo a mim mesmo treinar mais.", pontos: { naruto: 2, sasuke: 1, sakura: 3 } }
        ]
    },
    {
        pergunta: "7. Qual cor mais te atrai?",
        opcoes: [
            { texto: "Laranja", pontos: { naruto: 3, sasuke: 1, sakura: 1 } },
            { texto: "Azul Escuro", pontos: { naruto: 1, sasuke: 3, sakura: 1 } },
            { texto: "Vermelho ou Rosa", pontos: { naruto: 1, sasuke: 1, sakura: 3 } }
        ]
    },
    {
        pergunta: "8. Na escola, quem era você?",
        opcoes: [
            { texto: "O palhaço da turma que queria atenção.", pontos: { naruto: 3, sasuke: 1, sakura: 1 } },
            { texto: "O prodígio popular, mas na minha própria bolha.", pontos: { naruto: 1, sasuke: 3, sakura: 1 } },
            { texto: "O estudante focado na teoria que tirava notas altas.", pontos: { naruto: 1, sasuke: 2, sakura: 3 } }
        ]
    },
    {
        pergunta: "9. O que você acha de regras?",
        opcoes: [
            { texto: "Regras foram feitas para serem quebradas se for pela coisa certa.", pontos: { naruto: 3, sasuke: 2, sakura: 1 } },
            { texto: "Eu sigo as minhas próprias regras.", pontos: { naruto: 1, sasuke: 3, sakura: 1 } },
            { texto: "Regras são importantes para manter a ordem e a segurança.", pontos: { naruto: 1, sasuke: 1, sakura: 3 } }
        ]
    },
    {
        pergunta: "10. Qual a sua comida favorita?",
        opcoes: [
            { texto: "Lámen bem quente!", pontos: { naruto: 3, sasuke: 1, sakura: 1 } },
            { texto: "Comidas mais leves, como tomate ou onigiri.", pontos: { naruto: 1, sasuke: 3, sakura: 1 } },
            { texto: "Doces tradicionais, como bolinhos de chuva ou dango.", pontos: { naruto: 1, sasuke: 1, sakura: 3 } }
        ]
    }
];

class SistemaQuiz {
    constructor(perguntas, personagens) {
        this.perguntas = perguntas;
        this.personagens = personagens;
        this.indiceAtual = 0;
        this.pontuacoes = { naruto: 0, sasuke: 0, sakura: 0 };
        this.pontuacaoSelecionada = null;

        this.telaInicial = document.getElementById("tela-inicial");
        this.telaQuiz = document.getElementById("tela-quiz");
        this.telaResultado = document.getElementById("tela-resultado");

        this.elementoPergunta = document.getElementById("texto-pergunta");
        this.containerOpcoes = document.getElementById("container-opcoes");
        this.btnProximo = document.getElementById("btn-proximo");
    }

    iniciar() {
        document.getElementById("btn-comecar").addEventListener("click", () => {
            this.telaInicial.classList.add("hidden");
            this.telaQuiz.classList.remove("hidden");
            this.carregarPergunta();
        });

        this.btnProximo.addEventListener("click", () => this.avancarPergunta());

        document.getElementById("btn-reiniciar").addEventListener("click", () => this.reiniciarJogo());
    }

    carregarPergunta() {
        const perguntaAtual = this.perguntas[this.indiceAtual];
        this.elementoPergunta.textContent = perguntaAtual.pergunta;
        this.containerOpcoes.innerHTML = "";
        this.btnProximo.disabled = true;
        this.pontuacaoSelecionada = null;

        perguntaAtual.opcoes.forEach((opcao) => {
            const botao = document.createElement("button");
            botao.classList.add("option-btn");
            botao.textContent = opcao.texto;

            botao.addEventListener("click", () => {
                const todosBotoes = this.containerOpcoes.querySelectorAll(".option-btn");
                todosBotoes.forEach(b => b.classList.remove("selected"));

                botao.classList.add("selected");
                this.pontuacaoSelecionada = opcao.pontos;
                this.btnProximo.disabled = false;
            });

            this.containerOpcoes.appendChild(botao);
        });
    }

    avancarPergunta() {
        if (this.pontuacaoSelecionada) {
            this.pontuacoes.naruto += this.pontuacaoSelecionada.naruto;
            this.pontuacoes.sasuke += this.pontuacaoSelecionada.sasuke;
            this.pontuacoes.sakura += this.pontuacaoSelecionada.sakura;
        }

        this.indiceAtual++;

        if (this.indiceAtual < this.perguntas.length) {
            this.carregarPergunta();
        } else {
            this.exibirResultado();
        }
    }

    exibirResultado() {
        this.telaQuiz.classList.add("hidden");
        this.telaResultado.classList.remove("hidden");

        let maiorPontuacao = 0;
        let personagemVencedor = "";

        for (let chave in this.pontuacoes) {
            if (this.pontuacoes[chave] > maiorPontuacao) {
                maiorPontuacao = this.pontuacoes[chave];
                personagemVencedor = chave;
            }
        }

        const dadosVencedor = this.personagens[personagemVencedor];
        document.getElementById("nome-personagem").textContent = dadosVencedor.nome;
        document.getElementById("descricao-personagem").textContent = dadosVencedor.descricao;
        document.getElementById("imagem-personagem").src = dadosVencedor.imagem;
        document.getElementById("imagem-personagem").alt = dadosVencedor.nome;
        document.getElementById("pontos-personagem").textContent = maiorPontuacao;
    }

    reiniciarJogo() {
        this.pontuacoes = { naruto: 0, sasuke: 0, sakura: 0 };
        this.indiceAtual = 0;
        this.pontuacaoSelecionada = null;

        this.telaResultado.classList.add("hidden");
        this.telaInicial.classList.remove("hidden");
    }
}

const meuQuiz = new SistemaQuiz(listaDePerguntas, bancoDePersonagens);
meuQuiz.iniciar();
