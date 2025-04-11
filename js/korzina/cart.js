const cardWrapper = document.querySelector('.card-wrapper');
const baran = document.querySelector('.vse')            

window.addEventListener('click', function(event){
    if(event.target.hasAttribute('data-cart')){
        const card = event.target.closest('.videocard12');
        const productInfo ={
            id: card.dataset.id,
            imgSrc: card.querySelector('.image').getAttribute('src'),
            title: card.querySelector('.name').innerText,
            price: card.querySelector('.cina').innerText,
            counter: card.querySelector('[data-counter]').innerText
        }
        const itemInCard = cardWrapper.querySelector(`[data-id="${productInfo.id}"]`)
        baran.style.marginTop = "0px";
        if(itemInCard){
            const counterElements =itemInCard.querySelector('[data-counter]');
            counterElements.innerText = parseInt(counterElements.innerText) + parseInt(productInfo.counter);
        }else{


        const cardItemHTML = `
        <div class="card-title" data-id="${productInfo.id}">
            <img src="${productInfo.imgSrc}" alt="" width="100px">
            <div class="name12">${productInfo.title}</div>
            <div class="item__counter counter">
              <div class="item__control" data-action="minus">-</div>
              <div class="item__current" data-counter>${productInfo.counter}</div>
              <div class="item__control" data-action="plus">+</div>
            </div>
            <div class="price price132">${productInfo.price}</div>
          <hr></div>`

          cardWrapper.insertAdjacentHTML('beforeend', cardItemHTML)


        }

        card.querySelector('[data-counter]').innerText = '1'

        toggleCardStatus()
        calcPrice()
    }
})