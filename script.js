// Mood to Color Palette Mapping
const moodPalettes = {
    happy: ["#FFDDC1", "#FFABAB", "#FFC3A0", "#FF677D", "#D4A5A5"],
    sad: ["#A8D0E6", "#374785", "#24305E", "#F8E9A1", "#F76C6C"],
    calm: ["#C7F0DB", "#8BBABB", "#6C7B95", "#464159", "#D4DCCD"],
    energetic: ["#FF9F1C", "#FFBF69", "#FFFFFF", "#CBF3F0", "#2EC4B6"],
    romantic: ["#FFB6C1", "#FF69B4", "#FF1493", "#DB7093", "#C71585"],
  };
  
  // Get DOM Elements
  const moodButtons = document.querySelectorAll(".mood-buttons button");
  const colorBoxes = document.querySelectorAll(".color-box");
  
  // Add Event Listeners to Mood Buttons
  moodButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const mood = button.getAttribute("data-mood");
      generatePalette(mood);
    });
  });
  
  // Function to Generate and Display Color Palette
  function generatePalette(mood) {
    const palette = moodPalettes[mood];
    colorBoxes.forEach((box, index) => {
      box.style.backgroundColor = palette[index];
    });
  }
  
  // Initialize with a default palette
  generatePalette("happy");
  // Get the WhatsApp Share Button
const shareWhatsAppButton = document.getElementById("share-whatsapp");

// Function to Generate WhatsApp Share Link
function generateWhatsAppLink(mood) {
  const message = `Hey! I'm feeling ${mood} today. Check out this color palette: ${window.location.href}?mood=${mood}`;
  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?text=${encodedMessage}`;
}

// Update Share Button Link
moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const mood = button.getAttribute("data-mood");
    generatePalette(mood);
    shareWhatsAppButton.href = generateWhatsAppLink(mood);
  });
});

// Initialize Share Button Link
shareWhatsAppButton.href = generateWhatsAppLink("happy");
// Function to Get Mood from URL
function getMoodFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("mood") || "happy"; // Default to "happy" if no mood is specified
  }
  
  // Initialize with Mood from URL
  const initialMood = getMoodFromURL();
  generatePalette(initialMood);
  
  // Update Mood Buttons to Reflect URL Mood
  moodButtons.forEach((button) => {
    const mood = button.getAttribute("data-mood");
    if (mood === initialMood) {
      button.classList.add("active");
    }
  });
  
  // Add Event Listeners to Mood Buttons
  moodButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const mood = button.getAttribute("data-mood");
      generatePalette(mood);
      shareWhatsAppButton.href = generateWhatsAppLink(mood);
  
      // Update URL without reloading the page
      window.history.pushState({}, "", `?mood=${mood}`);
    });
  });