// ---------SORU 1------------

let sayac = 0;
let toplamSayi = 0;
let tut = 0;

while (true) {
  sayilar = prompt("lutfen bir sayi giriniz");

  if (sayilar != "q") {
    toplamSayi = sayilar + tut;
    tut = toplamSayi;
    sayac = sayac + 1;
    console.log(
      `suan icin sayilarin toplami ${toplamSayi} ve toplam girilmis sayi ${sayac}`
    );
  } else if (sayilar == "q" || sayilar == "Q") {
    ortalama = toplamSayi / sayac;
    console.log(`girdiginiz sayilarin ortalamasi ${ortalama}`);
    alert(`girdiginiz sayilarin ortalamasi ${ortalama}`);

    break;
  }
}
