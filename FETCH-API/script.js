

const myData = fetch("./tv-shows.json").then((res) => res.json()).then((data) => ekranagetir(data));
const myButton = document.querySelector(".buton");

const ekranagetir = (osman) => {
    const myCards = document.querySelector(".cards");
    
    osman.forEach(ahmet => {
       
       
          myCards.innerHTML += `<div class="container border">
          <div class="card text-center" style="width: 18rem;">
  <img class="card-img-top" src="${ahmet.show.image.medium}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${ahmet.show.name}</h5>
    <a href="#" class="btn btn-primary buton">Detaylar</a>
  </div>
</div>
</div>`;
});

}

myButton.onclick = () => {
  myCards.innerHTML += `<div class="container border">
          <div class="card text-center" style="width: 18rem;">
  <img class="card-img-top" src="${ahmet.show.image.medium}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${ahmet.show.name}</h5>
    <a href="${ahmet.show.url}" class="btn btn-primary">Detaylar</a>
    <a href="#" class="btn btn-primary">Detaylar</a>
  </div>
</div>
</div>`;
};
