const todoButton = document.querySelector("#todo-button");
const todoLi = document.querySelector("#todo-ul");
const todoInput = document.querySelector("#todo-input");
const myIcon = document.createElement("fa-check");

const myToplam = document.querySelector("#toplam");
const myTamamlanan = document.querySelector("#tamamlanan");
const myList =[]
todoButton.onclick = () => {
  
  todoLi.innerHTML += `<li><i class="fa-solid fa-check"></i> <p>${todoInput.value}</p><i class="fa-solid fa-trash"></i></li>`;
  myList.push(todoInput.value);
  myToplam.innerHTML++;
  todoInput.value = "";
  console.log(myList);
};

todoLi.onclick = (e) => {
  if (e.target.classList.contains("fa-trash")) {
    
    myToplam.innerHTML--;
    myList.remove(e)
    if (
      myTamamlanan.value == myToplam.value &&
      e.target.parentElement.classList.contains("checked")
    ) {
      myTamamlanan.innerHTML--;
    }
  } else if (e.target.parentElement.classList.contains("checked")) {
    e.target.parentElement.classList.remove("checked");
    myTamamlanan.innerHTML--;
  } else if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.classList.add("checked");
    myTamamlanan.innerHTML++;
  } else {
    alert("buraya basmayin");
  }
};
