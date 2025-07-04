const formulaire = document.getElementById('form');
const citation = document.getElementById('citation');
const nom = document.getElementById('name');
const button = document.getElementById('submit');
// const quote = document.getElementsByClassName('quote');

let text = document.getElementsByClassName('text');
let author = document.getElementsByClassName('author');
let quote = document.getElementsByClassName('quote');

console.log(formulaire);
console.log(citation);
console.log(nom);
console.log(button);
console.log(quote);

console.log(text);
console.log(author);

// function getTheValue(text, author) {
//     console.log(text);
//     console.log(author);
// }

formulaire.addEventListener('input', () => {
    console.log("test")
})

button.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log("test2")
    event.preventDefault()
})

function addQuote(citation, nom) {
    citation = document.createElement('p');
    citation.innerText = "test"
    nom = document.createElement('p');
    nom.innerText = "test2"
    quote = document.createElement('div');
    quote.innerText = `${citation} ${nom}`
}

console.log(addQuote('Citation : "On ne naît pas femme, on le devient".', 'Autrice : Simone de Beauvoir'));

