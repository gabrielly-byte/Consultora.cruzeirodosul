const questions = [
  {
    question: "1. Qual é o maior planeta do Sistema Solar?",
    options: ["Terra", "Marte", "Júpiter", "Saturno"],
    correct: 2
  },
  {
    question: "2. Em que ano o Brasil foi descoberto?",
    options: ["1492", "1500", "1822", "1889"],
    correct: 1
  },
  {
    question: "3. Qual a fórmula da água?",
    options: ["H2O", "CO2", "NaCl", "O2"],
    correct: 0
  },
  {
    question: "4. Quem escreveu 'Dom Casmurro'?",
    options: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Graciliano Ramos"],
    correct: 0
  },
  {
    question: "5. Quantos continentes existem?",
    options: ["4", "5", "6", "7"],
    correct: 3
  },
  {
    question: "6. Qual é o símbolo químico do ouro?",
    options: ["Go", "Ag", "Au", "Gd"],
    correct: 2
  },
  {
    question: "7. Em que continente está o Egito?",
    options: ["Europa", "África", "Ásia", "América"],
    correct: 1
  },
  {
    question: "8. Qual foi o primeiro presidente do Brasil?",
    options: ["Getúlio Vargas", "Deodoro da Fonseca", "Dom Pedro II", "Lula"],
    correct: 1
  },
  {
    question: "9. Qual é o plural de 'cidadão'?",
    options: ["Cidadões", "Cidadãos", "Cidadãs", "Cidadãsos"],
    correct: 1
  },
  {
    question: "10. Que número é representado pelos algarismos romanos 'XIV'?",
    options: ["12", "13", "14", "15"],
    correct: 2
  },
  {
    question: "11. Qual a capital do estado de Minas Gerais?",
    options: ["São Paulo", "Belo Horizonte", "Brasília", "Vitória"],
    correct: 1
  },
  {
    question: "12. A energia elétrica é medida em que unidade?",
    options: ["Ohm", "Ampère", "Volts", "Kilowatt-hora"],
    correct: 3
  },
  {
    question: "13. Quem pintou a Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Michelangelo", "Salvador Dalí"],
    correct: 0
  },
  {
    question: "14. Qual é a moeda oficial do Japão?",
    options: ["Yuan", "Iene", "Won", "Dólar"],
    correct: 1
  },
  {
    question: "15. Qual é a principal função dos pulmões?",
    options: ["Bombear sangue", "Filtrar toxinas", "Respiração", "Digestão"],
    correct: 2
  }
];

window.onload = function () {
  const quizForm = document.getElementById("quizForm");

  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("question");

    const title = document.createElement("p");
    title.textContent = q.question;
    div.appendChild(title);

    q.options.forEach((option, i) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${index}`;
      input.value = i;
      label.appendChild(input);
      label.appendChild(document.createTextNode(" " + option));
      div.appendChild(label);
    });

    quizForm.appendChild(div);
  });
};

function submitQuiz() {
  alert("Respostas enviadas com sucesso! Aguarde o contato da instituição.");
}
