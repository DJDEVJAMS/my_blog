document.addEventListener('DOMContentLoaded', () => {
    // Waits for the DOM to fully load

    const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme') || 'light';
    // Gets the toggle switch element and retrieves the current theme from localStorage (default is 'light')

    function switchTheme(e) {
        if (e.target.checked) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
        // Switches the theme and updates localStorage based on the toggle switch state
    }

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    } else {
        document.body.classList.add('light-mode');
    }
    // Sets the initial theme based on the current theme from localStorage

    toggleSwitch.addEventListener('change', switchTheme);
    // Adds an event listener to the toggle switch to handle theme changes
});
