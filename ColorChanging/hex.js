let hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("bttn");
const color = document.querySelector(".ncolor");
function randomNumber() { 
    return Math.floor(Math.random()*hex.length);}
    
btn.addEventListener("click",()=>{
    var hexcolor = "#";
    for(let i=0;i<6;i++){
        hexcolor += hex[randomNumber()];

    }
    document.body.style.backgroundColor = hexcolor;
    color.textContent=hexcolor; 
})