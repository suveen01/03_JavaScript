

const createBtn = document.querySelector("#btn");
const container = document.querySelector("#container");
const count = document.querySelector("#count");
const result = document.querySelector("#result");


createBtn.addEventListener("click", ()=>{

  const val = Number(count.value);

  container.innerHTML="";
  for(let i=0 ; i<val ; i++){
    const input = document.createElement("input");
    input.className = "input-number";
    input.type = "number";
  
    container.append(input);
  }
});


const sumBtn = document.querySelector("#sumBtn");


sumBtn.addEventListener("click", ()=>{
  // 계산 버튼이 클릭되는 시점에 존재하는
  // .input-number 요소를 모두 얻어와
  // 작성된 값의 합계를 구해서 출력하기
  const inputs = document.querySelectorAll(".input-number");
  let sum = 0;

  for(let input of inputs){
    sum += Number(input.value);
  }

  result.innerText = sum;
});


