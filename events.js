document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const eventSection = document.querySelector('.event-section');
    const noResultsMessage = document.createElement('p');
  
    // Create and style the "No events found" message
    noResultsMessage.textContent = 'No events found.';
    noResultsMessage.style.color = 'black';
    noResultsMessage.style.fontSize = '20px';
    noResultsMessage.style.fontWeight = '600'; // Semi-bold
    noResultsMessage.style.display = 'none'; // Initially hidden
    noResultsMessage.style.textAlign = 'center'; // Center the message
    noResultsMessage.style.marginTop = '20px'; // Add some spacing
    eventSection.appendChild(noResultsMessage);
  
    searchInput.addEventListener('input', function () {
      const searchQuery = this.value.toLowerCase();
      const eventHolders = document.querySelectorAll('.event-holder');
      let hasVisibleEvents = false;
  
      eventHolders.forEach(event => {
        const eventDate = event.getAttribute('data-date').toLowerCase();
        const eventName = event.getAttribute('data-name').toLowerCase();
        const eventTime = event.getAttribute('data-time').toLowerCase();
  
        if (
          eventDate.includes(searchQuery) ||
          eventName.includes(searchQuery) ||
          eventTime.includes(searchQuery)
        ) {
          event.style.display = 'flex'; 
          event.parentNode.prepend(event); top
          hasVisibleEvents = true; 
        } else {
          event.style.display = 'none';
        }
      });
  
    
      if (hasVisibleEvents) {
        noResultsMessage.style.display = 'none';
      } else {
        noResultsMessage.style.display = 'block';
      }
    });
  });


  