cardsContainer=document.querySelector('.cards__container');
cards=document.querySelectorAll('.card');

cardsContainer.addEventListener('click',function(e){
    if(e.target.closest('.card')){
        cards.forEach(function(c){
            c.classList.remove('card--active');
        });
        console.log('Mouseover');
        //console.log(e.target.classList);
        e.target.classList.toggle('card--active');
    }
});
