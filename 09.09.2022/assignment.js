
// let taban = 0;
// let yukseklik = 0;

// const ucgenAlan = (taban, yukseklik)=> (taban * yukseklik) / 2;


// // *****************kare al kup al us al******
// let x =0;

// const kareAl = (sayi) => sayi ** 2;

// const kupAl = (sayi) => sayi ** 3;

// const usAl = (sayi, us) => sayi ** us;




// ************** artik yil ************

let yil = prompt("lutfen bir yil giriniz")

const artikYil = function(x){
    if (yil % 4 == 0 && (yil % 100 != 0 || yil % 400 == 0))
    return "girdiginiz yil artik yildir";

    else{
        return "girdiginiz yil artik yil degildir";
    }
} 

console.log(artikYil(yil));

