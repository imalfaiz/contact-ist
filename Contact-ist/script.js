let form = document.getElementById("form");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let contact = document.getElementById("contact");
let msg = document.getElementById("msg");
let lists = document.getElementById("lists");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (fname,lname,contact.value === "") {
    console.log("fail");
    msg.innerHTML = "Fields cannot be blank";
  } else {
    console.log("pass");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = [];

let acceptData = () => {
  data.push({
    fname: fname.value,
    lname: lname.value,
    contact: contact.value,
  });

  localStorage.setItem("data", JSON.stringify(data));

  createLists();
  console.log(data);
};

let createLists = () => {
  lists.innerHTML = "";
  data.map((x, y) => {
    return (lists.innerHTML += `
        <tr id=${y}>
          
          <td class="item">${x.fname} ${x.lname}</td>
          <td>${x.contact}</td>
          <td><i onClick="deleteList(this),createLists()" class="fas fa-trash-alt"></i></td>
        </tr>`);
  });

  resetForm();
};

let deleteList = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
};

let resetForm = () => {
  fname.value = "";
  lname.value = "";
  contact.value = "";
};

(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  createLists();
})();

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }