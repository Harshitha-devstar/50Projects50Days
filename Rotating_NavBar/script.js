const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', ()=> container.classList.add('show-nav'));
close.addEventListener('click', ()=>container.classList.remove('show-nav'));




// sticky element transition
const searchBtn = document.querySelector('.search-btn');
const searchField = document.querySelector('#search');
const searchEl = document.querySelector('.search');


searchBtn.addEventListener('click', ()=>{
    searchEl.classList.toggle('active');
    searchField.focus();
})