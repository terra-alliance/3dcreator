import * as THREE from 'three';
import { colors, randomColor } from "./colors.js";

//__________________________________________________________________________________________________ Light Creators

//________________________________________________ Light

export const createAmbientLight = () => {

  const light = new THREE.AmbientLight( colors.white );

  return light;

};

export const createPointLight = ( x, y, z ) => {

  const light = new THREE.PointLight(0xFFFFFF);
  light.position.set( x, y, z );

  return light;

};

//__________________________________________________________________________________________________ Material Creators

//________________________________________________ Material

const createMaterial = () => {

  const material = new THREE.MeshPhongMaterial({
    color: randomColor(),
    transparent: true,
    opacity: 0.3
  });

  return material;

};

//__________________________________________________________________________________________________ Mesh Creators

//________________________________________________ Plane

export const createPlane = () => {

  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry( 1, 1 ),
    new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} )
  );

  return plane;

};

//________________________________________________ Box

export const createBox = (points) => {

  let boxes = []

  points.forEach(function(p) {
    let box = new THREE.Mesh(
      new THREE.BoxGeometry( p.x, p.y, p.z ),
      createMaterial())
    boxes.push(box);
});

  return boxes[0];

};

//________________________________________________ Cylinder

export const createCylinder = () => {

  const cylinder = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.5, 0.5, 1, 32 ),
    createMaterial()
  );

  return cylinder;

};

//________________________________________________ Cone

export const createCone = () => {

  const cone = new THREE.Mesh(
    new THREE.ConeGeometry( 0.5, 1, 32 ),
    createMaterial()
  );

  return cone;

};

//________________________________________________ Torus

export const createTorus = () => {

  const torus = new THREE.Mesh(
    new THREE.TorusGeometry( 0.5, 0.2, 12, 45 ),
    createMaterial()
  );

  return torus;

};

//__________________________________________________________________________________________________ Architecture Creators

//________________________________________________ Room

export const createRoom = ( x, y, z, t ) => {

  const floor = new THREE.Mesh(
    new THREE.BoxGeometry( x + t * 2, t, y + t * 2 ),
    createMaterial()
  );
  floor.position.y -= z / 2 + t / 2;

  const roof = new THREE.Mesh(
    new THREE.BoxGeometry( x + t * 2, t, y + t * 2 ),
    createMaterial()
  );
  roof.position.y += z / 2 + t / 2;

  const frontWall = new THREE.Mesh(
    new THREE.BoxGeometry( x + t * 2, z, t ),
    createMaterial()
  );
  frontWall.position.z -= y / 2 + t / 2;

  const backWall = new THREE.Mesh(
    new THREE.BoxGeometry( x + t * 2, z, t ),
    createMaterial()
  );
  backWall.position.z += y / 2 + t / 2;

  const rightWall = new THREE.Mesh(
    new THREE.BoxGeometry( t, z, y ),
    createMaterial()
  );
  rightWall.position.x += y / 2 + t / 2;

  const leftWall = new THREE.Mesh(
    new THREE.BoxGeometry( t, z, y ),
    createMaterial()
  );
  leftWall.position.x -= y / 2 + t / 2;

  const room = new THREE.Group();
  room.add( floor );
  room.add( frontWall );
  room.add( backWall );
  room.add( rightWall );
  room.add( leftWall );
  room.add( roof );

  return room;

};

//__________________________________________________________________________________________________ Math Creators

export const point = (x, y, z) => {

  let point = {
    x: x,
    y: y,
    z: z
  };

  return point;

};

export const graft = (elements) => {
  let array = [];
  array.push(elements);
  return array;
};

export const createLineOfPoints = (amount, lineStart, lineEnd) => {

};

export const createPointsInCircle = (amount, radius) => {

  let x;
  let y;
  let z;
  let points = [];

  for (let step = 0; step < amount; step++) {
    const angle = (360 / amount) * (step + 1);

    x = parseFloat((Math.cos(angle * Math.PI / 180) * radius).toFixed(10));
    y = parseFloat((Math.sin(angle * Math.PI / 180) * radius).toFixed(10));
    z = 0;

    points.push([x, y, z])
  };

  return points;

};

//__________________________________________________________________________________________________ Math Geometry Creators



































































//__________________________________________________________________________________________________ End
