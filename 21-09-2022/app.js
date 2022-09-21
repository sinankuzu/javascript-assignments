const myTable = document.querySelector(".table1");
const myButton = document.querySelector(".hesapla");
const krediMiktari = document.querySelector(".kredi-miktari").value;
const krediTipi = document.querySelector(".kredi-tipi").value;

myButton.onclick = () =>{
    const krediMiktari = document.querySelector(".kredi-miktari").value;
    const krediTipi = document.querySelector(".kredi-tipi").value;
myTable.innerHTML = `<table class="table table-bordered border-warning  mt-4">
  <tbody>
    <tr>
      <th>Kredi Miktari</th>
      <td>${krediMiktari} ₺</td>
      <th>Kredi Tipi</th>
      <td>${krediTipi}</td>
    </tr>
    ..............
  </tbody>
</table>;`
}

