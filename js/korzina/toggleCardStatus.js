function toggleCardStatus(){
    const cartWrapper = document.querySelector('.card-wrapper');
    const cartEmpty = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('.oformit');

    if(cartWrapper.children.length > 0){
        cartEmpty.classList.add('none');
        orderForm.classList.remove('none')
    }else{
        cartEmpty.classList.remove('none');
        orderForm.classList.add('none')
    }
}