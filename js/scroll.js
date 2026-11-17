const topBtn = document.getElementById("topBtn");
// 스크롤 이벤트 감지
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  // 스크롤이 300px 이상 내려갔을 때 버튼 표시, 아니면 숨김
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// 버튼 클릭 시 맨 위로 부드럽게 이동
topBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});