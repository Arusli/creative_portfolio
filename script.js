function getOffWhiteColor() {
  const r = Math.floor(Math.random() * 36) + 245; // 245–255
  const g = Math.floor(Math.random() * 36) + 245;
  const b = Math.floor(Math.random() * 36) + 245;
  return `rgb(${r}, ${g}, ${b})`;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getOffWhiteColor();
}

// Smooth fade between background colors
document.body.style.transition = "background-color 10s ease";

// Change every 3 seconds
setInterval(changeBackgroundColor, 10000);
