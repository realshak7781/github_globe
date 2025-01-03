"use strict";
self["webpackHotUpdategithub_globe"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './glowMesh'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './countries.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './files/'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './hackathons.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Import necessary libraries and data







// Declare global variables
let camera, scene, renderer, controls;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let mouseX = 0, mouseY = 0;

// Initialize the scene
function initGlobe() {
    // Create the camera
    camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(0, 0, 500);

    // Create the scene
    scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();

    // Initialize the renderer
    renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add controls
    controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__.OrbitControls(camera, renderer.domElement);
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
    if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module './files/'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) {
        console.warn("Travel history data missing or invalid.");
    }

    // Validate hackathon data
    if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module './hackathons.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) {
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
        .pointsData(Object(function webpackMissingModule() { var e = new Error("Cannot find module './hackathons.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) // Fixed typo
        .arcsData(Object(function webpackMissingModule() { var e = new Error("Cannot find module './files/'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9bea878b5960671995de")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kMGYxYzM4ODM2ZWM4OGE0MmQxOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0U7QUFDVTtBQUM5QjtBQUNIO0FBQ0o7QUFDSztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvREFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdDQUFLO0FBQ3JCO0FBQ0E7QUFDQSxtQkFBbUIsZ0RBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0ZBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsK0lBQWtCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHVJQUFxQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZ0pBQW9CO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGVBQWU7QUFDdkU7QUFDQTtBQUNBLHFCQUFxQix5SUFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLHlCQUF5QiwrSUFBa0I7QUFDM0Msb0JBQW9CLGdKQUFvQjtBQUN4QyxrQkFBa0IsdUlBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxjQUFjO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7VUN6SEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXRodWItZ2xvYmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2l0aHViLWdsb2JlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgbmVjZXNzYXJ5IGxpYnJhcmllcyBhbmQgZGF0YVxyXG5pbXBvcnQgeyBQZXJzcGVjdGl2ZUNhbWVyYSwgU2NlbmUsIFdlYkdMUmVuZGVyZXIgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9sc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVHbG93TWVzaCB9IGZyb20gXCIuL2dsb3dNZXNoXCI7XHJcbmltcG9ydCBjb3VudHJpZXMgZnJvbSBcIi4vY291bnRyaWVzLmpzb25cIjtcclxuaW1wb3J0IHRyYXZlbEhpc3RvcnkgZnJvbSBcIi4vZmlsZXMvXCI7XHJcbmltcG9ydCBoYWNrYXRob24gZnJvbSBcIi4vaGFja2F0aG9ucy5qc29uXCI7XHJcblxyXG4vLyBEZWNsYXJlIGdsb2JhbCB2YXJpYWJsZXNcclxubGV0IGNhbWVyYSwgc2NlbmUsIHJlbmRlcmVyLCBjb250cm9scztcclxubGV0IHdpbmRvd0hhbGZYID0gd2luZG93LmlubmVyV2lkdGggLyAyO1xyXG5sZXQgd2luZG93SGFsZlkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xyXG5sZXQgbW91c2VYID0gMCwgbW91c2VZID0gMDtcclxuXHJcbi8vIEluaXRpYWxpemUgdGhlIHNjZW5lXHJcbmZ1bmN0aW9uIGluaXRHbG9iZSgpIHtcclxuICAgIC8vIENyZWF0ZSB0aGUgY2FtZXJhXHJcbiAgICBjYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDIwMDApO1xyXG4gICAgY2FtZXJhLnBvc2l0aW9uLnNldCgwLCAwLCA1MDApO1xyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgc2NlbmVcclxuICAgIHNjZW5lID0gbmV3IFNjZW5lKCk7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgcmVuZGVyZXJcclxuICAgIHJlbmRlcmVyID0gbmV3IFdlYkdMUmVuZGVyZXIoKTtcclxuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgIC8vIEFkZCBjb250cm9sc1xyXG4gICAgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWU7XHJcbiAgICBjb250cm9scy5hdXRvUm90YXRlU3BlZWQgPSAxLjI7XHJcblxyXG4gICAgLy8gQWRkIGdsb2JlIGFuZCBkYXRhIHBvaW50c1xyXG4gICAgYWRkR2xvYmUoKTtcclxuXHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uV2luZG93UmVzaXplKTtcclxuXHJcbiAgICAvLyBTdGFydCBhbmltYXRpb25cclxuICAgIGFuaW1hdGUoKTtcclxufVxyXG5cclxuLy8gQWRkIHRoZSBnbG9iZSBhbmQgZGF0YSBwb2ludHMgdG8gdGhlIHNjZW5lXHJcbmZ1bmN0aW9uIGFkZEdsb2JlKCkge1xyXG4gICAgLy8gVmFsaWRhdGUgY291bnRyeSBkYXRhXHJcbiAgICBpZiAoIWNvdW50cmllcy5mZWF0dXJlcykge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VudHJpZXMgZGF0YSBtaXNzaW5nIVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgdHJhdmVsIGhpc3RvcnlcclxuICAgIGlmICghdHJhdmVsSGlzdG9yeS5mbGlnaHRzKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVHJhdmVsIGhpc3RvcnkgZGF0YSBtaXNzaW5nIG9yIGludmFsaWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIGhhY2thdGhvbiBkYXRhXHJcbiAgICBpZiAoIWhhY2thdGhvbi5oYWNrYXRob25zKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiSGFja2F0aG9ucyBkYXRhIG1pc3Npbmcgb3IgaW52YWxpZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGdsb2JlIGFuZCBkYXRhIHBvaW50c1xyXG4gICAgY29uc3QgZ2xvYmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiBcIiMzMzNcIiB9KTtcclxuXHJcbiAgICAvLyBHbG93IGVmZmVjdFxyXG4gICAgY29uc3QgZ2xvd01lc2ggPSBjcmVhdGVHbG93TWVzaChnbG9iZU1hdGVyaWFsLCB7XHJcbiAgICAgICAgYmFja3NpZGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbG9yOiBcIiMyMjg4ZmZcIixcclxuICAgICAgICBzaXplOiAyLFxyXG4gICAgICAgIHBvd2VyOiAzLFxyXG4gICAgfSk7XHJcbiAgICBzY2VuZS5hZGQoZ2xvd01lc2gpO1xyXG5cclxuICAgIC8vIEFkZCBjb3VudHJ5IHBvbHlnb25zXHJcbiAgICBjb25zdCBnbG9iZSA9IG5ldyBUaHJlZUdsb2JlKHtcclxuICAgICAgICBoZXhQb2x5Z29uQ29sb3I6IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbG93ZWRDb3VudHJpZXMgPSBbXCJVU0FcIiwgXCJHQlJcIiwgXCJJTkRcIiwgXCJBVVNcIl07XHJcbiAgICAgICAgICAgIHJldHVybiBhbGxvd2VkQ291bnRyaWVzLmluY2x1ZGVzKGUucHJvcGVydGllcy5JU09fQTMpXHJcbiAgICAgICAgICAgICAgICA/IFwicmdiYSgyNTUsMjU1LDI1NSwgMSlcIlxyXG4gICAgICAgICAgICAgICAgOiBcInJnYmEoMjU1LDI1NSwyNTUsIDAuNylcIjtcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgICAuaGV4UG9seWdvbnNEYXRhKGNvdW50cmllcy5mZWF0dXJlcylcclxuICAgICAgICAucG9pbnRzRGF0YShoYWNrYXRob24uaGFja2F0aG9ucykgLy8gRml4ZWQgdHlwb1xyXG4gICAgICAgIC5hcmNzRGF0YSh0cmF2ZWxIaXN0b3J5LmZsaWdodHMpO1xyXG5cclxuICAgIHNjZW5lLmFkZChnbG9iZSk7XHJcbn1cclxuXHJcbi8vIEhhbmRsZSBtb3VzZSBtb3ZlbWVudFxyXG5mdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xyXG4gICAgbW91c2VYID0gKGV2ZW50LmNsaWVudFggLSB3aW5kb3dIYWxmWCkgLyB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIG1vdXNlWSA9IChldmVudC5jbGllbnRZIC0gd2luZG93SGFsZlkpIC8gd2luZG93LmlubmVySGVpZ2h0O1xyXG59XHJcblxyXG4vLyBIYW5kbGUgd2luZG93IHJlc2l6aW5nXHJcbmZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xyXG4gICAgd2luZG93SGFsZlggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XHJcbiAgICB3aW5kb3dIYWxmWSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XHJcbiAgICBjYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxufVxyXG5cclxuLy8gQW5pbWF0aW9uIGxvb3BcclxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ICs9XHJcbiAgICAgICAgICAgIE1hdGguYWJzKG1vdXNlWCkgPD0gd2luZG93SGFsZlggLyAyXHJcbiAgICAgICAgICAgICAgICA/IChtb3VzZVggLyAyIC0gY2FtZXJhLnBvc2l0aW9uLngpICogMC4wMDVcclxuICAgICAgICAgICAgICAgIDogMDtcclxuICAgICAgICBjYW1lcmEucG9zaXRpb24ueSArPSAoLW1vdXNlWSAvIDIgLSBjYW1lcmEucG9zaXRpb24ueSkgKiAwLjAwNTtcclxuICAgICAgICBjYW1lcmEubG9va0F0KHNjZW5lLnBvc2l0aW9uKTtcclxuICAgICAgICBjb250cm9scy51cGRhdGUoKTtcclxuICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG4gICAgfSwgMTAwMCAvIDYwKTsgLy8gNjAgRlBTIGNhcFxyXG59XHJcblxyXG4vLyBJbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvblxyXG5pbml0R2xvYmUoKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWJlYTg3OGI1OTYwNjcxOTk1ZGVcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=