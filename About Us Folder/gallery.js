// script.js

// Sample data for images (relative paths to local files)
const eventImages = {
    event1: [
        "../Gallery_Images/events1.jpg",
        "../Gallery_Images/events2.jpg",
        "../Gallery_Images/events3.jpg",
        "../Gallery_Images/events4.jpg",
        "../Gallery_Images/events5.jpg",
        "../Gallery_Images/events6.jpg",
        "../Gallery_Images/events7.jpg"
    ],
    event2: [
      "../Gallery_Images/events5.jpg",
        "../Gallery_Images/events6.jpg",
        "../Gallery_Images/events7.jpg"
    ],
    event3: [
      "../Gallery_Images/events1.jpg",
        "../Gallery_Images/events2.jpg",
        "../Gallery_Images/events3.jpg"
    ],
    event4: [
      "../Gallery_Images/events4.jpg",
      "../Gallery_Images/events5.jpg",
      "../Gallery_Images/events1.jpg",
      "../Gallery_Images/events2.jpg"
    ],
    event5: [
      "../Gallery_Images/events5.jpg",
      "../Gallery_Images/events6.jpg",
      "../Gallery_Images/events7.jpg"
    ]
  };
  
  // DOM Elements
  const dropdown = document.getElementById('event-dropdown');
  const imageContainer = document.getElementById('image-container');
  const eventTitle = document.getElementById('event-title'); // New reference to the h3 tag
  
  // Function to load images and update the event title
  function loadImages(eventKey) {
    // Clear previous images
    imageContainer.innerHTML = '';
  
    // Get images for the selected event
    const images = eventImages[eventKey];
  
    if (images && images.length > 0) {
      images.forEach(imgPath => {
        const imgElement = document.createElement('img');
        imgElement.src = imgPath;
        imgElement.alt = `Image from ${eventKey}`;
        imageContainer.appendChild(imgElement);
      });
    } else {
      imageContainer.innerHTML = '<p>No images available for this event.</p>';
    }
  
    // Update the h3 tag with the selected event name
    eventTitle.textContent = dropdown.options[dropdown.selectedIndex].text;
  }
  
  // Load images and set the default event title when the page loads
  loadImages(dropdown.value);
  
  // Event listener for dropdown change
  dropdown.addEventListener('change', () => {
    const selectedEvent = dropdown.value;
    loadImages(selectedEvent);
  });