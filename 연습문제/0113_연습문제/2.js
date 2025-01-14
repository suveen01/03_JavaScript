const numbers = document.querySelectorAll(".number"); //버튼
const result = document.querySelector("#result");     //결과
const reset = document.querySelector("#reset");       //chrlghk

//향상된 for문 - 배열의 모든 요소에 대한 순차접근
for(let num of numbers){

  num.addEventListener("click", (e)=>{

    if(result.innerText.length >= 10){
      alert("10자까지만 입력할 수 있습니다");
      return;
    }
    //e.target => 이벤트가 발생된 요소
    //textContent === innerText
    result.innerText += e.target.innerText;
  }); 
}

reset.addEventListener("click", ()=>{
  result.textContent=""; //누적된 번호 삭제
});