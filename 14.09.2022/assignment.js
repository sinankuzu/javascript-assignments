const fiyatlar=[100,250,50,89]

fiyatlar.forEach((fiyat, i, liste) =>{
liste[i]=fiyat + (fiyat * 0.1);

})

console.log(fiyatlar);

filterFiyatlar = fiyatlar.filter((fiyat)=>fiyat > 90);
console.log(filterFiyatlar);


console.log(fiyatlar.forEach((fiyat, i, liste) => {
  if (fiyat[i] < 110){
    liste[i] = fiyat + fiyat * 0.1;
    console.log(i);
  }
}))   