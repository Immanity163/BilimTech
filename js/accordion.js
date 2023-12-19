const button = document.getElementsByClassName('cataloge-more-btn')[0];
const text = document.getElementsByClassName('btn-text')[0];
const accordion = document.getElementsByClassName('accordion')[0];

button.addEventListener('click', function(){
    accordion.classList.toggle('active');
    text.classList.toggle('undo');
})