const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

// 최초 1회 실행
checkBoxes();

function checkBoxes(){
    // console.log(window.innerHeight)
    const triggerBottom = (window.innerHeight / 5) * 4; // 화면 높이의 4/5 높이
    // 모든 박스에게 트리거 높이보다 
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top; // 박스의 상단 높이
        // 박스높이 < 트리거포인트 => 박스를 원위치(클래스 show 추가)
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })

}
