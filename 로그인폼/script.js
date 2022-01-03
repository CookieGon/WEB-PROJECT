const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
    label.innerHTML = label.textContent
                        .split('')
                        .map((c, i) => `<span style = "transition-delay: ${i*80}ms"> ${c}</span>`)
                        .join('')
});
