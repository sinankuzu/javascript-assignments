// ---------SORU 1------------

let sayac = 0;
let toplamSayi = 0;
let tut = 0;

while (true) {
  sayilar = prompt("lutfen bir sayi giriniz").toLowerCase();

  if (sayilar != "q") {
    toplamSayi = Number(sayilar) + Number(tut);
    tut = toplamSayi;
    sayac = sayac + 1;
    console.log(
      `suan icin sayilarin toplami ${toplamSayi} ve toplam girilmis sayi ${sayac}`
    );
  } else if (sayilar == "q") {
    ortalama = toplamSayi / sayac;
    console.log(`girdiginiz sayilarin ortalamasi ${ortalama}`);
    alert(`girdiginiz sayilarin ortalamasi ${ortalama}`);

    break;
  }
}

// // --------- SORU 2:TEKRAR OYNAMA VE CIKMA SECENEKLI TAHMIN OYUNU-------
// calistir = true;
// while (calistir) {
//   const rastgele = Math.ceil(Math.random() * 20);

//   let hak = 5;

//   while (hak > 0) {
//     const tahmin = +prompt("0-20 arasinda bir sayi giriniz.");
//     hak--;

//     if (tahmin == rastgele) {
//       console.log("tebrikler bildiniz");
//       break;
//     } else if (tahmin < rastgele) {
//       console.log(`dikkat ${hak} hakkiniz kaldi!`);
//       console.log("ARTTIR 📈");
//     } else if (tahmin > rastgele) {
//       console.log(`dikkat ${hak} hakkiniz kaldi!`);
//       console.log("AZALT 📉");
//     }

//     if (hak == 0) {
//       console.log("oyunu kaybettiniz");
//     }
//   }
//   console.log("tekrar oynamak istiyorsaniz e'ye cikmak icin h'ya basiniz");
//   tekrarOyna = prompt(
//     "tekrar oynamak istiyorsaniz e'ye cikmak icin h'ya basiniz"
//   );
//   if (tekrarOyna == "h") {
//     console.log("kendine iyi bak!!");
//     break;
//   } else if (tekrarOyna == "e") {
//     console.log("Oyun tekrardan basliyor!");
//   } else {
//     alert(
//       "yanlis bir giris yaptiniz. oyun otomatik olarak sonlandiriklaciktir."
//     );
//     break;
//   }
// }
