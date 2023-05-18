import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
scene.add(camera);

const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setClearColor(0xffffff, 0);
renderer.setSize( window.innerWidth, window.innerHeight );

//const slowWrapper = document.querySelector("#slowWrapper");
//lowWrapper.appendChild( renderer.domElement );
document.body.appendChild( renderer.domElement);

// const cubeGeometry = new THREE.BoxGeometry( 1,1,1,1 );
// const cubeMaterial = new THREE.MeshStandardMaterial( {color: 0x00FF00} );
// const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
// scene.add( cube );

// const axesHelper = new THREE.AxesHelper(10);
// scene.add(axesHelper);

const ambientLight = new THREE.AmbientLight( 0xFFFFFF, 0.5 );
scene.add( ambientLight );

const directionalLight1 = new THREE.DirectionalLight( 0xFFFFFF, 0.8 );
scene.add( directionalLight1 );
directionalLight1.position.set(2, 2, 5);

// const dLight1Helper = new THREE.DirectionalLightHelper( directionalLight1, 5);
// scene.add(dLight1Helper);

camera.position.z = 8;

var objects = [];
const loader = new GLTFLoader();
loader.load('./models/lego.glb', function ( gltf ) {
    objects[0] = gltf.scene;
    objects[0].position.set( -1, -10, 0 );
    objects[0].scale.set(1.4, 1.4, 1.4);
    objects[0].rotation.set(-0.2, 0.7, 0.6);
    objects[0].outlinePass
    scene.add(objects[0])
}, undefined, function ( error ) { console.error( error )});

loader.load('./models/computer.glb', function ( gltf ) {
    objects[1] = gltf.scene;
    objects[1].position.set(1,-10,0);
    objects[1].scale.set(1,1,1);
    objects[1].rotation.set(-0.3,-2.2,-0.1);
    scene.add(objects[1])
}, undefined, function ( error ) { console.error( error )});

loader.load('./models/spaceship2.glb', function ( gltf ) {
    objects[2] = gltf.scene;
    objects[2].position.set(0,-10,0);
    objects[2].scale.set(0.9,0.9,0.9);
    objects[2].rotation.set(-6,4,-1.9);
    scene.add(objects[2])
}, undefined, function ( error ) { console.error( error )});

loader.load('./models/brick_phone.glb', function ( gltf ) {
    objects[3] = gltf.scene;
    objects[3].position.set(0,-10,0);
    objects[3].scale.set(1.45,1.45,1.45);
    objects[3].rotation.set(0.7,-0.5,0.1);
    scene.add(objects[3])
}, undefined, function ( error ) { console.error( error )});

window.addEventListener( 'resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight);
});


const scrollSpeed = 0.05;
let scrollPercent = 0, offset = 0;

document.body.onscroll = () => {
    //calculate the current scroll progress as a percentage
    scrollPercent =
        ((document.documentElement.scrollTop || document.body.scrollTop) /
            ((document.documentElement.scrollHeight ||
                document.body.scrollHeight) -
                document.documentElement.clientHeight)) * 100;
}


function animate() {
    requestAnimationFrame( animate );
    // cube.rotation.x = scrollPercent/10;
	// cube.rotation.y = scrollPercent/10;

    offset += (scrollPercent - offset)* scrollSpeed;

    objects[0].position.y = -9 + offset/2;
    objects[1].position.y = -20.5 + offset/2;
    objects[2].position.y = -33 + offset/2;
    objects[3].position.y = -52.7 + offset/2;

    renderer.render( scene, camera );

    
}

animate();