// 🌱 Simulated Sensor Data Generator
function generateSensorData() {
  const temp = (20 + Math.random() * 10).toFixed(1);       // 20–30°C
  const humidity = (40 + Math.random() * 30).toFixed(1);   // 40–70%
  const waterNeed = (5 + Math.random() * 10).toFixed(1);   // 5–15 liters

  document.getElementById('tempValue').textContent = temp;
  document.getElementById('humidityValue').textContent = humidity;
  document.getElementById('waterNeed').textContent = waterNeed;
}

// 🔄 Refresh sensor data every 5 seconds
setInterval(generateSensorData, 5000);
generateSensorData(); // Initial load

// 💧 Irrigation Animation
document.getElementById('irrigateBtn').addEventListener('click', () => {
  const crops = document.querySelectorAll('.crop');
  crops.forEach(crop => {
    crop.classList.add('irrigate');
    setTimeout(() => crop.classList.remove('irrigate'), 3000);
  });
});

// 🌍 Modal Toggle for Soil Data
function toggleModal() {
  const modal = document.querySelector('.modal');
  modal.classList.toggle('hidden');
  modal.classList.toggle('fade-in');
}

// 📊 Toggle Crop Analytics Panel
function toggleAnalytics() {
  const panel = document.getElementById('analyticsPanel');
  panel.classList.toggle('hidden');

  if (!panel.classList.contains('hidden')) {
    document.getElementById('cropStatus').textContent = `
      Crop A: Healthy 🌿 | Crop B: Needs Water 💧 | Crop C: Optimal 🌾
    `;
  }
}