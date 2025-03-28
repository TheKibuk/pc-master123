function toggleCardStatus(){
    const cartWrapper = document.querySelector('.card-wrapper')
    console.log(cartWrapper.children.length);

    if(cartWrapper.children.length > 0){
        console.log('lox');
    }else{
        console.log('pidar');
    }
}