// Auto text change
(function () {
    var words = ["Doc", "Ppt", "Excel", "Jpg", "Png"],
        colors = ["orange","orange","orange","orange","orange"],
        i = 0;
    setInterval(function () {
        var span = document.getElementById('words');
        span.style.opacity = 0; // Fade out the text
        setTimeout(function () {
            span.innerHTML = words[i]; // Change the text
            span.className = 'word ' + colors[i]; // Change the color class
            span.style.opacity = 1; // Fade in the new text
            i = (i + 1) % words.length;
        }, 500); // 500ms delay before changing text
    }, 2000); // Change every 2000ms (2 seconds)
})();

// Add this code inside your existing script tag or a separate script.js file
document.getElementById('selectPdfButton').addEventListener('click', function() {
    // Create an input element of type "file"
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf'; // Accept only PDF files

    // Trigger a click event on the file input element
    fileInput.click();

    // Listen for the change event when a file is selected
    fileInput.addEventListener('change', function(event) {
        var selectedFile = event.target.files[0]; // Get the selected file

        // Check if a file was selected and it's a PDF file
        if (selectedFile && selectedFile.type === 'application/pdf') {
            // Display the selected file's name, extension, and size
            var fileInfo = document.getElementById('fileInfo');
            fileInfo.innerHTML = `<img src="pdf icon.png" alt="PDF Icon">${selectedFile.name} (${formatSize(selectedFile.size)})`;
        } else {
            alert('Please select a valid PDF file.');
        }
    });
});

// Function to format file size (in bytes) into human-readable format
function formatSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}


// Automatic Count
const counters = document.querySelectorAll('.auto-count-container h3');
const div1UpdateInterval = 900; // Time interval in milliseconds for the first <div>
const div2UpdateInterval = 5000; // Time interval in milliseconds for the second <div>

counters.forEach((counter, index) => {
    let currentValue = +counter.textContent;
    let updateInterval;

    if (index === 0) {
        updateInterval = div1UpdateInterval;
    } else {
        updateInterval = div2UpdateInterval;
    }

    const updateCount = () => {
        counter.textContent = ++currentValue;
    };

    setInterval(updateCount, updateInterval);
});
