// input , btn, search
const search  = document.querySelector('.search');
const input  = document.querySelector('.input');
const btn  = document.querySelector('.btn');

// 버튼을 클릭하면 search에 active 클래스를 toggle()은 클래스 추가 / 제거
btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
});