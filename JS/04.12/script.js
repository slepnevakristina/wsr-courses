const input = document.querySelector('#number');
const btn_add = document.querySelector('.add-number');
const list = document.querySelector('.numbers');
const clear = document.querySelector('.clear');

btn_add.addEventListener('click', function(){
    let number = input.value;
    let li = document.createElement('li');
    li.innerText = number;
    input.value = "";
    
    if(number > 10) {
        li.className = "red";
    } else if(number == 10) {
        li.className = "blue";
    } else {
        li.className = "green";
    }

    list.appendChild(li);
});

clear.addEventListener('click', function(){
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
})