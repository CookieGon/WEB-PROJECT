const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// 로딩 숫자
let load = 0;

let interval = setInterval(blurring, 30);   // 0.03초 시간만큼 반복해서 함수 실행

function blurring(){
    load++;
    // console.log(load);
    if(load > 99 ){
        clearInterval(interval);    // 반복인터벌을 중지
    }
    // loadText.textContent = load+"%";    // 벡틱 문자열
    loadText.textContent = `${load}`+"%";
    // 1. 블러필터를 사용 처음에 흐리게(30px) => 선명하게 (0px)
    // 2. 글자를 갈수록 흐리게 opacity 1 => 0
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return((num - in_min)*(out_max - out_min)) / (in_max - in_min)  + out_min;
}