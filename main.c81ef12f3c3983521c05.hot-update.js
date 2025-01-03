"use strict";
self["webpackHotUpdategithub_globe"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './glowMesh'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './countries.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _files_my_flights_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files/my-flights.json */ "./src/files/my-flights.json");
/* harmony import */ var _files_hackathons_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./files/hackathons.json */ "./src/files/hackathons.json");
// Import necessary libraries and data







// Declare global variables
let camera, scene, renderer, controls;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let mouseX = 0, mouseY = 0;

// Initialize the scene
function initGlobe() {
    // Create the camera
    camera = new three__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(0, 0, 500);

    // Create the scene
    scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();

    // Initialize the renderer
    renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add controls
    controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__.OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2;

    // Add globe and data points
    addGlobe();

    // Add event listeners
    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onWindowResize);

    // Start animation
    animate();
}

// Add the globe and data points to the scene
function addGlobe() {
    // Validate country data
    if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module './countries.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) {
        console.error("Countries data missing!");
        return;
    }

    // Validate travel history
    if (!_files_my_flights_json__WEBPACK_IMPORTED_MODULE_1__.flights) {
        console.warn("Travel history data missing or invalid.");
    }

    // Validate hackathon data
    if (!_files_hackathons_json__WEBPACK_IMPORTED_MODULE_2__.hackathons) {
        console.warn("Hackathons data missing or invalid.");
    }

    // Add globe and data points
    const globeMaterial = new THREE.MeshBasicMaterial({ color: "#333" });

    // Glow effect
    const glowMesh = Object(function webpackMissingModule() { var e = new Error("Cannot find module './glowMesh'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(globeMaterial, {
        backside: false,
        color: "#2288ff",
        size: 2,
        power: 3,
    });
    scene.add(glowMesh);

    // Add country polygons
    const globe = new ThreeGlobe({
        hexPolygonColor: (e) => {
            const allowedCountries = ["USA", "GBR", "IND", "AUS"];
            return allowedCountries.includes(e.properties.ISO_A3)
                ? "rgba(255,255,255, 1)"
                : "rgba(255,255,255, 0.7)";
        },
    })
        .hexPolygonsData(Object(function webpackMissingModule() { var e = new Error("Cannot find module './countries.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
        .pointsData(_files_hackathons_json__WEBPACK_IMPORTED_MODULE_2__.hackathons) // Fixed typo
        .arcsData(_files_my_flights_json__WEBPACK_IMPORTED_MODULE_1__.flights);

    scene.add(globe);
}

// Handle mouse movement
function onMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) / window.innerWidth;
    mouseY = (event.clientY - windowHalfY) / window.innerHeight;
}

// Handle window resizing
function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Animation loop
function animate() {
    setTimeout(() => {
        camera.position.x +=
            Math.abs(mouseX) <= windowHalfX / 2
                ? (mouseX / 2 - camera.position.x) * 0.005
                : 0;
        camera.position.y += (-mouseY / 2 - camera.position.y) * 0.005;
        camera.lookAt(scene.position);
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }, 1000 / 60); // 60 FPS cap
}

// Initialize the application
initGlobe();


/***/ }),

/***/ "./src/files/hackathons.json":
/*!***********************************!*\
  !*** ./src/files/hackathons.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"type":"HackathonsCollection","hackathons":[{"text":"NYC","size":1,"country":"United States","city":"New York City","lat":"40.7128","lng":"-74.0060"},{"text":"SFO","size":1,"country":"United States","city":"San Francisco","lat":"37.7749","lng":"-122.4194"},{"text":"LON","size":1,"country":"United Kingdom","city":"London","lat":"51.5074","lng":"-0.1278"},{"text":"BLR","size":1,"country":"India","city":"Bangalore","lat":"12.9716","lng":"77.5946"},{"text":"SYD","size":1,"country":"Australia","city":"Sydney","lat":"-33.8688","lng":"151.2093"}]}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d2708bdefcae7d5c1454")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jODFlZjEyZjNjMzk4MzUyMWMwNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0U7QUFDVTtBQUM5QjtBQUNIO0FBQ1c7QUFDSjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvREFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdDQUFLO0FBQ3JCO0FBQ0E7QUFDQSxtQkFBbUIsZ0RBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0ZBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsK0lBQWtCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDJEQUFxQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOERBQW9CO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGVBQWU7QUFDdkU7QUFDQTtBQUNBLHFCQUFxQix5SUFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLHlCQUF5QiwrSUFBa0I7QUFDM0Msb0JBQW9CLDhEQUFvQjtBQUN4QyxrQkFBa0IsMkRBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxjQUFjO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekhBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0aHViLWdsb2JlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2dpdGh1Yi1nbG9iZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IG5lY2Vzc2FyeSBsaWJyYXJpZXMgYW5kIGRhdGFcclxuaW1wb3J0IHsgUGVyc3BlY3RpdmVDYW1lcmEsIFNjZW5lLCBXZWJHTFJlbmRlcmVyIH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHNcIjtcclxuaW1wb3J0IHsgY3JlYXRlR2xvd01lc2ggfSBmcm9tIFwiLi9nbG93TWVzaFwiO1xyXG5pbXBvcnQgY291bnRyaWVzIGZyb20gXCIuL2NvdW50cmllcy5qc29uXCI7XHJcbmltcG9ydCB0cmF2ZWxIaXN0b3J5IGZyb20gXCIuL2ZpbGVzL215LWZsaWdodHMuanNvblwiO1xyXG5pbXBvcnQgaGFja2F0aG9uIGZyb20gXCIuL2ZpbGVzL2hhY2thdGhvbnMuanNvblwiO1xyXG5cclxuLy8gRGVjbGFyZSBnbG9iYWwgdmFyaWFibGVzXHJcbmxldCBjYW1lcmEsIHNjZW5lLCByZW5kZXJlciwgY29udHJvbHM7XHJcbmxldCB3aW5kb3dIYWxmWCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcclxubGV0IHdpbmRvd0hhbGZZID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcclxubGV0IG1vdXNlWCA9IDAsIG1vdXNlWSA9IDA7XHJcblxyXG4vLyBJbml0aWFsaXplIHRoZSBzY2VuZVxyXG5mdW5jdGlvbiBpbml0R2xvYmUoKSB7XHJcbiAgICAvLyBDcmVhdGUgdGhlIGNhbWVyYVxyXG4gICAgY2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAyMDAwKTtcclxuICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMCwgNTAwKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgdGhlIHNjZW5lXHJcbiAgICBzY2VuZSA9IG5ldyBTY2VuZSgpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgdGhlIHJlbmRlcmVyXHJcbiAgICByZW5kZXJlciA9IG5ldyBXZWJHTFJlbmRlcmVyKCk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcbiAgICAvLyBBZGQgY29udHJvbHNcclxuICAgIGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlO1xyXG4gICAgY29udHJvbHMuYXV0b1JvdGF0ZVNwZWVkID0gMS4yO1xyXG5cclxuICAgIC8vIEFkZCBnbG9iZSBhbmQgZGF0YSBwb2ludHNcclxuICAgIGFkZEdsb2JlKCk7XHJcblxyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvbldpbmRvd1Jlc2l6ZSk7XHJcblxyXG4gICAgLy8gU3RhcnQgYW5pbWF0aW9uXHJcbiAgICBhbmltYXRlKCk7XHJcbn1cclxuXHJcbi8vIEFkZCB0aGUgZ2xvYmUgYW5kIGRhdGEgcG9pbnRzIHRvIHRoZSBzY2VuZVxyXG5mdW5jdGlvbiBhZGRHbG9iZSgpIHtcclxuICAgIC8vIFZhbGlkYXRlIGNvdW50cnkgZGF0YVxyXG4gICAgaWYgKCFjb3VudHJpZXMuZmVhdHVyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bnRyaWVzIGRhdGEgbWlzc2luZyFcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIHRyYXZlbCBoaXN0b3J5XHJcbiAgICBpZiAoIXRyYXZlbEhpc3RvcnkuZmxpZ2h0cykge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlRyYXZlbCBoaXN0b3J5IGRhdGEgbWlzc2luZyBvciBpbnZhbGlkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBoYWNrYXRob24gZGF0YVxyXG4gICAgaWYgKCFoYWNrYXRob24uaGFja2F0aG9ucykge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIkhhY2thdGhvbnMgZGF0YSBtaXNzaW5nIG9yIGludmFsaWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBnbG9iZSBhbmQgZGF0YSBwb2ludHNcclxuICAgIGNvbnN0IGdsb2JlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogXCIjMzMzXCIgfSk7XHJcblxyXG4gICAgLy8gR2xvdyBlZmZlY3RcclxuICAgIGNvbnN0IGdsb3dNZXNoID0gY3JlYXRlR2xvd01lc2goZ2xvYmVNYXRlcmlhbCwge1xyXG4gICAgICAgIGJhY2tzaWRlOiBmYWxzZSxcclxuICAgICAgICBjb2xvcjogXCIjMjI4OGZmXCIsXHJcbiAgICAgICAgc2l6ZTogMixcclxuICAgICAgICBwb3dlcjogMyxcclxuICAgIH0pO1xyXG4gICAgc2NlbmUuYWRkKGdsb3dNZXNoKTtcclxuXHJcbiAgICAvLyBBZGQgY291bnRyeSBwb2x5Z29uc1xyXG4gICAgY29uc3QgZ2xvYmUgPSBuZXcgVGhyZWVHbG9iZSh7XHJcbiAgICAgICAgaGV4UG9seWdvbkNvbG9yOiAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhbGxvd2VkQ291bnRyaWVzID0gW1wiVVNBXCIsIFwiR0JSXCIsIFwiSU5EXCIsIFwiQVVTXCJdO1xyXG4gICAgICAgICAgICByZXR1cm4gYWxsb3dlZENvdW50cmllcy5pbmNsdWRlcyhlLnByb3BlcnRpZXMuSVNPX0EzKVxyXG4gICAgICAgICAgICAgICAgPyBcInJnYmEoMjU1LDI1NSwyNTUsIDEpXCJcclxuICAgICAgICAgICAgICAgIDogXCJyZ2JhKDI1NSwyNTUsMjU1LCAwLjcpXCI7XHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgICAgLmhleFBvbHlnb25zRGF0YShjb3VudHJpZXMuZmVhdHVyZXMpXHJcbiAgICAgICAgLnBvaW50c0RhdGEoaGFja2F0aG9uLmhhY2thdGhvbnMpIC8vIEZpeGVkIHR5cG9cclxuICAgICAgICAuYXJjc0RhdGEodHJhdmVsSGlzdG9yeS5mbGlnaHRzKTtcclxuXHJcbiAgICBzY2VuZS5hZGQoZ2xvYmUpO1xyXG59XHJcblxyXG4vLyBIYW5kbGUgbW91c2UgbW92ZW1lbnRcclxuZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuICAgIG1vdXNlWCA9IChldmVudC5jbGllbnRYIC0gd2luZG93SGFsZlgpIC8gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBtb3VzZVkgPSAoZXZlbnQuY2xpZW50WSAtIHdpbmRvd0hhbGZZKSAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxufVxyXG5cclxuLy8gSGFuZGxlIHdpbmRvdyByZXNpemluZ1xyXG5mdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSgpIHtcclxuICAgIHdpbmRvd0hhbGZYID0gd2luZG93LmlubmVyV2lkdGggLyAyO1xyXG4gICAgd2luZG93SGFsZlkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xyXG4gICAgY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbn1cclxuXHJcbi8vIEFuaW1hdGlvbiBsb29wXHJcbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjYW1lcmEucG9zaXRpb24ueCArPVxyXG4gICAgICAgICAgICBNYXRoLmFicyhtb3VzZVgpIDw9IHdpbmRvd0hhbGZYIC8gMlxyXG4gICAgICAgICAgICAgICAgPyAobW91c2VYIC8gMiAtIGNhbWVyYS5wb3NpdGlvbi54KSAqIDAuMDA1XHJcbiAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgKz0gKC1tb3VzZVkgLyAyIC0gY2FtZXJhLnBvc2l0aW9uLnkpICogMC4wMDU7XHJcbiAgICAgICAgY2FtZXJhLmxvb2tBdChzY2VuZS5wb3NpdGlvbik7XHJcbiAgICAgICAgY29udHJvbHMudXBkYXRlKCk7XHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgIH0sIDEwMDAgLyA2MCk7IC8vIDYwIEZQUyBjYXBcclxufVxyXG5cclxuLy8gSW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cclxuaW5pdEdsb2JlKCk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQyNzA4YmRlZmNhZTdkNWMxNDU0XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9