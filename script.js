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
