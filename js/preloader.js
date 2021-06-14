// remove preloader on load 

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add("preloader-finished");
});
