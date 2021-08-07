'use strict';

let btn = document.querySelector('button');

btn.addEventListener('click', event => {
    btn.innerHTML = (parseInt(btn.innerHTML, 10) + 1).toString();
});