// import './style.css'
// import * as THREE from 'three'

//**Canvas
// const canvas = document.querySelector('canvas.webgl')

//**  Scene
// const scene = new THREE.Scene()


// **  Objects

// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// // mesh.position.x = 0.7
// // mesh.position.y = -0.6
// // mesh.position.z = 1
// scene.add(mesh)


//** Axes Helper */
// const axesHelper = new THREE.AxesHelper(3)
// scene.add(axesHelper)


//  * * changes all 3 positions 
// mesh.position.set(0.7, -0.6, 1)
// // console.log(mesh.position.length())
// // mesh.position.normalize()


// //** Scale */
// // mesh.scale.x = 2
// // mesh.scale.y = 0.5
// // mesh.scale.z = 0.5 
// // Scale all three at once
// mesh.scale.set(2, 0.5, 0.5)

// **Rotation // Rotation or Quaternion Property
// mesh.rotation.reorder('YXZ')
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25
// rotation is Euler which is like putting an object threw a stick.


// ** Sizes
// const sizes = {
//     width: 800,
//     height: 600
// }


 //** Camera

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.z = 3
// camera.position.y = 1
// // camera.position.x = 1
// scene.add(camera)
// console.log(mesh.position.distanceTo(camera.position))
// camera.lookAt(mesh.position)

 //** Renderer


// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.render(scene, camera)