let alta = document.querySelector('.alta__img');
let background = document.querySelector('.background');
let title = document.querySelector('.title');
let rosegold = document.querySelector('.button__rosegold');
let coral = document.querySelector('.button__coral');
let fuschia = document.querySelector('.button__fuschia');
let black = document.querySelector('.button__black');

rosegold.addEventListener('click', () => {
  alta.src='https://marketing-pages.fitbit.com/images/product-listing/desktop/altahr-soft-pink-22k-rose-gold-plated-tpu-regular-0-2485b69d61944f699443a751d3349b11.png';
  background.style.backgroundColor = '#CE8C91';
  title.style.color= '#CE8C91';
});

coral.addEventListener('click', () => {
  alta.src='https://marketing-pages.fitbit.com/images/product-listing/desktop/altahr-coral-silver-tpu-regular-0-2d30e3c8ded88413047136b8c97e06bc.png';
  background.style.backgroundColor = '#FF7A6C';
  title.style.color= '#FF7A6C';
});

fuschia.addEventListener('click', () => {
  alta.src='https://marketing-pages.fitbit.com/images/product-listing/desktop/altahr-fuchsia-silver-tpu-regular-0-e29ab56f259fc0d42c90e8a41b068a03.png';
  background.style.backgroundColor = '#A24868';
  title.style.color= '#A24868';
});

black.addEventListener('click', () => {
  alta.src= 'https://marketing-pages.fitbit.com/images/product-listing/desktop/alta-black-22k-gold-plated-22k-gold-plated-tpu-regular-0-21b753812fcc0c0ea68bbeacfc731d38.png';
  background.style.backgroundColor= '#C6AD61';
  title.style.color= '#C6AD61';
});
