let id = new URLSearchParams(window.location.search).get("id");

let divv = document.querySelector(".all1");
fetch(`http://localhost:3000/robots/${id}`)
    .then(res => res.json())
    .then(data => {
           console.log(data);
        divv.innerHTML += `
        <div class="robot4">
    <div class="robot-img">
    <img src="${data.image}">
  </div>
  <div class="robot-text">
    <h4>${data.name}</h4>
    <p>${data.description}</p>
  </div>
  </div>
        `
    })