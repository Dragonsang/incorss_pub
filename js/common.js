// 언어 메뉴 활성화 함수 (기존 기능 유지)
const activeMenu = (val) => {
    document.getElementsByClassName('kor-lang')[0].classList.remove('active');
    document.getElementsByClassName('eng-lang')[0].classList.remove('active');
    let el = document.getElementsByClassName(val)[0];
    el.classList.add('active');
}

// 메인 메뉴 활성화 함수
const setActiveMenuItem = (clickedElement) => {
    // 모든 메뉴 항목의 부모 li에서 'active-menu-item' 클래스 제거
    const menuItems = document.querySelectorAll('.menu ul li');
    menuItems.forEach(item => {
        item.classList.remove('active-menu-item');
    });

    // 클릭된 요소의 부모 li에 'active-menu-item' 클래스 추가
    if (clickedElement && clickedElement.parentNode) {
        clickedElement.parentNode.classList.add('active-menu-item');
    }
}