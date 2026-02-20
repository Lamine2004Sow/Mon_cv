// Démo Canvas 2D simple
const canvas = document.getElementById('canvas-animation-algorithme');
if (!canvas) return;

const ctx = canvas.getContext('2d');
canvas.width = canvas.offsetWidth || 800;
canvas.height = canvas.offsetHeight || 400;

let x = 0;
let direction = 1;

function animate() {
    // Effacer le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Dessiner un rectangle animé
    ctx.fillStyle = '#1f4e5f';
    ctx.fillRect(x, canvas.height / 2 - 25, 50, 50);
    
    // Dessiner un cercle
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 30, 0, Math.PI * 2);
    ctx.fillStyle = '#d08a4b';
    ctx.fill();
    
    // Animer
    x += direction * 2;
    if (x > canvas.width - 50 || x < 0) {
        direction *= -1;
    }
    
    requestAnimationFrame(animate);
}

animate();
