document.addEventListener("DOMContentLoaded", function () {
    const filterPills = document.querySelectorAll('.filter-pill');
    const projectItems = document.querySelectorAll('.project-item');

    filterPills.forEach(pill => {
        pill.addEventListener('click', function () {
            // Remove the 'active' class from all pills
            filterPills.forEach(pill => pill.classList.remove('active'));
            // Add the 'active' class to the clicked pill
            this.classList.add('active');

            const selectedTopic = this.getAttribute('data-topic');

            // Show all projects if 'all' is selected, else filter based on topic
            projectItems.forEach(item => {
                if (selectedTopic === 'all' || item.getAttribute('data-topic').includes(selectedTopic)) {
                    item.style.display = 'block'; // Show project
                } else {
                    item.style.display = 'none'; // Hide project
                }
            });
        });
    });
});
