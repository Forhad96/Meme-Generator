const memeBtn = document.querySelector(".meme_btn");
const memeImage = document.querySelector(".meme_img");
const memeTitle = document.querySelector(".meme_title")
const memeAuthor = document.querySelector(".meme_author");

const updateDetails = (url, title, author) =>{
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme By: ${author}`;
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme")
    .then((resp) => resp.json())
    .then((data) => {
        updateDetails(data.url, data.title, data.author);
    });

}

memeBtn.addEventListener("click",generateMeme);
