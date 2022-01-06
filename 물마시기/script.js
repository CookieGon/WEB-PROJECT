const smallcups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

// 작은컵을 마우스 클릭시 컵 채우기(full)클래스

smallcups.forEach((cup,idx) => {
    cup.addEventListener('click',() => 작은컵들채우기(idx) );
})

function 작은컵들채우기(idx){
    // console.log(idx)
    if(idx === 7 && smallcups[idx].classList.contains('full')) idx--;
    else if(smallcups[idx].classList.contains('full') && !smallcups[idx].nextElementSibling.classList.contains('full'))
     {
         idx--;
        }

    smallcups.forEach((cup,i) => {
        if(i <= idx){
            cup.classList.add('full');
        }else {
            cup.classList.remove('full');
        }
    });
    큰컵채우기();
}

function 큰컵채우기(){
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallcups.length;

    if (fullCups === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${(fullCups / totalCups) * 330}px`;
        percentage.innerText = `${(fullCups / totalCups) * 100}%`;
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
    }
}