document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme') || 'light';

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
  }

  if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
      toggleSwitch.checked = true;
  } else {
      document.body.classList.add('light-mode');
  }

  toggleSwitch.addEventListener('change', switchTheme);
});
