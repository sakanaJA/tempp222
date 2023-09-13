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
    
    explosion.style.width = '5px';
    explosion.style.height = '5px';
    explosion.style.left = `${e.clientX}px`;
    explosion.style.top = `${e.clientY}px`;
    explosion.style.animation = 'none';

    starrySky.appendChild(explosion);

    setTimeout(() => {
        starrySky.removeChild(explosion);
    }, 500);
});


starrySky.addEventListener('click', (e) => {
  // 流れ星を生成
  const shootingStar = document.createElement('div');
  shootingStar.style.width = '50px';
  shootingStar.style.height = '5px';
  shootingStar.className = 'shooting-star';
  shootingStar.style.left = `${e.clientX}px`;
  shootingStar.style.top = `${e.clientY}px`;

  starrySky.appendChild(shootingStar);

  setTimeout(() => {
      starrySky.removeChild(shootingStar);
  }, 1000);  // 1秒後に流れ星を削除（アニメーション時間と一致）
});


