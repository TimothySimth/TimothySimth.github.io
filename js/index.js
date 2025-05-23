function enableCardDrag(cardId, buttonId) {
      const card = document.getElementById(cardId);
      const dragBtn = document.getElementById(buttonId);
      let isDragging = false;
      let offsetX = 0;
      let offsetY = 0;

      // Start dragging
      dragBtn.addEventListener('mousedown', (event) => {
        event.preventDefault();
        isDragging = true;
        const rect = card.getBoundingClientRect();
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top + 49; // Adjust for button height
      });

      // Stop dragging
      document.addEventListener('mouseup', () => {
        isDragging = false;
      });

      // Handle movement
      document.addEventListener('mousemove', (event) => {
        if (!isDragging) return;
        const x = event.clientX - offsetX;
        const y = event.clientY - offsetY;
        card.style.transform = `translate(${x}px, ${y}px)`;
      });
    }

    // Initialize drag functionality once DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
      enableCardDrag('mouseCard', 'dragBtn');
    });