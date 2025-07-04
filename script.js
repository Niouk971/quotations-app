const formulaire = document.getElementById('form');
const name = document.getElementById('name');
const bouton = document.getElementById('submit');

function getTheValue(text, author) {
    let text = document.getElementsByClassName('text');
    let author = document.getElementsByClassName('author');
}

console.log(getTheValue(text, author))

formulaire.addEventListener(submit, () => {
    console.log("test")
})
