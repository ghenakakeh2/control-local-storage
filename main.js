//selcte all element we need
let allspan =document.querySelectorAll(".buttens span");
let result =document.querySelector(".resultes > span");
let theinput=document.getElementById("the-input")

allspan.forEach((span) => {
    span.addEventListener("click",(e) => {
      if(e.target.classList.contains("Check-Item")){
        cheackItem();
      }
      if(e.target.classList.contains("Add-Item")){
        AddItem();
      }    
      if(e.target.classList.contains("Delete-Item")){
        DeleteItem();
      }   
       if(e.target.classList.contains("Show-Item")){
        ShowItem();
      }
    })
    
});
//function cheacl input if is empty
function cheakInput(){
    
        result.innerHTML="Input Cant Be Empty"
    
}

function  cheackItem(){
    if(theinput.value!==''){
      if(localStorage.getItem(theinput.value)){
        result.innerHTML=`Found local Item called <span>${theinput.value}</span>`
      }
      else{
        result.innerHTML=`No local Item With The Name <span>${theinput.value}</span>`

      }
    }
    else{
        cheakInput();
    }
   
}


function   AddItem(){
    if(theinput.value!==''){
       localStorage.setItem(theinput.value,"test");
       result.innerHTML=`Local Storage Item  <span>${theinput.value}</span> Added`;
       theinput.value="  "

      }
      else{
          cheakInput();
      }
}



function   DeleteItem(){
    if(theinput.value!==''){
        if(localStorage.getItem(theinput.value)){
            localStorage.removeItem(theinput.value);
            result.innerHTML=`Found local Item  <span>${theinput.value}</span> deleted`

          }
          else{
            result.innerHTML=`No local Item With The Name <span>${theinput.value}</span>`

    
          }
       
          theinput.value="  "
 
       }
       else{
           cheakInput();
       }
}



function   ShowItem(){
    if(localStorage.length){
      result.innerHTML=' '
      for(let [key,value]of Object.entries(localStorage)){
        result.innerHTML+=`<span>${key}</span> <hr>`

      }
    }
    else{
        result.innerHTML=`Local storage Empty`

    }
}