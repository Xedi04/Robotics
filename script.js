let alldiv=document.querySelector(".robot-2")



fetch("http://localhost:3000/robots")
.then(res=>res.json())
.then(data=>{
data.forEach(element => {
    alldiv.innerHTML+=`
    <div class="robot4">
    <div class="robot-img">
    <img src="${element.image}">
  </div>
  <div class="robot-text">
    <h4>${element.name}</h4>
    <p>${element.description}</p>
    <button id="btn2"><a href="./details.html?id=${element.id}">VIEW DETAILS</a></button>
  </div>
  </div>`
});
})


let Btn=document.querySelector("robot4");
let Button=document.querySelector("#btn2");

Btn.addEventListener("mouseover", ()=>{
Button.style.backgroundColor="violet"
})


