const quotes = [
    { Text: "O successo é a soma de pequenos esforços repetidos dia após dia.", author: "Robert Collier" },
    { Text: "A persistencia realiza o impossível.", author: "Provérbio Chinês" },
    { Text: "Acredite em si proprio e todo o resto virá naturalmente.", author: "Elon Musk" },
    { Text: "O unico lugar onde o sucesso vem antes do trabalho é no dicionário.", author: "Vidal Sassoon" },
    { Text: "Se voce nao mudar nada, nada mudará.", author: "Jim Rohn" },
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const button = document.getElementById("new-quote");

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { Text, author } = quotes[randomIndex];

    // Remove animação antes de mudar o texto
    quoteElement.classList.remove("show");

    setTimeout(() => { 
        quoteElement.textContent = Text;
        authorElement.textContent = `_${author}`;
        quoteElement.classList.add("show");
 }, 300);
}

button.addEventListener("click", newQuote);