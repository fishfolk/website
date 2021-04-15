// Grab our background slices elements.
const fg2 = document.getElementById("fg2");
const fg1 = document.getElementById("fg1");

// Particle container.
const particle_count = 20;
const particle_box = document.getElementById("particlebox");
const context = particle_box.getContext('2d');
const particle_texture = new Image(8, 8);
let particles = [];

// Preform a parallax effect on etch element, use multiplication as the offset.
window.addEventListener('scroll', function() {
    let y = window.scrollY;
    fg1.style.top = (y * 0.2) + 'px';
    fg2.style.top = (y * 0.1) + 'px';
})

// If the browser is resized then handle the canvas
window.addEventListener('resize', function() {
    particle_box.height = document.body.scrollHeight;
    particle_box.width = window.innerWidth;
})

// Create particles.
particle_texture.src = 'assets/buble.png';
particle_box.height = document.body.scrollHeight;
particle_box.width = window.innerWidth;

for (let index = 0; index < particle_count; index++) {
    let size = Math.floor(Math.random() * (16 - 32) + 32);
    particles.push({ x: Math.random() * window.innerWidth, y: Math.random() * particle_box.height, width: size, height: size, speed: 0.8 + Math.random() * 1 });
}

// Particle update loop.
let tick = 0;

function particles_update() {
    requestAnimationFrame(particles_update);
    context.clearRect(0, 0, particle_box.width, particle_box.height);
    // update each particle
    console.log(tick);

    for (let index = 0; index < particle_count; index++) {
        if (particles[index].y <= 0) {
            particles[index].y = particle_box.height;
        } else {
            particles[index].y = particles[index].y - particles[index].speed;
        }
        particles[index].x = particles[index].x - (Math.sin(tick * 0.01 + particles[index].speed * 20) * 0.3);
        context.drawImage(particle_texture, particles[index].x, particles[index].y, particles[index].width, particles[index].height);
    }
    tick++;
}

particles_update();