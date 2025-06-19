document.addEventListener('DOMContentLoaded', function() {
    // Get the canvas element and its 2D rendering context
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Function to set canvas dimensions and draw
    function drawCanvas() {
        // Set canvas width and height to match its CSS dimensions
        // This is crucial for preventing blurry drawings on high-DPI screens
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        // Clear the canvas before drawing
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Example: Draw a simple rectangle
        ctx.fillStyle = '#6366f1'; // Tailwind's indigo-500
        ctx.fillRect(50, 50, canvas.width - 100, canvas.height - 100);

        // Example: Draw some text
        ctx.fillStyle = '#ffffff'; // White text
        ctx.font = '24px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Canvas Content Here', canvas.width / 2, canvas.height / 2);
        ctx.font = '16px Inter, sans-serif';
        ctx.fillText('This area can be used for charts or graphics!', canvas.width / 2, canvas.height / 2 + 30);
    }

    // Initial draw
    drawCanvas();

    // Redraw canvas on window resize to keep it responsive
    window.addEventListener('resize', drawCanvas);

    // --- Tab Functionality ---
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;

            // Deactivate all buttons and hide all content
            tabButtons.forEach(btn => {
                // Reset to default white background and gray text
                btn.classList.remove('active', 'bg-blue-600', 'text-white');
                btn.classList.add('bg-white', 'text-gray-700');
                // Reset emoji color filter
                const icon = btn.querySelector('.tab-icon');
                if (icon) {
                    icon.style.filter = '';
                }
            });
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Activate the clicked button
            button.classList.add('active', 'bg-blue-600', 'text-white');
            button.classList.remove('bg-white', 'text-gray-700'); // Ensure these are removed

            // Make the active icon brightness consistent with the image
            const activeIcon = button.querySelector('.tab-icon');
            if (activeIcon) {
                activeIcon.style.filter = 'brightness(1)';
            }

            // Show the corresponding content
            document.getElementById(`${targetTab}-content`).classList.add('active');
        });
    });

    // Set initial active tab styling for the default 'billing' tab
    // This ensures 'billing' looks active on page load
    const initialActiveButton = document.querySelector('.tab-button[data-tab="billing"]');
    if (initialActiveButton) {
        initialActiveButton.classList.add('active', 'bg-blue-600', 'text-white');
        initialActiveButton.classList.remove('bg-white', 'text-gray-700');
        const initialActiveIcon = initialActiveButton.querySelector('.tab-icon');
        if (initialActiveIcon) {
            initialActiveIcon.style.filter = 'brightness(1)';
        }
    }
});

  window.addEventListener("load", () => {
    const loadingText = document.getElementById("loading-text");
    const fillBar = document.getElementById("fill-bar");
    let percentage = 0;

    const interval = setInterval(() => {
      if (percentage < 100) {
        percentage++;
        loadingText.textContent = `${percentage}%`;
      } else {
        clearInterval(interval);
      }
    }, 25); // 25ms * 100 = 2.5 seconds

    // Remove bootloader after animation completes
    setTimeout(() => {
      document.getElementById("bootloader").classList.add("hidden");
    }, 2700); // a bit more than 2.5s to allow fade out
  });

