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
    <button id="but1" onclick ="deleteRobot(${element.id})">Delete<?button>>
  </div>
  </div>`
});
})

function deleteRobot(id){
  axios.delete(`http://localhost:3000/robots/${id}`)
  window.location.reload();
}


let navbar=document.querySelector(".nav");

function nvbr (){
if(window.scrollY>50){
  navbar.style.backgroundColor="#8a90ff"
  navbar.style.transition = "all 1s ease"
}else{
  navbar.style.backgroundColor=""
}
}

window.addEventListener("scroll", nvbr);


let menuicon=document.querySelector("#menu-icon");
let body=document.querySelector("body");
let click=document.querySelector(".click");
let menu=document.querySelector(".menu");
let close1=document.querySelector("#close");
click.style.display="none"

menuicon.addEventListener("click", ()=>{
  click.style.display="flex";
})
close1.addEventListener("click", () => {
  click.style.display = "none"
})
click.addEventListener("click", (e)=>{
  if (e.target == click) {
    click.style.display = "none"
}
})



 let top1=document.querySelector("#top");

top1.addEventListener("click", ()=>{
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  })
})

function Topp(){
  if(window.scrollY>650){
    top1.style.display="block"
  }else{
    top1.style.display="none"
  }
}
window.addEventListener("scroll", Topp);