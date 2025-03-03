document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("image");
    const moveDistance = 100; 
    
    function getRandomPosition() {
        const maxX = window.innerWidth - image.clientWidth;
        const maxY = window.innerHeight - image.clientHeight;
        return {
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * maxY)
        };
    }

    function moveImageAway(mouseX, mouseY) {
        const imageRect = image.getBoundingClientRect();
        const imageX = imageRect.left + imageRect.width / 2;
        const imageY = imageRect.top + imageRect.height / 2;

        const deltaX = imageX - mouseX;
        const deltaY = imageY - mouseY;
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        if (distance < 150) { 
            let newX = imageRect.left + (deltaX / distance) * moveDistance;
            let newY = imageRect.top + (deltaY / distance) * moveDistance;

            newX = Math.max(0, Math.min(window.innerWidth - image.clientWidth, newX));
            newY = Math.max(0, Math.min(window.innerHeight - image.clientHeight, newY));

            image.style.left = `${newX}px`;
            image.style.top = `${newY}px`;
        }
    }

    const startPos = getRandomPosition();
    image.style.position = "absolute"; 
    image.style.left = `${startPos.x}px`;
    image.style.top = `${startPos.y}px`;

    document.addEventListener("mousemove", (event) => {
        moveImageAway(event.clientX, event.clientY);
    });
});
