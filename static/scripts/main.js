function getTimeSinceTransistorsInvention() {
    // Date object for December 23, 1947, 0:00 UTC
    const december23_1947 = new Date('December 23, 1947 00:00:00 UTC');
  
    // Current date and time
    const currentDate = new Date();
  
    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - december23_1947;
  
    // Convert milliseconds to seconds, minutes, hours, and days
    const seconds = Math.floor(timeDifference / 1000) % 60;
    const minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    // Construct the human-readable string
    const timeString = `${days}d, ${hours}h, ${minutes}m, ${seconds}s`;
  
    return timeString;
  }
// ================

// main transistor timer
setInterval(() => {
    timerText = document.getElementById("main-transistor-time");
    timerText.innerText = getTimeSinceTransistorsInvention();    

}, 1000);