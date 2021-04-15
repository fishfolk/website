// Grab our background slices elements
const fg2 = document.getElementById("fg2");
const fg1 = document.getElementById("fg1");

// Preform a parallax effect on etch element, use multiplication as the offset.
window.addEventListener('scroll', function() {
    let y = window.scrollY;
    fg1.style.top = (y * 0.2) + 'px';
    fg2.style.top = (y * 0.1) + 'px';
})