const opts = {
  angle: 0.25, // The span of the gauge arc
  lineWidth: 0.15, // Thinner gauge
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.6, // Relative to gauge radius
    strokeWidth: 0.05, // Thicker pointer for better visibility
    color: "#ffffff", // White pointer color
  },
  staticZones: [
    { strokeStyle: "#00ff00", min: 0, max: 50 }, // Green zone
    { strokeStyle: "#ffff00", min: 50, max: 150 }, // Yellow zone
    { strokeStyle: "#ff0000", min: 150, max: 200 }, // Red zone
  ],
  staticLabels: {
    font: "14px Roboto", // Stylish font for labels
    labels: [0, 50, 100, 150, 200],
    color: "#ffffff", // Label color
    fractionDigits: 0,
  },
  limitMax: false,
  limitMin: false,
  colorStart: "#6FADCF", // Start gradient color
  colorStop: "#8FC0DA", // End gradient color
  strokeColor: "#E0E0E0", // Background gradient
  generateGradient: true,
  highDpiSupport: true,
};

const target = document.getElementById("speedometer"); // Gauge canvas element
const gauge = new Gauge(target).setOptions(opts); // Create gauge

gauge.maxValue = 200; // Set max gauge value
gauge.setMinValue(0); // Set min value
gauge.animationSpeed = 32; // Set animation speed (32ms per frame)
gauge.set(0); // Initialize to 0

const throttle = document.getElementById("throttle");
const speedDisplay = document.getElementById("speed-display");

// Event listener for throttle control
throttle.addEventListener("input", (event) => {
  const throttleValue = parseInt(event.target.value, 10); // Get throttle value
  const speed = Math.round((throttleValue / 100) * 200); // Map throttle to speed
  gauge.set(speed); // Update gauge
  speedDisplay.textContent = speed; // Update speed display
});
