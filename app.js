const yes = document.getElementById('yes');
const no = document.getElementById('no');

let img = document.getElementById('img_1');

no.onclick = function(){
    let currentImage = img.getAttribute('data-image')
    let style = getComputedStyle(img);
    var paragraph = document.getElementById("beMy");  
    if(currentImage === 'be_my_Valentine'){
        img.src = 'img//pls.gif';                 
        paragraph.textContent = "Нууу.....🥺";
        img.setAttribute('data-image', 'pls');
    }
    else if(currentImage === 'pls'){
        img.src = 'img//pls2.gif';
        paragraph.textContent = "Будь ласка!!!😢";
        img.setAttribute('data-image', 'pls2');
        no.remove();
    }
}

let offsetX = 0;
let offsetY = 0;

document.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    const noRect = no.getBoundingClientRect();
    const noWidth = noRect.width;
    const noHeight = noRect.height;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const noX = noRect.left + noWidth / 2;
    const noY = noRect.top + noHeight / 2;

    const angle = Math.atan2(noY - mouseY, noX - mouseX);

    if(noRect.left >= 10 && noRect.right <= windowWidth - 20){
        offsetX += Math.cos(angle) * 7;
    }
    else if(noRect.left < 10){
        offsetX += 1
    }
    else if(noRect.right > windowWidth - 20){
        offsetX -= 1
    }

    if(noRect.bottom <= windowHeight - 10 && noRect.top >= 10){
        offsetY += Math.sin(angle) * 7;
    }
    else if(noRect.top < 10){
        offsetY += 1
    }
    else if(noRect.bottom > windowHeight - 10){
        offsetY -= 1
    }
    no.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}); 

yes.onclick = function(){
    yes.remove();
    no.remove();
    let paragraph = document.getElementById("beMy"); 
    img.src = 'img//yes.gif';
    paragraph.textContent = 'Ураааааааааа!!!🙌💕💕💕🦈';
}






