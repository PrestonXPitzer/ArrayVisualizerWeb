import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
//Load the 3d model

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / 
window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let model;
const loader = new GLTFLoader();

loader.load( 'project_-_cirno_fumo_3d_scan/scene.gltf', function ( gltf ) {

	scene.add( gltf.scene );
    model = gltf.scene;

}, undefined, function ( error ) {

	console.error( error );

} );


camera.position.z = 100;

const animate = function () {
    requestAnimationFrame(animate);
    if (model) {
        model.rotation.y += 0.01;
        //model.rotation.x += 0.01;
    }
    
    renderer.render(scene, camera);
    }
animate();