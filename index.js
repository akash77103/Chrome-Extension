const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")
let myLeads=[]
let oldLeads=[]

let leadsfromLocalStorage=JSON.parse( localStorage.getItem("myLeads"))
console.log(leadsfromLocalStorage)

if(leadsfromLocalStorage){
    myLeads=leadsfromLocalStorage
    render(myLeads)
}
function render(leads){
    let listItems=""
for(let i=0;i<myLeads.length;i++){
    // listItems+="<li><a href='"+myLeads[i]+"' target='_blank'>"+myLeads[i]+"</a></li>"
       listItems+=`<li>
       <a href='${leads[i]}' target='_blank'>
       ${leads[i]}
       </a>
       </li>`
    // const li=document.createElement("li")
    // li.textContent=myLeads[i]
    // ulEl.append(li)
    console.log(listItems)
}
ulEl.innerHTML=listItems
}
deleteBtn.addEventListener('click',function(){
    console.log("double")
    localStorage.clear()
    myLeads=[]
    render(myLeads)
   
})
tabBtn.addEventListener("click",function(){
    
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
       render(myLeads)
    })
   
})

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
     inputEl.value=""
     localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
   
    
})


