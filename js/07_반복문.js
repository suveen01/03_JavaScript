/* 
    for([1]초기식 ; [2]조건식 ; [4]증감식) {
      // [3] 조건식이 true일 경우 수행할 코드;
    }

    * 처음 for 문이 수행될 때만 [1] 초기식을 수행
      -> 두 번째 반복부터는 [2],[3],[4] 만 반복
*/

/** 콘솔에 12345 출력하기 */
function check1() {

  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);


  console.log("--------------")

  /* for문 버전 */
  for (let num = 1; num <= 5; num++) {
    console.log(num);
    // [초기식] -> let num = 1; 
    // -> 1이 저장된 변수 num을 선언

    //[조건식]
    // -> num 변수에 저장된 값이 5이하면 true
    // -> 반복0 == for 문 {} 내부 코드를 수행해라
    // -> num 변수에 저장된 값이 5 이하가 아니면 false
    //  -> 반복 x == for문 {} 내부 코드를 수행하지 말아라

    //[증감식] num++
    // -> num 변수에 저장된 반복 때 마다 값을 1 증가

  }
}


function check2() {
  for (let num = 1; num <= 10; num++) {
    console.log(num);
  }
}


function check3(){
  for(let num = 5 ; num<=13 ; num++){
    console.log(num);
  }
}

function check4(){
  let result = ""; //결과를 저장할 변수에 ""(빈칸) 대입

  for(let num=1 ; num<=7 ; num++){
    result += num; //result = result + num
  }
  console.log(result); //'1234567'
}

function check5(){
  let result = "";
  //result에 ""(빈칸)을 대입하는 이유 -> NaN 나옴
  // -> 변수 선언 시 아무런 값도 대입하지 않으면 undefined
  // -> undefined는 산술 연산의 대상이 될 수 없음
  // -> 산술 연산을 수행하면 NaN(Not a Number) 결과가 반환됨
  for(let num=4 ; num<=11 ; num++){
    result += num;
  }
  console.log(result);
}

// 1부터 10까지 1씩 증가한 숫자의 합 구하기
//check 4, 5와 유사하지만 저장 타입에 따라서 결과가 달라짐
function check6(){
  let sum = 0; // 합계를 저장할 변수를 선언, 0을 대입
               // -> 더하거나 뺐을 때 영향이 없는 숫자 0 대입
  for(let num=1 ; num<=10 ; num++){
    sum += num;
  }
  console.log(sum);
}

//입력 받은 값 사이 정수 값들의 합 구하기
function check7(){

  // 모든 값 입력 되어있고
  // 입력 1이 입력 2보다 작다고 가정
  const a = Number(document.getElementById("input7a").value);
  const b = Number(document.getElementById("input7b").value);

  let sum=0;
  for(let num=a; num<=b ; num++){
    sum += num;
  }
  alert(`${a}부터 ${b} 사이 정수 합 : ${sum}`);
}

// 1부터 10까지 2씩 증가한 숫자 출력 + 합계 구하기

function check8(){

  let sum =0; //합계

  for(let num=1 ; num <= 10 ; num += 2){
    console.log(num);
    sum += num;
  }
  console.log("합계 : ", sum);
}

//3부터 30까지 3의 배수만 출력하기
function check9(){
  // 1) 증감식 변경
  let result = ""; 
  for(let num = 3 ; num<=30 ; num+=3 ){
    result += num + " ";
  }
  console.log(result);

  // 2) for 문 + if 문
  let result2 = "";
  for(let num = 3 ; num<=30 ; num++){ //num 1씩 증가
    if(num % 3 === 0){ //3으로 나눳을 때 나머지 0 == 3의 배수
      result2 += num + " ";
    }
  }
  console.log(result2);
}

//입력 받은 범위 내 지정된 수의 배수를 출력(한 줄), 합계 구하기
//시작 : 5
//종료 : 20
//배수 : 3

// 6, 9, 12, 15, 18
// 합계:60
function check10(){


  const start = Number(document.getElementById("start10").value);
  const end = Number(document.getElementById("end10").value);
  const multiple = Number(document.getElementById("multiple10").value);
  
 /*  let sum =0;
  let result = "";
  for(let num = a ; num<=b ; num++ ){
    if(num % c === 0)
    result += num + " ";
    sum
  }
  console.log(result);
  console.log("합계 : ", sum); */

  //배수를 한 줄로 출력할 변수
  let result = "";

  //합계를 저장할 변수
  let sum = 0;

  //start부터 end까지 1씩 증가하는 num이
  //multiple로 나눴을 때 나머지가 0인 경우
  // ==num이 multiple의 배수인 경우
  for(let num = start ; num<=end ; num++){
    if(num % multiple === 0){
      result += num + " "; //출력 문자열 누적
      sum    += num; //합계 누적
    }
    console.log(result);
    console.log("합계 : ", sum);
  }
 }

function check11(){
  
  //2단에 곱해지는 수가 1~9까지 1씩 증가
  //곱셈 결과가 1~9까지 1씩 증가한 수에 2를 곱한 값
  for(let num=1; num<=9 ; num++){
    console.log(`2 x ${num} = ${num*2}`);
  }
}

function check12(){

  const dan = document.getElementById("dan12");

  if(dan.value.length === 0){
    alert("단을 입력 해주세요");
    return;
  }

  const val = Number(dan.value);
  if(val > 9 || val < 2){
    alert("2~9단 사이만 입력 해주세요");
    return;
  }
  for(let num=1; num<=9 ; num++){
    console.log(`${val} x ${num} = ${num * val}`);
 }
}

//10부터 1까지 1씩 감소하며 출력하기
//감소 형태 반복문은 조건식을 조금 더 생각해야 한다
function check13(){

  for( let num =10 ; num >=1 ; num--){
  console.log(num);
  }
}


//20부터 3까지 3씩 감소하며 출력하기
function check14(){

  for( let num =20 ; num >=3 ; num -= 3){
  console.log(num);
  }
}
//구구단 3단 거꾸로 출력하기
function check15(){
  for(let num=9; num>=1 ; num--){
    console.log(`3 x ${num} = ${num*3}`);
  }
}

//5의 배수마다 @, 10의 배수마다 줄바꿈 하면서 출력하기
function check16(){
  
  let result = "";
  for(let num = 1 ; num <= 30 ; num++){
    if(num % 5 === 0){  //5의 배수인 경우
      result += "@";
    } else {
      result += num + " ";
    } 

    // 10의 배수마다 줄바꿈(따로 생각해야되는 조건)
    if(num % 10 === 0){
      result += "<br>"; //줄바꿈 태그 추가
    } 
  }
  //#result16에 출력(HTML해석)
  document.getElementById("result16").innerHTML=result;
}

//단독for문 끝
//내일은 이중for문


//다음 모양 출력하기
//1234
//1234
//1234

function check17(){

  for(let row=1 ; row<=3 ; row++){ //3번 출력

    let result = ""; //빈칸(string 자료형)
    for(let col=1 ; col<=4 ; col++){ //1234
      result += col; //문자열 + 숫자 -> 이어쓰기
    }
    console.log(result);
    console.log("----");
  }
}


//다음 모양 출력하기
//12345
//12345
//12345
//12345

function check18(){
  for(let row=1 ; row<=4 ; row++){
    let result = "";
    for(let col=1 ; col<=5 ; col++){
      result += col;
    }
    console.log(result);
    console.log("----");
  }
}


//다음 모양 출력하기
//654321
//654321
//654321
function check19(){
  for(let row=3 ; row>=1 ; row--){
    let result = "";
    for(let col=6 ; col>=1 ; col--){
      result += col;
    }
    console.log(result);
    console.log("----");
  }
}

//row == 1,2,3,4,5
function check20(){
  for(let row=1 ; row<=5 ; row++ ){

    let result = "";
    //row 만큼 반복
    for(let col = 1; col <= row ; col++){
      result += col;
    }
    console.log(result);
  }
}

//row == 3,4,5,6,7
/* function check21(){
  for(let row=3 ; row<=7 ; row++ ){

    let result = "";
    //row 만큼 반복
    for(let col = 3; col <= row ; col++){
      result += col;
    }
    console.log(result);
  }
} */

 function check21(){
    for(let row=1 ; row<=5 ; row++ ){
  
      let result = "";
      //row 만큼 반복
      for(let col = 1; col <= row ; col++){
        result += col + 2;
      }
      console.log(result);
    }
  }

function check22(){
  for(let row=1 ; row <=3 ; row++){

    let result = "";
    for(let col = 1 ; col <= row ; col++){
      result += "*";
    }
    console.log(result);
  }
}

/* 입력 받은 숫자 만큼의 * 모양 삼각형 출력하기</h4>
    입력 : 5
    *
    **
    ***
    ****
    ***** 
*/
function check23(){

  // #input 요소 얻어오기
  const input = document.getElementById("input23");

  if(input.value.length === 0 ){
    alert("숫자를 입력해 주세요");
    return;
  }
  const val = Number(input.value);
  
  //입력된 숫자가 0 이하일 경우
  if(val <= 0){
    alert("0보다 큰 숫자를 입력해 주세요");
    return;
  }
  for(let row = 1 ; row <= val ; row++){

    let result = "";
    for(let col =1 ; col <= row ; col++){
      result += "*";
    }

    console.log(result);
  }
}

/* 
다음 모양 출력하기
****
***
**
* 
*/
function check24(){
  for(let row = 4 ; row >= 1 ; row--){

    let result = "";
    for(let col =1 ; col <=row ; col++){
      result += "*";
    }
    console.log(result);
  }
}


//1부터 30사이의 정수 중 4의 배수는 몇 개? (7)
//4 8 12 16 20 24 28

function check25(){

  let count = 0; //처음에는 세어진게 없음

  for(let num = 1 ; num<=30 ; num++){

    //4의 배수 찾기 if
    if(num % 4 === 0 ){
      count++; //count값을 1씩 증가
    }
  }
  console.log("몇 개?", count);
}

function check26(){
  //정상 입력되었다고 가정
  const input = Number(document.getElementById("input26").value);

  let count = 0;
  for(let num = 1 ; num <=100 ; num++){

    if(num%input === 0){
      count++
    }
  }
  console.log(`1~100 사이 ${input}의 배수는 ${count}개 있습니다.`)
}

/* 
    1 2 3 4
    5 6 7 8
    9 10 11 12
 */

function check27(){
  //3행 4열 반복

  let count = 1; //1부터 시작
  for(let row = 1 ; row <=3 ; row++){

    let str = ""; // 1 2 3 4 / 5 6 7 8 / 9 10 11 12
    for(let col = 1 ; col <= 4 ; col++ ){
      /* str += `${count} ` ; //count + " "
      count++; // 1 증가 */

      str += `${count++} `; //후위 연산(제일 마지막에 증가)
    }
    console.log(str); // str(한 행) 출력
  }
}

//prompt를 이용해서 입력 받은 숫자 모두 더하기
//단, 취소 입력 시 추가 입력을 받지 않고
//누적된 합계를 alert로 출력

function check28(){
  //prompt("내용") : 입력이 포함된 알림창
  // - 확인 클릭 : 입력한 내용 반환
  // - 취소 클릭 : null 반환

  let sum = 0; //합계 누적용 변수
  let val; //prompt에 입력된 값을 저장할 변수
  
  while( (val = prompt("숫자 입력(취소 클릭 시 종료)"))!== null ) {

    //sum 누적
    sum += Number(val);
  }

  alert(`합계 : ${sum}`);
}


/* 메뉴 주문하기 */
function check29(){

  //메뉴 가격을 상수로 선언
  const gimbap = 4000;
  const ramen = 4500;
  const donkkaseu = 9000;

  //메뉴별 주문 개수를 저장할 카운트 변수 선언
  let gCount = 0;
  let rCount = 0;
  let dCount = 0;

  //prompt에 저장된 값을 저장할 변수
  let input; //undefined

  //input 변수에 저장된 값이 null이 아닐 경우에 반복
  // undefined랑 null은 다름
  while(input !== null){

    //prompt에 입력되는 값 종류 : "1", "2", "3", 메뉴없는 숫자, null(취소)
    input = prompt("메뉴 번호 입력(1.김밥 2.라면 3.돈까스");

    switch(input){
      case "1" : gCount++; break; //김밥 주문 개수 증가
      case "2" : rCount++; break;
      case "3" : dCount++; break;
      case null : alert("주문완료"); break;
      default: alert("잘못 입력 하셨습니다");
    }
  } //while end


  //innerHTML 사용 필요
  // 주문된 메뉴만 출력(count 변수에 저장된 값이 0 초과)

  let outputHtml = ''; //출력할 코드가 포함된 문자열 저장

  if(gCount > 0 ){  //김밥을 주문한 경우
    outputHtml +=`<li>김밥(${gCount}개 : ${gimbap * gCount}원</li>`;
  }
  if(rCount > 0 ){  //라면을 주문한 경우
    outputHtml +=`<li>라면(${rCount}개 : ${ramen * rCount}원</li>`;
  }
  if(dCount > 0 ){  //돈까스을 주문한 경우
  outputHtml +=`<li>돈까스(${dCount}개 : ${donkkaseu * dCount}원</li>`;
  }
  /* 합계 */
  const sum = (gimbap * gCount) + (ramen * rCount) + (donkkaseu * dCount);

  outputHtml += `<li>합계 : ${sum}원</li>`;

  //#result29의 내용으로 outputHtml 출력
  document.getElementById("result29").innerHTML=outputHtml
}
