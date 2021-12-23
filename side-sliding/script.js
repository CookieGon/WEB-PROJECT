const panels = document.querySelectorAll('.panel');

// 클릭된 패널에 active 클래스 추가
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActive();
        panel.classList.add('active');
    });
});

// 모든 패널의 active 클래스 제거
function removeActive(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}