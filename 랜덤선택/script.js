// 입력받는 창
const textarea = document.getElementById('textarea');
// 태그들을 넣을 태그
const tagsEl = document.getElementById('tags');

// 처음 시작시 커서를 입력창에 focus
textarea.focus();

textarea.addEventListener('keyup',(e) => {
    // console.log(e.target.value);
    createTags(e.target.value);
    // 엔터 입력시
    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        },10);
        randomSelect();
    }
});

function randomSelect(){
    const times = 30;
    // 계속 반복 함수 
    const interval = setInterval(() => {
        const randomTag = 랜덤태그선택();
        if(randomTag !== undefined){
            하이라이트(randomTag);
            setTimeout(() => {
                하이라이트제거(randomTag);
            }, 100);
        }
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = 랜덤태그선택();
            하이라이트(randomTag);
        }, 100);
    }, times * 100);
}

function 랜덤태그선택(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function 하이라이트(tag){
    tag.classList.add('highlight');
}

function 하이라이트제거(tag){
    tag.classList.remove('highlight');
}
function createTags(input){
    const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

    // console.log(tags);
    tagsEl.innerHTML = ''; // 여기에 태그들을 입력
    tags.forEach((tag) => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.textContent = tag;
        tagsEl.appendChild(tagEl);  // tags에 자식태그로 입력
    });
}