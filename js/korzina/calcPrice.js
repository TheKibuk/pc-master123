function calcPrice(){
    const cartWrapper = document.querySelector('.card-wrapper');
    const cartItems = document.querySelectorAll('.card-title')

    const totalPriceEl = document.querySelector('.total-price');


    let total_price = 0

    cartItems.forEach(function(item){
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price');

        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)
        total_price += currentPrice
    })

    console.log(total_price)

    totalPriceEl.innerText = total_price
}
