// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors then display the heart image
        flashRainbowColors(function() {
            // don't hide the whole #question here (it might contain the image container)
            // just show the heart image — displayCatHeart will hide the options after the image loads
            console.log('Yes clicked — starting rainbow then showing heart image');
            displayCatHeart(); // Display the kuromi-love.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        var noBtn = document.getElementById('no-button');
        if (noBtn) noBtn.innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        if (yesButton) {
            var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
            var newSize = parseFloat(currentFontSize) * 2; // double the font size
            yesButton.style.fontSize = newSize + 'px';
        }
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the kuromi-crying.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    if (!imageContainer) return;
    var catImage = new Image();
    catImage.src = 'kuromi-crying.gif';
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
    catImage.onerror = function() {
        console.error('Failed to load kuromi-crying.gif');
    };
}

// Function to display the kuromi-love.gif
function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');
    if (!imageContainer) {
        console.error('No #image-container element found');
        return;
    }
    // Clear existing content in the image container
    imageContainer.innerHTML = '';
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'kuromi-love.gif'; // Check this filename and casing
    catHeartImage.alt = 'Kuromi Love';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        console.log('kuromi-love.gif loaded successfully');
        imageContainer.appendChild(catHeartImage);
        // Hide the options container (after the image is visible)
        var options = document.getElementById('options');
        if (options) options.style.display = 'none';
    };
    catHeartImage.onerror = function(e) {
        console.error('Failed to load kuromi-love.gif', e);
        // show a visible error fallback so user knows it failed
        imageContainer.innerHTML = '<p style="color:red">Could not load kuromi-love.gif — check the filename/path.</p>';
    };
}

// Display the kuromi-crying.gif initially
displayCat();
