"use strict";
self["webpackHotUpdategithub_globe"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three_globe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three-globe */ "./node_modules/three-globe/dist/three-globe.mjs");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.core.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var three_glow_mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three-glow-mesh */ "./node_modules/three-glow-mesh/dist/index.module.js");
/* harmony import */ var _files_globe_data_min_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files/globe-data-min.json */ "./src/files/globe-data-min.json");
/* harmony import */ var _files_my_flights_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./files/my-flights.json */ "./src/files/my-flights.json");
/* harmony import */ var _files_hackathons_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files/hackathons.json */ "./src/files/hackathons.json");








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
  // Initialize renderer
  renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.outputEncoding = THREE.sRGBEncoding;
  document.body.appendChild(renderer.domElement);

  // Initialize scene, light
  scene = new three__WEBPACK_IMPORTED_MODULE_5__.Scene();
  scene.add(new three__WEBPACK_IMPORTED_MODULE_5__.AmbientLight(0xbbbbbb, 0.3));
  scene.background = new three__WEBPACK_IMPORTED_MODULE_5__.Color(0x040d21);

  // Initialize camera, light
  camera = new three__WEBPACK_IMPORTED_MODULE_5__.PerspectiveCamera();
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  var dLight = new three__WEBPACK_IMPORTED_MODULE_5__.DirectionalLight(0xffffff, 0.8);
  dLight.position.set(-800, 2000, 400);
  camera.add(dLight);

  var dLight1 = new three__WEBPACK_IMPORTED_MODULE_5__.DirectionalLight(0x7982f6, 1);
  dLight1.position.set(-200, 500, 200);
  camera.add(dLight1);

  var dLight2 = new three__WEBPACK_IMPORTED_MODULE_5__.PointLight(0x8566cc, 0.5);
  dLight2.position.set(-200, 500, 200);
  camera.add(dLight2);

  camera.position.z = 400;
  camera.position.x = 0;
  camera.position.y = 0;

  scene.add(camera);

  // Additional effects
  scene.fog = new three__WEBPACK_IMPORTED_MODULE_5__.Fog(0x535ef3, 400, 2000);

  // Helpers
  // const axesHelper = new AxesHelper(800);
  // scene.add(axesHelper);
  // var helper = new DirectionalLightHelper(dLight);
  // scene.add(helper);
  // var helperCamera = new CameraHelper(dLight.shadow.camera);
  // scene.add(helperCamera);

  // Initialize controls
  controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_6__.OrbitControls(camera, renderer.domElement);
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
  // Initialize the Globe
  Globe = new three_globe__WEBPACK_IMPORTED_MODULE_7__["default"]({
    waitForGlobeReady: true,
    animateIn: true,
  })
    .hexPolygonsData(_files_globe_data_min_json__WEBPACK_IMPORTED_MODULE_1__.features)
    .hexPolygonResolution(3)
    .hexPolygonMargin(0.7)
    .showAtmosphere(true)
    .atmosphereColor("#3a228a")
    .atmosphereAltitude(0.25)
    .hexPolygonColor((e) => {
      if (
        ["USA", "GBR", "IND", "AUS"].includes(e.properties.ISO_A3)
      ) {
        return "rgba(255,255,255, 1)";
      } else {
        return "rgba(255,255,255, 0.7)";
      }      
    });

  // NOTE Arc animations are followed after the globe enters the scene
  setTimeout(() => {
    Globe.arcsData(_files_my_flights_json__WEBPACK_IMPORTED_MODULE_2__.flights)
      .arcColor((e) => {
        return e.status ? "#9cff00" : "#FF4000";
      })
      .arcAltitude((e) => {
        return e.arcAlt;
      })
      .arcStroke((e) => {
        return e.status ? 0.5 : 0.3;
      })
      .arcDashLength(0.9)
      .arcDashGap(4)
      .arcDashAnimateTime(1000)
      .arcsTransitionDuration(1000)
      .arcDashInitialGap((e) => e.order * 1)
      .labelsData(_files_hackathons_json__WEBPACK_IMPORTED_MODULE_3__.hackathons)
      .labelColor(() => "#ffcb21")
      .labelDotOrientation((e) => {
        return e.text === "ALA" ? "top" : "right";
      })
      .labelDotRadius(0.3)
      .labelSize((e) => e.size)
      .labelText("city")
      .labelResolution(6)
      .labelAltitude(0.01)
      .pointsData(hackthon.hack)
      .pointColor(() => "#ffffff")
      .pointsMerge(true)
      .pointAltitude(0.07)
      .pointRadius(0.05);
  }, 1000);

  Globe.rotateY(-Math.PI * (5 / 9));
  Globe.rotateZ(-Math.PI / 6);
  const globeMaterial = Globe.globeMaterial();
  globeMaterial.color = new three__WEBPACK_IMPORTED_MODULE_5__.Color(0x3a228a);
  globeMaterial.emissive = new three__WEBPACK_IMPORTED_MODULE_5__.Color(0x220038);
  globeMaterial.emissiveIntensity = 0.1;
  globeMaterial.shininess = 0.7;

  // NOTE Cool stuff
  // globeMaterial.wireframe = true;

  scene.add(Globe);
}

function onMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
  // console.log("x: " + mouseX + " y: " + mouseY);
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d8bbe7f3225561ba275d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xMjY4NWMwY2IwOWY1MmNjZWM4Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUNRO0FBWTlCO0FBQzhEO0FBQzVCO0FBQ0c7QUFDQTtBQUNKO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnREFBYSxHQUFHLGlCQUFpQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHdDQUFLO0FBQ25CLGdCQUFnQiwrQ0FBWTtBQUM1Qix5QkFBeUIsd0NBQUs7QUFDOUI7QUFDQTtBQUNBLGVBQWUsb0RBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtREFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1EQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkNBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0NBQUc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUZBQWE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1EQUFVO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gscUJBQXFCLGdFQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBcUI7QUFDeEM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4REFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdDQUFLO0FBQ2pDLCtCQUErQix3Q0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNoTUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXRodWItZ2xvYmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2l0aHViLWdsb2JlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhyZWVHbG9iZSBmcm9tIFwidGhyZWUtZ2xvYmVcIjtcclxuaW1wb3J0IHsgV2ViR0xSZW5kZXJlciwgU2NlbmUgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHtcclxuICBQZXJzcGVjdGl2ZUNhbWVyYSxcclxuICBBbWJpZW50TGlnaHQsXHJcbiAgRGlyZWN0aW9uYWxMaWdodCxcclxuICBDb2xvcixcclxuICBGb2csXHJcbiAgLy8gQXhlc0hlbHBlcixcclxuICAvLyBEaXJlY3Rpb25hbExpZ2h0SGVscGVyLFxyXG4gIC8vIENhbWVyYUhlbHBlcixcclxuICBQb2ludExpZ2h0LFxyXG4gIFNwaGVyZUdlb21ldHJ5LFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzLmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUdsb3dNZXNoIH0gZnJvbSBcInRocmVlLWdsb3ctbWVzaFwiO1xyXG5pbXBvcnQgY291bnRyaWVzIGZyb20gXCIuL2ZpbGVzL2dsb2JlLWRhdGEtbWluLmpzb25cIjtcclxuaW1wb3J0IHRyYXZlbEhpc3RvcnkgZnJvbSBcIi4vZmlsZXMvbXktZmxpZ2h0cy5qc29uXCI7XHJcbmltcG9ydCBoYWNrYXRob24gZnJvbSBcIi4vZmlsZXMvaGFja2F0aG9ucy5qc29uXCI7XHJcbnZhciByZW5kZXJlciwgY2FtZXJhLCBzY2VuZSwgY29udHJvbHM7XHJcbmxldCBtb3VzZVggPSAwO1xyXG5sZXQgbW91c2VZID0gMDtcclxubGV0IHdpbmRvd0hhbGZYID0gd2luZG93LmlubmVyV2lkdGggLyAyO1xyXG5sZXQgd2luZG93SGFsZlkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xyXG52YXIgR2xvYmU7XHJcblxyXG5pbml0KCk7XHJcbmluaXRHbG9iZSgpO1xyXG5vbldpbmRvd1Jlc2l6ZSgpO1xyXG5hbmltYXRlKCk7XHJcblxyXG4vLyBTRUNUSU9OIEluaXRpYWxpemluZyBjb3JlIFRocmVlSlMgZWxlbWVudHNcclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAvLyBJbml0aWFsaXplIHJlbmRlcmVyXHJcbiAgcmVuZGVyZXIgPSBuZXcgV2ViR0xSZW5kZXJlcih7IGFudGlhbGlhczogdHJ1ZSB9KTtcclxuICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcclxuICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gIC8vIHJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG4gIC8vIEluaXRpYWxpemUgc2NlbmUsIGxpZ2h0XHJcbiAgc2NlbmUgPSBuZXcgU2NlbmUoKTtcclxuICBzY2VuZS5hZGQobmV3IEFtYmllbnRMaWdodCgweGJiYmJiYiwgMC4zKSk7XHJcbiAgc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBDb2xvcigweDA0MGQyMSk7XHJcblxyXG4gIC8vIEluaXRpYWxpemUgY2FtZXJhLCBsaWdodFxyXG4gIGNhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYSgpO1xyXG4gIGNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICB2YXIgZExpZ2h0ID0gbmV3IERpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIDAuOCk7XHJcbiAgZExpZ2h0LnBvc2l0aW9uLnNldCgtODAwLCAyMDAwLCA0MDApO1xyXG4gIGNhbWVyYS5hZGQoZExpZ2h0KTtcclxuXHJcbiAgdmFyIGRMaWdodDEgPSBuZXcgRGlyZWN0aW9uYWxMaWdodCgweDc5ODJmNiwgMSk7XHJcbiAgZExpZ2h0MS5wb3NpdGlvbi5zZXQoLTIwMCwgNTAwLCAyMDApO1xyXG4gIGNhbWVyYS5hZGQoZExpZ2h0MSk7XHJcblxyXG4gIHZhciBkTGlnaHQyID0gbmV3IFBvaW50TGlnaHQoMHg4NTY2Y2MsIDAuNSk7XHJcbiAgZExpZ2h0Mi5wb3NpdGlvbi5zZXQoLTIwMCwgNTAwLCAyMDApO1xyXG4gIGNhbWVyYS5hZGQoZExpZ2h0Mik7XHJcblxyXG4gIGNhbWVyYS5wb3NpdGlvbi56ID0gNDAwO1xyXG4gIGNhbWVyYS5wb3NpdGlvbi54ID0gMDtcclxuICBjYW1lcmEucG9zaXRpb24ueSA9IDA7XHJcblxyXG4gIHNjZW5lLmFkZChjYW1lcmEpO1xyXG5cclxuICAvLyBBZGRpdGlvbmFsIGVmZmVjdHNcclxuICBzY2VuZS5mb2cgPSBuZXcgRm9nKDB4NTM1ZWYzLCA0MDAsIDIwMDApO1xyXG5cclxuICAvLyBIZWxwZXJzXHJcbiAgLy8gY29uc3QgYXhlc0hlbHBlciA9IG5ldyBBeGVzSGVscGVyKDgwMCk7XHJcbiAgLy8gc2NlbmUuYWRkKGF4ZXNIZWxwZXIpO1xyXG4gIC8vIHZhciBoZWxwZXIgPSBuZXcgRGlyZWN0aW9uYWxMaWdodEhlbHBlcihkTGlnaHQpO1xyXG4gIC8vIHNjZW5lLmFkZChoZWxwZXIpO1xyXG4gIC8vIHZhciBoZWxwZXJDYW1lcmEgPSBuZXcgQ2FtZXJhSGVscGVyKGRMaWdodC5zaGFkb3cuY2FtZXJhKTtcclxuICAvLyBzY2VuZS5hZGQoaGVscGVyQ2FtZXJhKTtcclxuXHJcbiAgLy8gSW5pdGlhbGl6ZSBjb250cm9sc1xyXG4gIGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcclxuICBjb250cm9scy5lbmFibGVEYW1waW5nID0gdHJ1ZTtcclxuICBjb250cm9scy5keW5hbWljRGFtcGluZ0ZhY3RvciA9IDAuMDE7XHJcbiAgY29udHJvbHMuZW5hYmxlUGFuID0gZmFsc2U7XHJcbiAgY29udHJvbHMubWluRGlzdGFuY2UgPSAyMDA7XHJcbiAgY29udHJvbHMubWF4RGlzdGFuY2UgPSA1MDA7XHJcbiAgY29udHJvbHMucm90YXRlU3BlZWQgPSAwLjg7XHJcbiAgY29udHJvbHMuem9vbVNwZWVkID0gMTtcclxuICBjb250cm9scy5hdXRvUm90YXRlID0gZmFsc2U7XHJcblxyXG4gIGNvbnRyb2xzLm1pblBvbGFyQW5nbGUgPSBNYXRoLlBJIC8gMy41O1xyXG4gIGNvbnRyb2xzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJIC0gTWF0aC5QSSAvIDM7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uV2luZG93UmVzaXplLCBmYWxzZSk7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XHJcbn1cclxuXHJcbi8vIFNFQ1RJT04gR2xvYmVcclxuZnVuY3Rpb24gaW5pdEdsb2JlKCkge1xyXG4gIC8vIEluaXRpYWxpemUgdGhlIEdsb2JlXHJcbiAgR2xvYmUgPSBuZXcgVGhyZWVHbG9iZSh7XHJcbiAgICB3YWl0Rm9yR2xvYmVSZWFkeTogdHJ1ZSxcclxuICAgIGFuaW1hdGVJbjogdHJ1ZSxcclxuICB9KVxyXG4gICAgLmhleFBvbHlnb25zRGF0YShjb3VudHJpZXMuZmVhdHVyZXMpXHJcbiAgICAuaGV4UG9seWdvblJlc29sdXRpb24oMylcclxuICAgIC5oZXhQb2x5Z29uTWFyZ2luKDAuNylcclxuICAgIC5zaG93QXRtb3NwaGVyZSh0cnVlKVxyXG4gICAgLmF0bW9zcGhlcmVDb2xvcihcIiMzYTIyOGFcIilcclxuICAgIC5hdG1vc3BoZXJlQWx0aXR1ZGUoMC4yNSlcclxuICAgIC5oZXhQb2x5Z29uQ29sb3IoKGUpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIFtcIlVTQVwiLCBcIkdCUlwiLCBcIklORFwiLCBcIkFVU1wiXS5pbmNsdWRlcyhlLnByb3BlcnRpZXMuSVNPX0EzKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gXCJyZ2JhKDI1NSwyNTUsMjU1LCAxKVwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcInJnYmEoMjU1LDI1NSwyNTUsIDAuNylcIjtcclxuICAgICAgfSAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gIC8vIE5PVEUgQXJjIGFuaW1hdGlvbnMgYXJlIGZvbGxvd2VkIGFmdGVyIHRoZSBnbG9iZSBlbnRlcnMgdGhlIHNjZW5lXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBHbG9iZS5hcmNzRGF0YSh0cmF2ZWxIaXN0b3J5LmZsaWdodHMpXHJcbiAgICAgIC5hcmNDb2xvcigoZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBlLnN0YXR1cyA/IFwiIzljZmYwMFwiIDogXCIjRkY0MDAwXCI7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hcmNBbHRpdHVkZSgoZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBlLmFyY0FsdDtcclxuICAgICAgfSlcclxuICAgICAgLmFyY1N0cm9rZSgoZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBlLnN0YXR1cyA/IDAuNSA6IDAuMztcclxuICAgICAgfSlcclxuICAgICAgLmFyY0Rhc2hMZW5ndGgoMC45KVxyXG4gICAgICAuYXJjRGFzaEdhcCg0KVxyXG4gICAgICAuYXJjRGFzaEFuaW1hdGVUaW1lKDEwMDApXHJcbiAgICAgIC5hcmNzVHJhbnNpdGlvbkR1cmF0aW9uKDEwMDApXHJcbiAgICAgIC5hcmNEYXNoSW5pdGlhbEdhcCgoZSkgPT4gZS5vcmRlciAqIDEpXHJcbiAgICAgIC5sYWJlbHNEYXRhKGhhY2thdGhvbi5oYWNrYXRob25zKVxyXG4gICAgICAubGFiZWxDb2xvcigoKSA9PiBcIiNmZmNiMjFcIilcclxuICAgICAgLmxhYmVsRG90T3JpZW50YXRpb24oKGUpID0+IHtcclxuICAgICAgICByZXR1cm4gZS50ZXh0ID09PSBcIkFMQVwiID8gXCJ0b3BcIiA6IFwicmlnaHRcIjtcclxuICAgICAgfSlcclxuICAgICAgLmxhYmVsRG90UmFkaXVzKDAuMylcclxuICAgICAgLmxhYmVsU2l6ZSgoZSkgPT4gZS5zaXplKVxyXG4gICAgICAubGFiZWxUZXh0KFwiY2l0eVwiKVxyXG4gICAgICAubGFiZWxSZXNvbHV0aW9uKDYpXHJcbiAgICAgIC5sYWJlbEFsdGl0dWRlKDAuMDEpXHJcbiAgICAgIC5wb2ludHNEYXRhKGhhY2t0aG9uLmhhY2spXHJcbiAgICAgIC5wb2ludENvbG9yKCgpID0+IFwiI2ZmZmZmZlwiKVxyXG4gICAgICAucG9pbnRzTWVyZ2UodHJ1ZSlcclxuICAgICAgLnBvaW50QWx0aXR1ZGUoMC4wNylcclxuICAgICAgLnBvaW50UmFkaXVzKDAuMDUpO1xyXG4gIH0sIDEwMDApO1xyXG5cclxuICBHbG9iZS5yb3RhdGVZKC1NYXRoLlBJICogKDUgLyA5KSk7XHJcbiAgR2xvYmUucm90YXRlWigtTWF0aC5QSSAvIDYpO1xyXG4gIGNvbnN0IGdsb2JlTWF0ZXJpYWwgPSBHbG9iZS5nbG9iZU1hdGVyaWFsKCk7XHJcbiAgZ2xvYmVNYXRlcmlhbC5jb2xvciA9IG5ldyBDb2xvcigweDNhMjI4YSk7XHJcbiAgZ2xvYmVNYXRlcmlhbC5lbWlzc2l2ZSA9IG5ldyBDb2xvcigweDIyMDAzOCk7XHJcbiAgZ2xvYmVNYXRlcmlhbC5lbWlzc2l2ZUludGVuc2l0eSA9IDAuMTtcclxuICBnbG9iZU1hdGVyaWFsLnNoaW5pbmVzcyA9IDAuNztcclxuXHJcbiAgLy8gTk9URSBDb29sIHN0dWZmXHJcbiAgLy8gZ2xvYmVNYXRlcmlhbC53aXJlZnJhbWUgPSB0cnVlO1xyXG5cclxuICBzY2VuZS5hZGQoR2xvYmUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xyXG4gIG1vdXNlWCA9IGV2ZW50LmNsaWVudFggLSB3aW5kb3dIYWxmWDtcclxuICBtb3VzZVkgPSBldmVudC5jbGllbnRZIC0gd2luZG93SGFsZlk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJ4OiBcIiArIG1vdXNlWCArIFwiIHk6IFwiICsgbW91c2VZKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XHJcbiAgY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgd2luZG93SGFsZlggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDEuNTtcclxuICB3aW5kb3dIYWxmWSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDEuNTtcclxuICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbmltYXRlKCkge1xyXG4gIGNhbWVyYS5wb3NpdGlvbi54ICs9XHJcbiAgICBNYXRoLmFicyhtb3VzZVgpIDw9IHdpbmRvd0hhbGZYIC8gMlxyXG4gICAgICA/IChtb3VzZVggLyAyIC0gY2FtZXJhLnBvc2l0aW9uLngpICogMC4wMDVcclxuICAgICAgOiAwO1xyXG4gIGNhbWVyYS5wb3NpdGlvbi55ICs9ICgtbW91c2VZIC8gMiAtIGNhbWVyYS5wb3NpdGlvbi55KSAqIDAuMDA1O1xyXG4gIGNhbWVyYS5sb29rQXQoc2NlbmUucG9zaXRpb24pO1xyXG4gIGNvbnRyb2xzLnVwZGF0ZSgpO1xyXG4gIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkOGJiZTdmMzIyNTU2MWJhMjc1ZFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==