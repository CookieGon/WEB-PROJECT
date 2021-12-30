// 열기버튼, 닫기버튼, 콘테이너 객체 상수
const open = document.getElementById('open');
const close = document.getElementById('close');
const container =document.querySelector('.container');


// 열기버튼을 클릭하면 show-nav 클래스 추가 
open.addEventListener('click', () => {
    container.classList.add('show-nav');
});
// 닫기버튼을 클릭하면 show-nav 클래스 제거
close.addEventListener('click', () => {
    container.classList.remove('show-nav');
});