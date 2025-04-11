const btn = document.querySelector('.korzina123');
const okno = document.querySelector('.korzina');

btn.addEventListener('click', function(){
    if(sigmo){ 
        okno.style.display = "none"
        sigmo = false
    }else{
        okno.style.display = "flex"
        sigmo = true
    }
})

let sigmo = false