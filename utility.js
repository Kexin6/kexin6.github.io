// Utility functions for Kexin Li's personal website

// Auto-generate last update date
document.addEventListener('DOMContentLoaded', function() {
    // Find all elements with class 'last-update-date'
    const lastUpdateElements = document.querySelectorAll('.last-update-date');

    if (lastUpdateElements.length > 0) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const currentDate = new Date().toLocaleDateString('en-US', options);

        lastUpdateElements.forEach(element => {
            element.textContent = `Last update on ${currentDate}.`;
        });
    }
});
