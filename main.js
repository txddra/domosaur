
const sizeSpan = document.querySelector('.mess-with-me');
sizeSpan.style.fontSize = '3em';
sizeSpan.style.color = 'green';

const hiddenSaur = document.querySelector('#hide-me')
hiddenSaur.style.display ='none';


const firstDino = document.querySelector('#triceratops');
firstDino.style.width ='324px'


const makeItOrange = function(){

    sizeSpan.style.color = 'orange';
    };
    
    sizeSpan.addEventListener('click', makeItOrange);
    

const redBorder = function (){
    firstDino.style.border ='thick solid red';
        }
        
    firstDino.addEventListener('click', redBorder)


const feathered = document.querySelector('#feathers');

const halfTransparent = function(){
    feathered.style.opacity = '50%';
}
feathered.addEventListener('click', halfTransparent);
