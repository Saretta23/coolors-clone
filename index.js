document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('goProLink').style.color = '#ff0065';
});

//  BIG MENU TOOL //
document.addEventListener('DOMContentLoaded', () => {
    const menuItem = document.getElementById('tools-menu-item');
    const menu = document.getElementById('tool-menu');
  
    let hoverTimeout;
  
    const showMenu = () => {
      clearTimeout(hoverTimeout);
      menu.style.display = 'flex';
    };
  
    const hideMenu = () => {
      hoverTimeout = setTimeout(() => {
        menu.style.display = 'none';
      }, 200); 
    };
  
    menuItem.addEventListener('mouseenter', showMenu);
    menuItem.addEventListener('mouseleave', hideMenu);
    menu.addEventListener('mouseenter', showMenu);
    menu.addEventListener('mouseleave', hideMenu);
  });

//  COLOR PALETTE ANIMATION //

var monitor = document.querySelector(".monitor");
var innerImage = document.querySelector(".inner-image");
var duplicateImage = document.querySelector(".duplicate-image");

var speed = 0.5;
var y = monitor.offsetHeight; 
var imageHeight = innerImage.offsetHeight;
var desiredStartPosition = 500; 

y = monitor.offsetHeight - desiredStartPosition;

function animateImages() {
    y -= speed;
    innerImage.style.bottom = y + "px";
    duplicateImage.style.bottom = (y + imageHeight) + "px";

    if (y <= -imageHeight) {
        y = 0; 
    }
    requestAnimationFrame(animateImages);
}
animateImages();

// RANDOM COLOR GENERATE INSIDE LAPTOP //
function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

function changeSwatchColor(swatch) {
    swatch.style.backgroundColor = generateRandomColor();
}

function changePaletteColors() {
    const swatches = document.querySelectorAll('.color-swatch');
    swatches.forEach(changeSwatchColor);
}
setInterval(changePaletteColors, 600);

window.addEventListener('load', changePaletteColors);




















