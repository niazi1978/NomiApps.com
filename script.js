function tiltCard(card) {
    card.style.transform = "rotateY(10deg)";
    setTimeout(() => {
        card.style.transform = "rotateY(0deg)";
    }, 300);
}
