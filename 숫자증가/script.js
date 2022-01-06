const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.textContent = '0';
    업데이트카운터(counter);
})

function 업데이트카운터(counter){
    const target = +counter.getAttribute('data-target'); // parseInt(문자열)
    // console.log(target); 12000, 5000, 7500

    const c = +counter.textContent;
    const increment = target / 200;

    if(c < target){
        counter.textContent = `${Math.ceil(c + increment)}`;
        setTimeout(() => {
            업데이트카운터(counter);
        },1);
    } else {
        counter.textContent = target;
    }
}