

const fiyatlar=[100,250,50,89]

fiyatlar.forEach((fiyat, i, liste) =>{
liste[i]=fiyat + (fiyat * 0.1);
console.log(fiyat);

})
console.log(fiyatlar);

// ******** 2. SORU ********** 

fiyatlar.filter((e) => e > 90).forEach((e) => console.log(e))

filterFiyatlar = fiyatlar.filter((fiyat)=>fiyat > 90);
console.log(filterFiyatlar);
console.log(fiyatlar);

// ******** 3. SORU **********
fiyatlar.filter((e) => e < 110).forEach((a)=>{ 
  a = a * 1.1;
  console.log(a);
})

// **alternatif**
fiyatlar.forEach((fiyat) => {
  if (fiyat < 110){
    fiyat = fiyat + fiyat * 0.1;
    console.log(fiyat);
  }
})  

// ******** 4. SORU **********

const maaslar=[3000,5000,4000,6000,6500];

yeniMaaslar = maaslar.filter((e)=> e <= 4000).map((e) => e = e + (e * 0.5));

console.log(yeniMaaslar);

// ******** 5. SORU **********
maaslar.filter((e) => e > 4000).forEach((e) =>{
  e = e + e * 0.25;
  console.log(e);
})