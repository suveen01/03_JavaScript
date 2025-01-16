

 const container = document.querySelector(".container"); 
 const display = document.querySelector("#display");     
 const keys = document.querySelectorAll(".key"); 
 const addBtn = document.querySelector("#add"); 
 const reset = document.querySelector("#reset"); 
 const numberContainer = document.querySelector(".number-container");
 const numList = document.querySelectorAll("#number-list");

 for(let key of keys){

   key.addEventListener("click", ()=>{
   /*  console.log(key.innerText); */
     display.innerText += key.innerText;
    
   });
 }

 addBtn.addEventListener("click", ()=>{
   // console.log(display.innerText);
   numberContainer.innerText = display.innerText;
  
 });
  // const counter = createCounter(); // list 창출 


  reset.addEventListener("click", () => {
    display.innerText = "";    
    numList.innerHTML = "";      
    counter = 1;                 
  }); // 초기화

 


