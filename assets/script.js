var isOn = false;

function theme() {

    document.documentElement.setAttribute('data-theme', ['retro', 'dracula'][+isOn]);
    isOn = !isOn;

}
document.addEventListener('keydown', function(event) {
    // Check if the key pressed is the one you want to trigger the focus
    if (event.key === '/') { // Change '/' to the key you want to use
        var searchInput = document.getElementById('search');
        searchInput.setSelectionRange(0, searchInput.value.length);
        searchInput.focus();
        event.preventDefault();
    }
});