const images = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg"
];

let tagImg = '';
const slider = document.querySelector('.slider');

for(let i = 0; i < images.length; i++){
    tagImg += `
        <img class="item" src="img/${images[i]}" alt="${images[i]}">
    `;
}

slider.innerHTML += tagImg;

let imageCounter = 0; 
const items = document.getElementsByClassName('item');
items[imageCounter].classList.add('active');

const up = document.querySelector('.up');
const down = document.querySelector('.down');

down.addEventListener('click', function(){
    items[imageCounter].classList.remove('active');
    imageCounter++;
    items[imageCounter].classList.add('active');
    console.log(imageCounter);
})
up.addEventListener('click', function(){
    items[imageCounter].classList.remove('active');
    imageCounter--;
    items[imageCounter].classList.add('active');
    console.log(imageCounter);
})

