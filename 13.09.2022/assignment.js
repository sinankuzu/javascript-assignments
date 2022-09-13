// ***1. soru***

naber = "naber";

const myReverse = function(x){
    ters = x.split("").reverse().join("");
    return ters;
}

console.log(myReverse(naber));



// ***2. soru***

naber2 = "naber iyi misin"

const myReverse2 = function(x){
    ters = x.split(" ").reverse();
    return ters;
}

console.log(myReverse2(naber2));

// ***3.soru***

naber3 = [1,4,7,9];
naber4 = [3,7,11,18];

const myMerge = function(x,y){
    if (x.length == 0 || y.length == 0){
        console.log("bos array islem yapilmaz.");
    }
    else{
        birles = x.concat(y);
        birles.sort((a, b) => a - b);
        return birles;
    }
}

console.log(myMerge(naber3,naber4));