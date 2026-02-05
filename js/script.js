document.addEventListener('DOMContentLoaded', () => {
    const videoModal = document.getElementById('videoModal');
    const closeButton = videoModal.querySelector('.close-button');
    const videoContainer = videoModal.querySelector('.video-container');

    // Function to open the modal
    function openModal(videoId) {
        videoModal.style.display = 'flex'; // Use flex to center the modal
        videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }

    // Function to close the modal
    function closeModal() {
        videoModal.style.display = 'none';
        videoContainer.innerHTML = ''; // Clear the iframe to stop the video
    }

    // Event listeners for opening the modal
    document.querySelectorAll('.open-modal-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const videoId = button.dataset.videoId;
            if (videoId) {
                openModal(videoId);
            }
        });
    });

    // Event listener for closing the modal with the close button
    closeButton.addEventListener('click', closeModal);

    // Event listener for closing the modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === videoModal) {
            closeModal();
        }
    });

    // Optional: Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && videoModal.style.display === 'flex') {
            closeModal();
        }
    });
});
