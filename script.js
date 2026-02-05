// script.js (modified)

// ... other functions unchanged ...

// Function to display the kuromi-love.gif
function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');
    if (!imageContainer) return console.error('No #image-container element found');

    // Clear existing content
    imageContainer.innerHTML = '';

    // Create the image element
    var catHeartImage = new Image();
    catHeartImage.alt = 'Kuromi Love';

    // onload and onerror handlers for debug/fallback
    catHeartImage.onload = function() {
        console.log('kuromi-love.gif loaded successfully');
    };
    catHeartImage.onerror = function() {
        console.error('Failed to load kuromi-love.gif — check the path and that the file exists');
        // Provide fallback UI so user isn't stuck with buttons visible
        imageContainer.innerHTML = '<p>Could not load image.</p>';
    };

    // Append the image immediately so the UI updates even while loading
    imageContainer.appendChild(catHeartImage);

    // Hide the options immediately (don't wait for onload)
    var options = document.getElementById('options');
    if (options) options.style.display = 'none';

    // Set the src last to start loading
    catHeartImage.src = 'kuromi-love.gif'; // adjust path if the file is in a subfolder
}
