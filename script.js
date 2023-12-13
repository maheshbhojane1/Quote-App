
let quote = document.getElementById('quote');
let author = document.getElementById("author");
let button = document.getElementById("btn");


const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url).then((data) => data.json())
        .then((item) => {
            console.log(item);

            quote.innerText = item.content;
            author.innerText = item.author;
        })
}




button.addEventListener("click", getQuote)