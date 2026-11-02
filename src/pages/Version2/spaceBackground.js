/* ═══════════════════════════════════════════════
   SPACE.JS — Three.js 3D Star Field Background
   Deep-space particle system with nebula colors,
   mouse parallax, and shooting stars.
   ═══════════════════════════════════════════════ */

export function initializeSpaceBackground() {
    if (window.__portfolioSpaceInitialized) return;
    window.__portfolioSpaceInitialized = true;
    'use strict';

    const canvas = document.getElementById('space-canvas');
    if (!canvas || typeof window.THREE === 'undefined') return;
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

    // ─── Scene Setup ───
    const scene = new window.THREE.Scene();
    const camera = new window.THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
    );
    camera.position.z = 500;

    let renderer;
    try {
        renderer = new window.THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: false,
        });
    } catch (error) {
        canvas.classList.add('webgl-unavailable');
        return;
    }
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x050510, 0);

    // ─── Mouse Tracking ───
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    document.addEventListener('mousemove', (e) => {
        mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // ─── Star Field ───
    const STAR_COUNT = window.innerWidth < 768 ? 2400 : 6000;
    const starGeometry = new window.THREE.BufferGeometry();
    const starPositions = new Float32Array(STAR_COUNT * 3);
    const starColors = new Float32Array(STAR_COUNT * 3);
    const starSizes = new Float32Array(STAR_COUNT);

    for (let i = 0; i < STAR_COUNT; i++) {
        const i3 = i * 3;
        starPositions[i3] = (Math.random() - 0.5) * 2000;
        starPositions[i3 + 1] = (Math.random() - 0.5) * 2000;
        starPositions[i3 + 2] = (Math.random() - 0.5) * 2000;

        // Color variation: mostly white-blue, some warm
        const colorChoice = Math.random();
        if (colorChoice < 0.6) {
            // Cool white-blue
            starColors[i3] = 0.85 + Math.random() * 0.15;
            starColors[i3 + 1] = 0.88 + Math.random() * 0.12;
            starColors[i3 + 2] = 1.0;
        } else if (colorChoice < 0.8) {
            // Cyan tint
            starColors[i3] = 0.3 + Math.random() * 0.3;
            starColors[i3 + 1] = 0.8 + Math.random() * 0.2;
            starColors[i3 + 2] = 1.0;
        } else if (colorChoice < 0.92) {
            // Purple tint
            starColors[i3] = 0.7 + Math.random() * 0.3;
            starColors[i3 + 1] = 0.4 + Math.random() * 0.2;
            starColors[i3 + 2] = 0.9 + Math.random() * 0.1;
        } else {
            // Warm yellow/orange
            starColors[i3] = 1.0;
            starColors[i3 + 1] = 0.8 + Math.random() * 0.2;
            starColors[i3 + 2] = 0.5 + Math.random() * 0.3;
        }

        starSizes[i] = Math.random() * 2.5 + 0.5;
    }

    starGeometry.setAttribute('position', new window.THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new window.THREE.BufferAttribute(starColors, 3));
    starGeometry.setAttribute('size', new window.THREE.BufferAttribute(starSizes, 1));

    // Custom shader for stars with twinkle
    const starVertexShader = `
        attribute float size;
        varying vec3 vColor;
        uniform float uTime;
        void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            float twinkle = sin(uTime * 2.0 + position.x * 0.01 + position.y * 0.01) * 0.3 + 0.7;
            gl_PointSize = size * twinkle * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
        }
    `;

    const starFragmentShader = `
        varying vec3 vColor;
        void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;
            float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
            alpha *= alpha;
            gl_FragColor = vec4(vColor, alpha);
        }
    `;

    const starMaterial = new window.THREE.ShaderMaterial({
        vertexShader: starVertexShader,
        fragmentShader: starFragmentShader,
        uniforms: {
            uTime: { value: 0 },
        },
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        blending: window.THREE.AdditiveBlending,
    });

    const stars = new window.THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // ─── Nebula Particles (larger, colored, subtle) ───
    const NEBULA_COUNT = 300;
    const nebulaGeometry = new window.THREE.BufferGeometry();
    const nebulaPositions = new Float32Array(NEBULA_COUNT * 3);
    const nebulaColors = new Float32Array(NEBULA_COUNT * 3);

    for (let i = 0; i < NEBULA_COUNT; i++) {
        const i3 = i * 3;
        nebulaPositions[i3] = (Math.random() - 0.5) * 1500;
        nebulaPositions[i3 + 1] = (Math.random() - 0.5) * 1500;
        nebulaPositions[i3 + 2] = (Math.random() - 0.5) * 800 - 200;

        const hue = Math.random();
        if (hue < 0.5) {
            // Cyan nebula
            nebulaColors[i3] = 0.0;
            nebulaColors[i3 + 1] = 0.5 + Math.random() * 0.4;
            nebulaColors[i3 + 2] = 0.8 + Math.random() * 0.2;
        } else {
            // Purple nebula
            nebulaColors[i3] = 0.5 + Math.random() * 0.3;
            nebulaColors[i3 + 1] = 0.1 + Math.random() * 0.2;
            nebulaColors[i3 + 2] = 0.7 + Math.random() * 0.3;
        }
    }

    nebulaGeometry.setAttribute('position', new window.THREE.BufferAttribute(nebulaPositions, 3));
    nebulaGeometry.setAttribute('color', new window.THREE.BufferAttribute(nebulaColors, 3));

    const nebulaMaterial = new window.THREE.PointsMaterial({
        size: 40,
        vertexColors: true,
        transparent: true,
        opacity: 0.04,
        depthWrite: false,
        blending: window.THREE.AdditiveBlending,
    });

    const nebula = new window.THREE.Points(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);

    // ─── Distant Galaxy Ring ───
    const ringGeometry = new window.THREE.TorusGeometry(250, 0.5, 8, 200);
    const ringMaterial = new window.THREE.MeshBasicMaterial({
        color: 0x00e5ff,
        transparent: true,
        opacity: 0.06,
    });
    const ring = new window.THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI * 0.45;
    ring.rotation.y = Math.PI * 0.1;
    ring.position.z = -300;
    scene.add(ring);

    // Second ring
    const ring2Geometry = new window.THREE.TorusGeometry(350, 0.3, 8, 200);
    const ring2Material = new window.THREE.MeshBasicMaterial({
        color: 0xbf5af2,
        transparent: true,
        opacity: 0.04,
    });
    const ring2 = new window.THREE.Mesh(ring2Geometry, ring2Material);
    ring2.rotation.x = Math.PI * 0.55;
    ring2.rotation.y = Math.PI * -0.15;
    ring2.position.z = -400;
    scene.add(ring2);

    // ─── Floating Particles (foreground dust) ───
    const DUST_COUNT = 150;
    const dustGeometry = new window.THREE.BufferGeometry();
    const dustPositions = new Float32Array(DUST_COUNT * 3);

    for (let i = 0; i < DUST_COUNT; i++) {
        const i3 = i * 3;
        dustPositions[i3] = (Math.random() - 0.5) * 800;
        dustPositions[i3 + 1] = (Math.random() - 0.5) * 800;
        dustPositions[i3 + 2] = (Math.random() - 0.5) * 400 + 100;
    }

    dustGeometry.setAttribute('position', new window.THREE.BufferAttribute(dustPositions, 3));

    const dustMaterial = new window.THREE.PointsMaterial({
        size: 1.5,
        color: 0x00e5ff,
        transparent: true,
        opacity: 0.15,
        depthWrite: false,
        blending: window.THREE.AdditiveBlending,
    });

    const dust = new window.THREE.Points(dustGeometry, dustMaterial);
    scene.add(dust);

    // ─── Animation Loop ───
    const clock = new window.THREE.Clock();

    let animationFrame = null;

    function animate() {
        animationFrame = null;
        if (document.hidden) return;

        const elapsed = clock.getElapsedTime();
        starMaterial.uniforms.uTime.value = elapsed;

        // Smooth mouse follow
        mouse.x += (mouse.targetX - mouse.x) * 0.02;
        mouse.y += (mouse.targetY - mouse.y) * 0.02;

        // Rotate star field slowly + mouse parallax
        stars.rotation.y = elapsed * 0.015 + mouse.x * 0.08;
        stars.rotation.x = elapsed * 0.008 + mouse.y * 0.05;

        // Nebula slight drift
        nebula.rotation.y = elapsed * 0.005 + mouse.x * 0.03;
        nebula.rotation.x = elapsed * 0.003 + mouse.y * 0.02;

        // Rings rotate slowly
        ring.rotation.z = elapsed * 0.02;
        ring2.rotation.z = -elapsed * 0.015;

        // Dust float
        dust.rotation.y = elapsed * 0.01 + mouse.x * 0.05;
        dust.rotation.x = mouse.y * 0.03;
        dust.position.y = Math.sin(elapsed * 0.3) * 10;

        renderer.render(scene, camera);

        if (!motionPreference.matches) {
            animationFrame = requestAnimationFrame(animate);
        }
    }

    function render() {
        if (animationFrame === null && !document.hidden) {
            animationFrame = requestAnimationFrame(animate);
        }
    }

    render();

    document.addEventListener('visibilitychange', () => {
        if (document.hidden && animationFrame !== null) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null;
        } else {
            render();
        }
    });

    motionPreference.addEventListener('change', render);

    // ─── Resize Handler ───
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            render();
        }, 100);
    });

}
