/* 모바일 3단 내비게이션 */
const menuItems = document.querySelectorAll('.gnb > ul > li.menu_li');

menuItems.forEach(function(item) {
  const mainLink = item.querySelector(':scope > a');
  const subMenu = item.querySelector(':scope > .sub');

  // 서브메뉴가 있는 상위 메뉴만 실행
  if (mainLink && subMenu) {
    mainLink.addEventListener('click', function(e) {
      // 페이지 이동 방지
      e.preventDefault();

      // 열려있는 메뉴
      const isOpen = item.classList.contains('active');

      // 다른 메뉴 모두 닫기
      menuItems.forEach(function(otherItem) {
        otherItem.classList.remove('active');
      });

      // 현재 메뉴가 닫혀 있었다면 열기
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  }
});