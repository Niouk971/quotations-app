const form = document.getElementById('form');
const citation = document.getElementById('citation');
const nom = document.getElementById('nom-auteur');
const button = document.getElementById('submit');

let quoteCount = 0


console.log(form);
console.log(citation);
console.log(nom);
console.log(button);



form.addEventListener('submit', (event) => {

    event.preventDefault()
    const text = document.getElementById('citation').value;
    const author = document.getElementById('nom-auteur').value;
    console.log(text);
    console.log(author);

    addQuote(text, author);
})

function addQuote(text, author) {

    quoteCount ++
    document.getElementById('count').innerText = `${quoteCount} citations`

    const paragraphText = document.createElement('p');
    paragraphText.classList.add('text');
    paragraphText.innerText = text;

    const paragraphAuthor = document.createElement('p');
    paragraphAuthor.classList.add('author');
    paragraphAuthor.innerText = author;

    const divQuote = document.createElement('div');
    divQuote.classList.add('quote');

    divQuote.appendChild(paragraphText);
    divQuote.appendChild(paragraphAuthor);

    document.getElementById('quote-list').appendChild(divQuote);

}


// Correction simplifiée


// Voici la version simplifiée

// const form = document.getElementById("quote-form")
// let quotes = [];


// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const quote = document.getElementById("quote-text").value.trim();
//   const author = document.getElementById("quote-author").value.trim();

//   console.log("quote is", quote)
//   console.log("author is", author)

  
//   quotes.push({ text: quote, author: author });
//   localStorage.setItem("quotes", JSON.stringify(quotes));

// const storedQuotes = localStorage.getItem("quotes");
// console.log(storedQuotes)
// });


// Correction complète


// Et la version complète:

// Variable globale pour compter les citations
// let quoteCount = 0;
// Tableau vie pour receuillir les citations
// let quotes = [];

// Fonction d'affichage d'une citation dans le DOM 
// function renderQuote(quote, author) {
//   const textP = document.createElement("p");


//   const authorP = document.createElement("p");
 

//   const quoteDiv = document.createElement("div");
  
//   quoteDiv.appendChild(textP);
//   quoteDiv.appendChild(authorP);

//   document.getElementById("quote-list").appendChild(quoteDiv);

//   quoteCount += 1;
//   document.getElementById("count").innerText = `${quoteCount} citation${quoteCount > 1 ? "s" : ""}`;
// }

// Fonction d'ajout dans le stockage 
// function addQuote(quote, author) {
//   quotes.push({ text: quote, author: author });
//   localStorage.setItem("quotes", JSON.stringify(quotes));
//   renderQuote(quote, author);
// }

// Chargerment des citations depuis le localStorage
// const storedQuotes = localStorage.getItem("quotes");

// if (storedQuotes) {
//   quotes = JSON.parse(storedQuotes);
//   document.getElementById("quote-list").innerHTML = ""; // Vider d'abord quote-list
//   quoteCount = 0; // Réinitialiser le compteur aussi
//   quotes.forEach(({ text, author }) => {
//     renderQuote(text, author); 
//   });
// }

// Ecouteur d‘événement sur le formulaire

// document.getElementById("quote-form").addEventListener("submit", function (event) {
//   event.preventDefault();
//   const quote = document.getElementById("quote-text").value.trim();
//   const author = document.getElementById("quote-author").value.trim();

//   if (quote && author) {
//     addQuote(quote, author);

    // Vide les champs du formulaire
//     document.getElementById("quote-text").value = "";
//     document.getElementById("quote-author").value = "";
//   }
// });