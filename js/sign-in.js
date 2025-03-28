const btn = document.querySelector('.btn-sigma');
const btn1 = document.querySelector('.che-raz');
const text = document.querySelector('.text');

btn.addEventListener("click", () =>{
    btn.style.display = "none"
    btn1.style.display = "flex"
    text.style.display = "flex"
})

btn1.addEventListener("click", () => {
    text.style.display = "none"
})