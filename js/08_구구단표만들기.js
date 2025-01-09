/* 구구단표 만들기 */

function createTable(){
  /* 시작, 종료 단 input 요소 얻어오기 */
  const startInput = document.getElementById("start")
  const endInput = document.getElementById("end")

  /* 테이블 머리(단 입력 영역) */
  const thead = document.getElementById("thead")

  /* 테이블 바디(구구단표 출력 영역) */
  const tbody = document.getElementById("tbody")


  //---------------------전역변수-----------------------------------

  //기존에 남아있던 표를 삭제하는 작업을 먼저 해야함
  thead.innerHTML="";
  tbody.innerHTML="";
  //inner의 개념 : ex) <thead>@@@@</thead> 가 있으면 @@@@가 inner 임 / 위에 있는 코드는 시작 종료 태그 사이 내용을 빈칸으로 바꾼 것 -> 삭제효과

  //시작 또는 종료 단이 입력되지 않은 경우
  // -> alert("시작/종료 단을 입력 해주세요.");

  //시작 또는 종료 단에 음수가 입력된 경우
  // -> alert("1 이상의 수만 입력 해주세요.");

  //시작 단이 종료 단보다 큰 경우
  // -> alert("시작 단이 종료 단보다 클 수 없습니다.");


  

  if(startInput.value.length === 0 || endInput.value.length === ""){
    alert("시작/종료 단을 입력 해주세요.");
    return; 
  } 

  const start = Number(startInput.value);
  const end = Number(endInput.value);

  if(start < 0 || end < 0){
    alert("1 이상의 수만 입력 해주세요.");
    return;
  }
  if(start > end){
    alert("시작 단이 종료 단보다 클 수 없습니다.");
    return;
  }
  // ----------------------특정상황 거르기--------------------------------------

  /* 구구단 표 만들기 코드 작성 */

  // #thead에 들어갈 html 코드 생성
  let output1 = '<tr>';
  for(let num=start ; num<=end ; num++){  //<th></th> 생성
    output1 += `<th>${num}단</th>`
  }
  output1 +='</tr>';

  //생성한 html 코드를 HTML 문서에 추가 -> 출력
  thead.innerHTML=output1;  

  // 구구단 표 몸통 부분

  //곱해지는 수(1~9) + tr태그의 개수
  for(let num = 1 ; num <= 9 ; num++){
    let tr = "<tr>";

    // <td>단 x num = 결과</td> 생성
    for(let dan = start ; dan<=end ; dan++){
      tr += `<td>${dan} x ${num} = ${dan * num}</td>`;
    }

    tr += "</tr>"; //<tr>1</tr>

      //for end -> tr 한 줄 생성
  // -> 화면에 추가

  tbody.innerHTML += tr;
  }
}