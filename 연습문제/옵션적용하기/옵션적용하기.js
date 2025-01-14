/* const width = document.querySelector(".width");
const height = document.querySelector(".height");
const fontSize = document.querySelector(".fontSize");
const fontWeight = document.querySelector(".fontWeight");
const BGC = document.querySelector(".BGC");
const transverse = document.querySelector(".transverse");
const length = document.querySelector(".length");
const printFont = document.querySelector(".printFont"); */


const applyBtn = document.querySelector("#applyBtn");
const box = document.querySelector("#box");
const boxWidth = document.querySelector("#boxWidth");
const boxHeight = document.querySelector("#boxHeight");
const fs = document.querySelector("#fs");


/* 
    처음 HTML 로딩 시 
    const fw = document.querySelector("[name=fw]:checked");
*/

//적용 버튼 클릭 시
applyBtn.addEventListener("click", ()=>{

  //너비
  box.style.width = boxWidth.value + "px";

  //높이
  box.style.Height = boxHeight.value + "px";

  //글자크기
  box.style.fontSize = fs.value + "px";

  //굵기

  /* 왜 이벤트 핸들러 안에 요소 선택 구문을 작성했을까?
    -> 클릭되는 시점에 체크된 요소를 얻어오기 위해서
  */
  const fw = document.querySelector("[name=fw]:checked");
  // name속성이 fw인 요소중 체크가 되어있는 요소 1개만 선택
  // :checked -> 체크된 요소만 선택(상태 선택자); 

  box.style.fontWeight = fw.value;

  
})


