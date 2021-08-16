const toggle = document.getElementById('toggle'); // toggle button for side nav
const close = document.getElementById('close'); // X in top right of modal window
const open = document.getElementById('open'); // sign up button
const modal = document.getElementById('modal'); // window that pops up after pressing sign up

// Toggle nav
toggle.addEventListener('click', () => 
    document.body.classList.toggle('show-nav')
);

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e => e.target == modal ?
modal.classList.remove('show-modal') : false);
// is the main window clicked when the modal window is up? if so, remove modal from screen