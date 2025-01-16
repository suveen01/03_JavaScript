const display = document.querySelector("#display");     
const keys = document.querySelectorAll(".key"); 
const addBtn = document.querySelector("#add"); 
const resetBtn = document.querySelector("#reset"); 
const numList = document.querySelector("#number-list");

// 키패드 입력 기능
keys.forEach((key) => {
  key.addEventListener("click", () => {
    display.innerText += key.innerText;
  });
});

// 추가 버튼 기능
addBtn.addEventListener("click", () => {
  const number = display.innerText.trim();
  if (number === "") {
    alert("번호를 입력하세요.");
    return;
  }

  // 번호와 버튼 추가 (span 태그 사용)
  numList.innerHTML += `
    <li class="number-item">
      <span class="phone-number">${number}</span>
      <span class="favorite-btn" style="cursor:pointer; margin-left: 10px;">☆</span>
      <span class="delete-btn" style="cursor:pointer; margin-left: 5px;">×</span>
    </li>
  `;

  display.innerText = "";
});

// 즐겨찾기 버튼 클릭 시 번호 색상 변경
numList.addEventListener("click", (e) => {
  if (e.target.className === "favorite-btn") {
    const phoneNumber = e.target.previousElementSibling;

    if (phoneNumber.style.color === "red") {
      phoneNumber.style.color = "black";
      phoneNumber.style.fontWeight = "normal";
    } else {
      phoneNumber.style.color = "red";
      phoneNumber.style.fontWeight = "bold";
    }
  }

  // 삭제 버튼 클릭 시 항목 삭제
  if (e.target.className === "delete-btn") {
    e.target.parentElement.remove();
  }
});

// 초기화 버튼
resetBtn.addEventListener("click", () => {
  display.innerText = "";    
  numList.innerHTML = "";      
});
