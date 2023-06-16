let card1 = document.querySelector(".card1");
let card2 = document.querySelector('.card2');
let button = document.querySelector(".card1__button");
let rating = document.querySelectorAll(".card1__rating__item")
let rateSelect = document.querySelector('.card2__rating__number')



rating.forEach(rate=>{
  rate.addEventListener('click',()=>{
    let numberSelect = rate.textContent;
    rateSelect.innerHTML = numberSelect;
  button.addEventListener('click',()=>{
    card1.style.display = 'none';
    card2.style.display = 'flex';
  })
  })
})

