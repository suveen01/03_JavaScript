/* HTML 문서에서 얻어온 값의 자료형은 무조건 string(문자열)!!*/

// 계산기 동작 코드

// 전역 변수(어디서든 사용 가능한 변수) 선언

// document : html 문서

// .(점 연산자) : 내부(하위) 접근 연산자
// get : 얻다
// Element : HTML 요소
// ById("input1") : id가 "input1"으로 일치하는

// -> 문서 내에서 id가 일치하는 요소 얻어오기

// 변수: memory에 값을 저장하는 공간
// id가 일치하는 input 요소를 얻어와 변수에 저장
const input1  = document.getElementById("input1");
const input2  = document.getElementById("input2");
const calcResult = document.getElementById("calcResult")

/*  Number(input1.value)가 계속 반복되는데 전역 변수로 선언하면 안될까?
    -> 안된다

    왜? 전역 변수는 페이지 로딩 시점에 해석되서 값이 결정된다.
    -> input에 작성된 값이 없어서 Number(input1.value) == 0 
    
    -> (해결방법)
      값을 입력한 후 함수를 호출해서 
      함수가 호출되는 시점의
      입력된 값을 읽어올 수 있게 만든다.
  */

const test1=0;  // Number(input1.value);
const test2=0; //  Number(input2.value);




/** 더하기 함수(DOC 주석, 함수 설명 작성용 주석) */
function plusFn(){

  // input1.value : #input1 요소에 작성된 값(string) 얻어오기

  // Number('숫자형태 문자열') : '숫자형태 문자열' -> 숫자로 변경
  // 단, '숫자형태 문자열'이 아닐 경우 NaN(Not a Number) 결과 반환 
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);

  console.log("두 수의 합 : ", value1 + value2);
  // string + string -> 이어쓰기
  // number + number -> 덧셈

  // 결과(#calcResult)의 내용(innerText)으로 출력
  calcResult.innerText = value1 + value2;
}

/** 빼기 함수 */
function minusFn(){
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);

  calcResult.innerText = value1 - value2;

}

/** 곱하기 함수*/
function multiFn(){
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);

  calcResult.innerText = value1 * value2;
}
/** 나누기 함수*/
function divFn(){
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);

  calcResult.innerText = value1 / value2;

  //  calcResult.innerText = Number(input1.value)/Number(input2.value)
}
/** 나누기 함수*/
function modFn(){
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);

  calcResult.innerText = value1 % value2;
}

//------------------------------------------------------------------------------------------------------------


/* 산술 연산자 응용 */

const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const calcResult2 = document.getElementById("calcResult2");

/** 첫 번째 값 x2 */
function doubleFn(){
  const val = Number(input3.value);
  calcResult2.innerText = val * 2;

 
}

/** 두 번째 값 제곱 */

function squareFn() {
  const val = Number(input4.value)
  calcResult2.innerText =  val * val
}

// 모든 산술 연산 결과 일괄 출력

function allOperationFn(){
  // 함수가 호출되는 시점의 input 값을 얻어와 변수에 저장
  const v1 = Number(input3.value); /* 함수가 호출되는 첫 번째 값 */
  const v2 = Number(input4.value); /* 함수가 호출되는 두 번째 값 */

  //각각의 연산 결과를 별도의 변수에 저장
  const plus = v1 + v2;
  const minus = v1 - v2;
  const multi = v1 * v2;
  const div = v1 / v2;
  const mod = v1 % v2;

  // 요소.innerText = "문자열" ;
  // -> <span>내용</span> 내용 부분에 "문자열" 대입
  // - HTML 코드 해석 X 

  // 요소.innerHTML = "문자열" ;
  // -> <span>내용</span> 내용 부분에 "문자열" 대입
  // - HTML 코드 해석 O
  
  
  calcResult2.innerHTML =
  "<ul>"
    +"<li> + 결과 : " + plus  + "</li>"
    +"<li> - 결과 : " + minus + "</li>"
    +"<li> * 결과 : " + multi + "</li>"
    +"<li> / 결과 : " + div   + "</li>"
    +"<li> % 결과 : " + mod   + "</li>"
  " + </ul>";


  const countResult = document.getElementById("countResult")

  // 증감 연산자를 이용해 1씩 증가하는 함수
  function increase(){
    // 1) countResult에 작성된 내용(숫자) 얻어오기

    let count = Number(countResult.innerText);

    // 2) 얻어온 숫자를 1 증가 시켜 출력하기
    countResult.innerText = ++count;
  }



  // 증감 연산자를 이용해 1씩 감소하는 함수
  function decrease(){
    let count = Number(countResult.innerText);
    countResult.innerText = --count;
  }



  // 전위/후위 연산 확인하기

  function checkFn(){

    let num = 100;
    //num 값이 1 증가한 후 console 에 출력
    console.log("++num : ", ++num); //101
    console.log("++num : ", ++num); //102
    console.log("++num : ", ++num); //103

  }

  //후위 연산 : 다른 여산 보다도 나중에 실행

 console.log("num++ : ", num++);


 //문제
 let a = 10;
 let b = 5;
 let c = ++a * b--

 //최종 a, b, c 의 값은?

// a : 11
// b : 4
// c : 55

  console.log(a, b, c)
}

