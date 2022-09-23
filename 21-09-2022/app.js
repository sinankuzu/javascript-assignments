const myTable = document.querySelector(".table1");
const myButton = document.querySelector(".hesapla");
const krediMiktari = document.querySelector(".kredi-miktari").value;
const krediTipi = document.querySelector(".kredi-tipi").value;
const myVade = document.querySelector(".vade").value;
const toplamTutar = document


myButton.onclick = () =>{
    const krediMiktari = document.querySelector(".kredi-miktari").value;
    const krediTipi = document.querySelector(".kredi-tipi").value;
    const myVade = document.querySelector(".vade").value;
    const krediTutari = 0;
    let faizOrani =0;
    if(select.value == "Konut Kredisi"){
      faizOrani = 1.29;
    }

    else if(select.value == "Ihtiyac Kredisi"){
      faizOrani = 1.99;
    }

    else if(select.value == "Arac Kredisi"){
     faizOrani= 1.79;
    }
    const faiz = 100 / faizOrani;
    const taksitTutari = krediMiktari * faizOrani
    const toplamTutar = taksitTutari + krediMiktari;
    
      
      myTable.innerHTML = `<table class="table table-bordered border-warning  mt-4">
  <body>
    <tr>
      <th>Kredi Miktari</th>
      <td>${krediMiktari} ₺</td>
      <th>Kredi Tipi</th>
      <td>${krediTipi}</td>
      </tr>
       <tr>
        <th>Vade</th>
       <td>${myVade} ₺</td>
       <th>Kredi Tipi</th>
      <td>${faizOrani}</td>
    </tr>
    <tr>
        <th>Vade</th>
       <td>${toplamTutar} ₺</td>
       <th>Kredi Tipi</th>
      <td>${krediTutari}</td>
    </tr>
   
    
  </body>
</table>;`
}

