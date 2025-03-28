const btn = document.querySelector('.btn-bidgyk');
const none = document.querySelector('.none');
const none1 = document.querySelector(".none1");
const btn1 = document.querySelector('.btn-scrut')

btn.addEventListener('click', () => {
    none.style.display = "flex"
    none1.style.display = "flex"
    btn.style.display = "none"
    btn1.style.display = "flex"
})

btn1.addEventListener('click', () => {
    none.style.display = "none"
    none1.style.display = "none"
    btn.style.display = "flex"
    btn1.style.display = "none"
})

