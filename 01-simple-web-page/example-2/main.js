Array.from(document.getElementsByClassName('list-item')).forEach((e, index) => {
    e.addEventListener('click', () => alert(`Clicked item number ${index + 1}`));
});
