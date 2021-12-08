const btn_open = document.querySelector('.open-modal');
const btn_close = document.querySelector('.close-window');
const modal = document.querySelector('.modal');

btn_open.addEventListener('click', function(){
    modal.classList.add('active');
});
btn_close.addEventListener('click', function(){
    modal.classList.remove('active');
})