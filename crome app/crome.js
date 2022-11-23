let links = [];
const intext = document.getElementById("text");
const savBtn = document.getElementById("btnsave");
const oderli = document.getElementById("ulol")
let leadsfrm = JSON.parse(localStorage.getItem("mylead"))

if(leadsfrm){
    links=leadsfrm;
    render();
}

btntabsav.addEventListener("click",()=>{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        links.push(tabs[0].url)
        localStorage.setItem("mylead",JSON.stringify(links))
        render();
    })
   

})
function render(){
    let listItems=""
    for(i=0; i< links.length; i++){
        listItems += `
        <li>
            <a target='_blank' href='${links[i]}'>${links[i]}</a></li>`;
    }
    oderli.innerHTML= listItems
    
}

savBtn.addEventListener("click",function() {
    links.push(intext.value)
    render();
    intext.value=null;
    localStorage.setItem("mylead",JSON.stringify(links))
  
})


btndelete.addEventListener("click",()=>{
    localStorage.clear();
    links=[]
    render();
})

