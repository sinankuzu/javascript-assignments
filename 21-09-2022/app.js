const myTable = document.querySelector(".table1")
const myButton = document.querySelector(".hesapla")
const x = document
const y =1

myButton.onclick = () =>{
myTable.innerHTML = `<table class="table table-bordered border-warning  mt-4">
  <tbody>
    <tr>
      <th>Kredi Miktari</th>
      <td>${x} ₺</td>
      <th>Kredi Tipi</th>
      <td>${y}</td>
    </tr>
    ..............
  </tbody>
</table>;`
}

