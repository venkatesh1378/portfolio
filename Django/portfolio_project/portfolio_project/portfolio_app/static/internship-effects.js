function initBubbleBackground() {
    const canvas = document.getElementById('bubble-canvas');
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Set renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create bubbles
    const geometry = new THREE.SphereGeometry(0.3, 32, 32);
    const material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3,
        specular: 0xffffff,
        shininess: 100
    });

    const bubbles = [];
    const bubbleCount = 50;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = new THREE.Mesh(geometry, material);
        bubble.position.set(
            Math.random() * 40 - 20,
            Math.random() * 40 - 20,
            Math.random() * 40 - 20
        );
        scene.add(bubble);
        bubbles.push({
            mesh: bubble,
            speed: Math.random() * 0.02 + 0.01
        });
    }

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    camera.position.z = 30;

    // Animation
    function animate() {
        requestAnimationFrame(animate);

        bubbles.forEach(bubble => {
            bubble.mesh.rotation.x += 0.01;
            bubble.mesh.rotation.y += 0.01;
            bubble.mesh.position.y += bubble.speed;

            if (bubble.mesh.position.y > 20) {
                bubble.mesh.position.y = -20;
                bubble.mesh.position.x = Math.random() * 40 - 20;
            }
        });

        renderer.render(scene, camera);
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
}

document.addEventListener('DOMContentLoaded', initBubbleBackground);