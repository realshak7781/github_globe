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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './files'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
    if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module './files'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) {
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
        .arcsData(Object(function webpackMissingModule() { var e = new Error("Cannot find module './files'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
/******/ 	__webpack_require__.h = () => ("d0f1c38836ec88a42d19")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40MzJkY2VjZjE5ODE3MDExYTE0Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0U7QUFDVTtBQUM5QjtBQUNIO0FBQ0w7QUFDTTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvREFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdDQUFLO0FBQ3JCO0FBQ0E7QUFDQSxtQkFBbUIsZ0RBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0ZBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsK0lBQWtCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNJQUFxQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZ0pBQW9CO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGVBQWU7QUFDdkU7QUFDQTtBQUNBLHFCQUFxQix5SUFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLHlCQUF5QiwrSUFBa0I7QUFDM0Msb0JBQW9CLGdKQUFvQjtBQUN4QyxrQkFBa0Isc0lBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxjQUFjO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7VUN6SEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXRodWItZ2xvYmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2l0aHViLWdsb2JlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgbmVjZXNzYXJ5IGxpYnJhcmllcyBhbmQgZGF0YVxyXG5pbXBvcnQgeyBQZXJzcGVjdGl2ZUNhbWVyYSwgU2NlbmUsIFdlYkdMUmVuZGVyZXIgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9sc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVHbG93TWVzaCB9IGZyb20gXCIuL2dsb3dNZXNoXCI7XHJcbmltcG9ydCBjb3VudHJpZXMgZnJvbSBcIi4vY291bnRyaWVzLmpzb25cIjtcclxuaW1wb3J0IHRyYXZlbEhpc3RvcnkgZnJvbSBcIi4vZmlsZXNcIjtcclxuaW1wb3J0IGhhY2thdGhvbiBmcm9tIFwiLi9oYWNrYXRob25zLmpzb25cIjtcclxuXHJcbi8vIERlY2xhcmUgZ2xvYmFsIHZhcmlhYmxlc1xyXG5sZXQgY2FtZXJhLCBzY2VuZSwgcmVuZGVyZXIsIGNvbnRyb2xzO1xyXG5sZXQgd2luZG93SGFsZlggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XHJcbmxldCB3aW5kb3dIYWxmWSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XHJcbmxldCBtb3VzZVggPSAwLCBtb3VzZVkgPSAwO1xyXG5cclxuLy8gSW5pdGlhbGl6ZSB0aGUgc2NlbmVcclxuZnVuY3Rpb24gaW5pdEdsb2JlKCkge1xyXG4gICAgLy8gQ3JlYXRlIHRoZSBjYW1lcmFcclxuICAgIGNhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMjAwMCk7XHJcbiAgICBjYW1lcmEucG9zaXRpb24uc2V0KDAsIDAsIDUwMCk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBzY2VuZVxyXG4gICAgc2NlbmUgPSBuZXcgU2NlbmUoKTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIHRoZSByZW5kZXJlclxyXG4gICAgcmVuZGVyZXIgPSBuZXcgV2ViR0xSZW5kZXJlcigpO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG4gICAgLy8gQWRkIGNvbnRyb2xzXHJcbiAgICBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZTtcclxuICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGVTcGVlZCA9IDEuMjtcclxuXHJcbiAgICAvLyBBZGQgZ2xvYmUgYW5kIGRhdGEgcG9pbnRzXHJcbiAgICBhZGRHbG9iZSgpO1xyXG5cclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25XaW5kb3dSZXNpemUpO1xyXG5cclxuICAgIC8vIFN0YXJ0IGFuaW1hdGlvblxyXG4gICAgYW5pbWF0ZSgpO1xyXG59XHJcblxyXG4vLyBBZGQgdGhlIGdsb2JlIGFuZCBkYXRhIHBvaW50cyB0byB0aGUgc2NlbmVcclxuZnVuY3Rpb24gYWRkR2xvYmUoKSB7XHJcbiAgICAvLyBWYWxpZGF0ZSBjb3VudHJ5IGRhdGFcclxuICAgIGlmICghY291bnRyaWVzLmZlYXR1cmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNvdW50cmllcyBkYXRhIG1pc3NpbmchXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGF0ZSB0cmF2ZWwgaGlzdG9yeVxyXG4gICAgaWYgKCF0cmF2ZWxIaXN0b3J5LmZsaWdodHMpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJUcmF2ZWwgaGlzdG9yeSBkYXRhIG1pc3Npbmcgb3IgaW52YWxpZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgaGFja2F0aG9uIGRhdGFcclxuICAgIGlmICghaGFja2F0aG9uLmhhY2thdGhvbnMpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJIYWNrYXRob25zIGRhdGEgbWlzc2luZyBvciBpbnZhbGlkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgZ2xvYmUgYW5kIGRhdGEgcG9pbnRzXHJcbiAgICBjb25zdCBnbG9iZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IFwiIzMzM1wiIH0pO1xyXG5cclxuICAgIC8vIEdsb3cgZWZmZWN0XHJcbiAgICBjb25zdCBnbG93TWVzaCA9IGNyZWF0ZUdsb3dNZXNoKGdsb2JlTWF0ZXJpYWwsIHtcclxuICAgICAgICBiYWNrc2lkZTogZmFsc2UsXHJcbiAgICAgICAgY29sb3I6IFwiIzIyODhmZlwiLFxyXG4gICAgICAgIHNpemU6IDIsXHJcbiAgICAgICAgcG93ZXI6IDMsXHJcbiAgICB9KTtcclxuICAgIHNjZW5lLmFkZChnbG93TWVzaCk7XHJcblxyXG4gICAgLy8gQWRkIGNvdW50cnkgcG9seWdvbnNcclxuICAgIGNvbnN0IGdsb2JlID0gbmV3IFRocmVlR2xvYmUoe1xyXG4gICAgICAgIGhleFBvbHlnb25Db2xvcjogKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYWxsb3dlZENvdW50cmllcyA9IFtcIlVTQVwiLCBcIkdCUlwiLCBcIklORFwiLCBcIkFVU1wiXTtcclxuICAgICAgICAgICAgcmV0dXJuIGFsbG93ZWRDb3VudHJpZXMuaW5jbHVkZXMoZS5wcm9wZXJ0aWVzLklTT19BMylcclxuICAgICAgICAgICAgICAgID8gXCJyZ2JhKDI1NSwyNTUsMjU1LCAxKVwiXHJcbiAgICAgICAgICAgICAgICA6IFwicmdiYSgyNTUsMjU1LDI1NSwgMC43KVwiO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAgIC5oZXhQb2x5Z29uc0RhdGEoY291bnRyaWVzLmZlYXR1cmVzKVxyXG4gICAgICAgIC5wb2ludHNEYXRhKGhhY2thdGhvbi5oYWNrYXRob25zKSAvLyBGaXhlZCB0eXBvXHJcbiAgICAgICAgLmFyY3NEYXRhKHRyYXZlbEhpc3RvcnkuZmxpZ2h0cyk7XHJcblxyXG4gICAgc2NlbmUuYWRkKGdsb2JlKTtcclxufVxyXG5cclxuLy8gSGFuZGxlIG1vdXNlIG1vdmVtZW50XHJcbmZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XHJcbiAgICBtb3VzZVggPSAoZXZlbnQuY2xpZW50WCAtIHdpbmRvd0hhbGZYKSAvIHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgbW91c2VZID0gKGV2ZW50LmNsaWVudFkgLSB3aW5kb3dIYWxmWSkgLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbn1cclxuXHJcbi8vIEhhbmRsZSB3aW5kb3cgcmVzaXppbmdcclxuZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XHJcbiAgICB3aW5kb3dIYWxmWCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcclxuICAgIHdpbmRvd0hhbGZZID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcclxuICAgIGNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG59XHJcblxyXG4vLyBBbmltYXRpb24gbG9vcFxyXG5mdW5jdGlvbiBhbmltYXRlKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggKz1cclxuICAgICAgICAgICAgTWF0aC5hYnMobW91c2VYKSA8PSB3aW5kb3dIYWxmWCAvIDJcclxuICAgICAgICAgICAgICAgID8gKG1vdXNlWCAvIDIgLSBjYW1lcmEucG9zaXRpb24ueCkgKiAwLjAwNVxyXG4gICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ICs9ICgtbW91c2VZIC8gMiAtIGNhbWVyYS5wb3NpdGlvbi55KSAqIDAuMDA1O1xyXG4gICAgICAgIGNhbWVyYS5sb29rQXQoc2NlbmUucG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICB9LCAxMDAwIC8gNjApOyAvLyA2MCBGUFMgY2FwXHJcbn1cclxuXHJcbi8vIEluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXHJcbmluaXRHbG9iZSgpO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkMGYxYzM4ODM2ZWM4OGE0MmQxOVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==