const colors =["green","red","yellow","blue"];
const btn = document.getElementById("bttn");
const color = document.querySelector(".ncolor");

btn.addEventListener("click",()=>{
    var randomNumber = Math.round(Math.random()*3);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})