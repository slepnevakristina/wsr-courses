const inp_a = document.querySelector('#a');
const inp_b = document.querySelector('#b');
const inp_c = document.querySelector('#c');
const btn = document.querySelector('.calculate');
const result = document.querySelector(".result");

btn.addEventListener('click', function(e){
    e.preventDefault();
    let a = inp_a.value;
    let b = inp_b.value;
    let c = inp_c.value;
    let D = Math.pow(b, 2)-(4*a*c);
    if(D > 0) {
        let x1 = (-b + Math.sqrt(D))/(2*a);
        let x2 = (-b - Math.sqrt(D))/(2*a);
        result.textContent = 'x1 = ' + x1 + ', x2 = ' + x2;
    } else if(D == 0) {
        let x = -b/(2*a);
        result.textContent = 'x = ' + x;
    } else {
        result.textContent = 'Корней нет';
    }
})

