import ThreeGlobe from "three-globe";
import { WebGLRenderer, Scene } from "three";
import {
  PerspectiveCamera,
  AmbientLight,
  DirectionalLight,
  Color,
  Fog,
  PointLight,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import countries from "./files/globe-data-min.json";
import travelHistory from "./files/my-flights.json";
import hackathonHistory from "./files/hackathons.json";

var renderer, camera, scene, controls;
let mouseX = 0;
let mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
var Globe;

init();
initGlobe();
onWindowResize();
animate();

// SECTION Initializing core ThreeJS elements
function init() {
  renderer = new WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  scene = new Scene();
  scene.add(new AmbientLight(0xbbbbbb, 0.3));
  scene.background = new Color(0x040d21);

  camera = new PerspectiveCamera();
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  var dLight = new DirectionalLight(0xffffff, 0.8);
  dLight.position.set(-800, 2000, 400);
  camera.add(dLight);

  var dLight1 = new DirectionalLight(0x7982f6, 1);
  dLight1.position.set(-200, 500, 200);
  camera.add(dLight1);

  var dLight2 = new PointLight(0x8566cc, 0.5);
  dLight2.position.set(-200, 500, 200);
  camera.add(dLight2);

  camera.position.z = 400;
  camera.position.x = 0;
  camera.position.y = 0;

  scene.add(camera);

  scene.fog = new Fog(0x535ef3, 400, 2000);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dynamicDampingFactor = 0.01;
  controls.enablePan = false;
  controls.minDistance = 200;
  controls.maxDistance = 500;
  controls.rotateSpeed = 0.8;
  controls.zoomSpeed = 1;
  controls.autoRotate = false;

  controls.minPolarAngle = Math.PI / 3.5;
  controls.maxPolarAngle = Math.PI - Math.PI / 3;

  window.addEventListener("resize", onWindowResize, false);
  document.addEventListener("mousemove", onMouseMove);
}

// SECTION Globe
function initGlobe() {
  Globe = new ThreeGlobe({
    waitForGlobeReady: true,
    animateIn: true,
  })
    .hexPolygonsData(countries.features)
    .hexPolygonResolution(3)
    .hexPolygonMargin(0.7)
    .showAtmosphere(true)
    .atmosphereColor("#3a228a")
    .atmosphereAltitude(0.25)
    .hexPolygonColor((e) => {
      if (
        ["KGZ", "KOR", "THA", "RUS", "UZB", "IDN", "KAZ", "MYS"].includes(
          e.properties.ISO_A3
        )
      ) {
        return "rgba(255,255,255, 1)";
      } else return "rgba(255,255,255, 0.7)";
    });

  setTimeout(() => {
    Globe.arcsData(travelHistory.flights)
      .arcColor((e) => {
        return e.status ? "#9cff00" : "#FF4000";
      })
      .arcAltitude((e) => e.arcAlt)
      .arcStroke((e) => (e.status ? 0.5 : 0.3))
      .arcDashLength(0.9)
      .arcDashGap(4)
      .arcDashAnimateTime(1000)
      .arcsTransitionDuration(1000)
      .arcDashInitialGap((e) => e.order * 1)
      .labelsData(hackathonHistory.hackathons)
      .labelColor(() => "#ffcb21")
      .labelDotOrientation(() => "right")
      .labelDotRadius(0.3)
      .labelSize((e) => e.size)
      .labelText("city")
      .labelResolution(6)
      .labelAltitude(0.01)
      .pointsData(hackathonHistory.hackathons)
      .pointColor(() => "#ffffff")
      .pointsMerge(true)
      .pointAltitude(0.07)
      .pointRadius(0.05);
  }, 1000);

  Globe.rotateY(-Math.PI * (5 / 9));
  Globe.rotateZ(-Math.PI / 6);

  const globeMaterial = Globe.globeMaterial();
  globeMaterial.color = new Color(0x3a228a);
  globeMaterial.emissive = new Color(0x220038);
  globeMaterial.emissiveIntensity = 0.1;
  globeMaterial.shininess = 0.7;

  scene.add(Globe);
}

function onMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  windowHalfX = window.innerWidth / 1.5;
  windowHalfY = window.innerHeight / 1.5;
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  camera.position.x +=
    Math.abs(mouseX) <= windowHalfX / 2
      ? (mouseX / 2 - camera.position.x) * 0.005
      : 0;
  camera.position.y += (-mouseY / 2 - camera.position.y) * 0.005;
  camera.lookAt(scene.position);
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
