AOS.init({
    offset:1
});


    let links = document.querySelector('.links');
    let buttonMenu = document.querySelector('.button-menu');

    buttonMenu.addEventListener('click', () => {
        links.classList.toggle('active');
    });