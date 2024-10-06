document.addEventListener("DOMContentLoaded", function () {
    const filterPills = document.querySelectorAll('.filter-pill');
    const projectItems = document.querySelectorAll('.project-item');

    filterPills.forEach(pill => {
        // Ensure pills are focusable via keyboard
        pill.setAttribute('tabindex', '0');

        pill.addEventListener('click', function () {
            // Remove the 'active' class and update aria-pressed for all pills
            filterPills.forEach(pill => {
                pill.classList.remove('active');
                pill.setAttribute('aria-pressed', 'false'); // Set aria-pressed to false for all pills
            });

            // Add the 'active' class to the clicked pill and set aria-pressed to true
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true'); // Set aria-pressed to true for the active pill

            const selectedTopic = this.getAttribute('data-topic');

            // Show all projects if 'all' is selected, else filter based on topic
            projectItems.forEach(item => {
                if (selectedTopic === 'all' || item.getAttribute('data-topic').includes(selectedTopic)) {
                    item.style.display = 'block'; // Show project
                    item.removeAttribute('tabindex'); // Make visible projects focusable
                } else {
                    item.style.display = 'none'; // Hide project
                    item.setAttribute('tabindex', '-1'); // Remove hidden projects from tab order
                }
            });
        });

        // Add keyboard support for pressing 'Enter' or 'Spacebar' to trigger click
        pill.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {  // 'Enter' or 'Spacebar' key triggers click
                e.preventDefault();  // Prevent scrolling down for 'space'
                this.click();  // Trigger the click handler
            }
        });
    });

    // Initial tabindex for project items
    projectItems.forEach(item => {
        if (item.style.display === 'none') {
            item.setAttribute('tabindex', '-1');
        } else {
            item.removeAttribute('tabindex');
        }
    });
});

