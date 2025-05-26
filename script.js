document.addEventListener('DOMContentLoaded', () => {
  const icon = document.getElementById('searchIcon');
  const input = document.getElementById('searchInput');

  icon.addEventListener('click', () => {
    const value = input.value.trim();
    if (value) {
      console.log(`Searching for: ${value}`);
      // You could redirect or trigger a real search here
    } else {
      input.focus(); // Focus the input if empty
    }
  });
});