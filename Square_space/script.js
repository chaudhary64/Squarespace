let cursor = document.querySelector('.custom_cursor');
let main = document.querySelector('.main');

cursor.hidden = true;

main.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';

    cursor.hidden = false
});

main.addEventListener('mouseleave', () => {
    cursor.hidden = true;
});

