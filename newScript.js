const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Define the URLs for each topic
        const urls = [
            'charity.html',
            'robotics-teams.html',
            'community.html',
            'calendar.html'
        ];

        // Redirect to the corresponding page when clicked
        window.location.href = urls[index];
    });
});