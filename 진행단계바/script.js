const progress = document.getElementById('progress'); // 막대기
const prev = document.getElementById('prev'); // 이전 버튼
const next = document.getElementById('next'); // 다음 버튼

const circles = document.querySelectorAll('.circle');

let currentActive = 1;
// 다음 버튼을 클릭 했을때
next.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    막대바업데이트();
    
});
prev.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }
    막대바업데이트();
    
});

function 막대바업데이트(){
    circles.forEach((circle,idx) => {
        if(idx < currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    });
    
    // 막대바 업데이트
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length -1)/(circles.length-1)*100 +'%';

    // 이전버튼 활성화
    if(currentActive === 1){
        prev.disabled = true;
    }else if(currentActive === circles.length){
        next.disabled = true;
    }else {
        prev.disabled = false;
        next.disabled = false;
    }
}
