const popup = () => { 
    const checkBtn = document.querySelector('button'),
    popupCheck = document.querySelector('.overlay');

    checkBtn.addEventListener('click', () => {
        popupCheck.style.display = 'block';
    });
    popupCheck.addEventListener('click', () => {
        let target = event.target;
        if( target.classList.contains('popup-close')) {
            popupCheck.style.display = 'none';
    } 
});
};
popup();