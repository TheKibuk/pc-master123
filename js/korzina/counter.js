window.addEventListener('click', function(event){
    if(event.target.dataset.action === 'plus'){
        const counterWrapper = event.target.closest('.item__counter');
        const counter = counterWrapper.querySelector('[data-counter]');
        counter.innerText = ++counter.innerText
    }

    if(event.target.dataset.action === 'minus'){
        const counterWrapper = event.target.closest('.item__counter');
        const counter = counterWrapper.querySelector('[data-counter]');
        


        if(parseInt(counter.innerText) > 1){
            counter.innerText = --counter.innerText
        }else if(event.target.closest('.card-wrapper') && parseInt(counter.innerText) === 1 ){
            event.target.closest('.card-title').remove();

            toggleCardStatus()
        }
    }
})