const bancoDePersonagens = {
    naruto: {
        nome: "Naruto Uzumaki",
        descricao: "Você é determinado e nunca desiste!",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/94/Naruto_Uzumaki.png/250px-Naruto_Uzumaki.png"
    },
    sasuke: {
        nome: "Sasuke Uchiha",
        descricao: "Você é focado e analítico.",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/0/02/Sasuke_Uchiha.png/250px-Sasuke_Uchiha.png"
    },
    sakura: {
        nome: "Sakura Haruno",
        descricao: "Você é inteligente e forte.",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1a/Sakura_Haruno.png/250px-Sakura_Haruno.png"
    }
};

const listaDePerguntas = :contentReference[oaicite:0]{index=0}; // usa o mesmo array que você já tem

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

        perguntaAtual.opcoes.forEach(opcao => {
            const botao = document.createElement("button");
            botao.classList.add("option-btn");
            botao.textContent = opcao.texto;

            botao.addEventListener("click", () => {
                document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
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

        let maior = 0;
        let vencedor = "";

        for (let p in this.pontuacoes) {
            if (this.pontuacoes[p] > maior) {
                maior = this.pontuacoes[p];
                vencedor = p;
            }
        }

        const dados = this.personagens[vencedor];

        document.getElementById("nome-personagem").textContent = dados.nome;
        document.getElementById("descricao-personagem").textContent = dados.descricao;
        document.getElementById("imagem-personagem").src = dados.imagem;
        document.getElementById("pontos-personagem").textContent = maior;
    }

    reiniciarJogo() {
        this.pontuacoes = { naruto: 0, sasuke: 0, sakura: 0 };
        this.indiceAtual = 0;

        this.telaResultado.classList.add("hidden");
        this.telaInicial.classList.remove("hidden");
    }
}

const meuQuiz = new SistemaQuiz(listaDePerguntas, bancoDePersonagens);
meuQuiz.iniciar();
