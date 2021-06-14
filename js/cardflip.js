
// flip the card
const cards = document.querySelectorAll(".card-inner");
for (let i = 0; i < cards.length; i++) 
    {
        cards[i].addEventListener("click", function (e) {
        cards[i].classList.toggle('is-flipped');
    });
};