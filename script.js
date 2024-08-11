document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement('button');
    button.textContent = 'Click to know more!';
    document.querySelector('header').appendChild(button);

    button.addEventListener('click', function() {
        alert('This tribute page is dedicated to "Kavi Guru Rabindranath Tagore", a person who has inspired many. He was one of the greatest literary figures of India.');
    });
});
