const myCards = document.querySelector(".cards");

fetch("./tv-shows.json").then((res) => res.json())
// ((data) => console.log(data))