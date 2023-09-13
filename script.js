const starrySky = document.getElementById('starry-sky');

for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = `${Math.random() * 5}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${2 + Math.random() * 3}s`;
    
    starrySky.appendChild(star);
}

starrySky.addEventListener('mousemove', (e) => {
    const offsetX = (e.clientX / window.innerWidth - 0.5) * 10;
    const offsetY = (e.clientY / window.innerHeight - 0.5) * 10;

    starrySky.style.transform = `translate(-${offsetX}px, -${offsetY}px)`;
});

starrySky.addEventListener('click', (e) => {
    const explosion = document.createElement('div');
    explosion.className = 'star';
    explosion.style.width = '50px';
    explosion.style.height = '50px';
    explosion.style.left = `${e.clientX}px`;
    explosion.style.top = `${e.clientY}px`;
    explosion.style.animation = 'none';

    starrySky.appendChild(explosion);

    setTimeout(() => {
        starrySky.removeChild(explosion);
    }, 500);
});
