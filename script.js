const perguntas = [
  {
    texto: "1. Quem foi o autor de 'Dom Casmurro'?",
    alternativas: ["José de Alencar", "Carlos Drummond de Andrade", "Machado de Assis"],
    correta: "Machado de Assis"
  },
  {
    texto: "2. Qual é o resultado de 8 × 7?",
    alternativas: ["56", "54", "64"],
    correta: "56"
  },
  {
    texto: "3. Em que continente fica o Brasil?",
    alternativas: ["Europa", "Ásia", "América do Sul"],
    correta: "América do Sul"
  },
  {
    texto: "4. Qual o símbolo químico da água?",
    alternativas: ["H2O", "CO2", "O2"],
    correta: "H2O"
  },
  {
    texto: "5. Quem descobriu o Brasil?",
    alternativas: ["Cristóvão Colombo", "Dom Pedro I", "Pedro Álvares Cabral"],
    correta: "Pedro Álvares Cabral"
  },
  {
    texto: "6. Quanto é a raiz quadrada de 49?",
    alternativas: ["6", "7", "8"],
    correta: "7"
  },
  {
    texto: "7. Qual é o planeta mais próximo do Sol?",
    alternativas: ["Vênus", "Mercúrio", "Terra"],
    correta: "Mercúrio"
  },
  {
    texto: "8. Qual é a capital da Argentina?",
    alternativas: ["Buenos Aires", "Santiago", "Lima"],
    correta: "Buenos Aires"
  },
  {
    texto: "9. O que é uma célula?",
    alternativas: ["Tipo de átomo", "Unidade básica da vida", "Forma geométrica"],
    correta: "Unidade básica da vida"
  },
  {
    texto: "10. Qual desses é um bioma brasileiro?",
    alternativas: ["Deserto do Saara", "Cerrado", "Savana africana"],
    correta: "Cerrado"
  },
  {
    texto: "11. Qual é o maior osso do corpo humano?",
    alternativas: ["Fêmur", "Úmero", "Tíbia"],
    correta: "Fêmur"
  },
  {
    texto: "12. Quem pintou a Mona Lisa?",
    alternativas: ["Van Gogh", "Leonardo da Vinci", "Michelangelo"],
    correta: "Leonardo da Vinci"
  },
  {
    texto: "13. O que significa a sigla ONU?",
    alternativas: ["Organização Nacional Unida", "Ordem das Nações Unidas", "Organização das Nações Unidas"],
    correta: "Organização das Nações Unidas"
  },
  {
    texto: "14. Em que ano o Brasil foi proclamado república?",
    alternativas: ["1822", "1500", "1889"],
    correta: "1889"
  },
  {
    texto: "15. Qual desses é um elemento químico?",
    alternativas: ["Ouro", "Plástico", "Água"],
    correta: "Ouro"
  }
];

const container = document.getElementById("perguntas");

perguntas.forEach((pergunta, i) => {
  const div = document.createElement("div");
  div.className = "pergunta";
  div.innerHTML = `<p>${pergunta.texto}</p>`;

  // Embaralhar as alternativas
  const alternativas = [...pergunta.alternativas].sort(() => Math.random() - 0.5);

  alternativas.forEach((alt) => {
    const id = `q${i}_${alt}`;
    div.innerHTML += `
      <input type="radio" name="q${i}" value="${alt}" id="${id}" required>
      <label for="${id}">${alt}</label><br>
    `;
  });

  container.appendChild(div);
});
