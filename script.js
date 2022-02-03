productsJson.map((item) => {

    let cardItem = document.querySelector('.modal .card').cloneNode(true);

        if(item.promotion == true) {
            cardItem.querySelector('.card-old-price').innerHTML = `$ ${item.priceOld.toFixed(2)}` ;
        } else {
            cardItem.querySelector('.card-old-price').innerHTML = " <br/>";
        }
        cardItem.querySelector('.card-image').src = item.img;
        cardItem.querySelector('.card-title').innerHTML = item.title;
        cardItem.querySelector('.card-price').innerHTML = `$ ${item.price.toFixed(2)}`;

        
        if (item.id <= 6) {
            document.querySelector('.card-area-bought').append(cardItem);
        } else {
            document.querySelector('.card-area-viewed').append(cardItem);
        }
});