// Démo Three.js simple
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const container = document.getElementById('demo-visualisation-3d-tsp');
if (!container) return;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Créer un cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x1f4e5f });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Ajouter quelques sphères pour représenter des villes
const cityGeometry = new THREE.SphereGeometry(0.2, 16, 16);
const cityMaterial = new THREE.MeshBasicMaterial({ color: 0xd08a4b });

const cities = [
    {x: -2, y: 0, z: 0},
    {x: 2, y: 0, z: 0},
    {x: 0, y: 2, z: 0},
    {x: 0, y: -2, z: 0},
    {x: 0, y: 0, z: 2},
    {x: 0, y: 0, z: -2}
];

cities.forEach(city => {
    const sphere = new THREE.Mesh(cityGeometry, cityMaterial);
    sphere.position.set(city.x, city.y, city.z);
    scene.add(sphere);
});

// Ligne du cycle
const points = cities.map(c => new THREE.Vector3(c.x, c.y, c.z));
points.push(points[0]); // Fermer le cycle
const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x6b7280 });
const line = new THREE.Line(lineGeometry, lineMaterial);
scene.add(line);

camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
