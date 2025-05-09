$(document).ready(function() {
    // Existing DataTables initialization
    if ($('#prophecy-table').length) {
        $('#prophecy-table').DataTable({
            paging: true,
            searching: true,
            ordering: true
        });
    }
    if ($('#evidence-table').length) {
        $('#evidence-table').DataTable({
            paging: true,
            searching: true,
            ordering: true
        });
    }

    // Lightbox functionality
    $('.lightbox-trigger').on('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior
        var imgSrc = $(this).attr('href'); // Get the full-size image URL
        $('#lightbox-img').attr('src', imgSrc); // Set the modal image source
        $('#lightbox').fadeIn(); // Show the modal
    });

    // Close the lightbox when the close button is clicked
    $('.close').on('click', function() {
        $('#lightbox').fadeOut(); // Hide the modal
    });

    // Close the lightbox when clicking outside the image
    $('#lightbox').on('click', function(e) {
        if (e.target === this) { // Only close if clicking the background
            $('#lightbox').fadeOut();
        }
    });
});
