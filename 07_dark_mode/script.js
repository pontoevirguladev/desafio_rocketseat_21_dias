const checkbox = document.getElementById("light-dark");
const text = document.getElementById("text");

checkbox.onchange = () => {
    document.body.classList.toggle('dark');

    if (checkbox.checked) {
        text.style.color = '#fff';
    } else {
        text.style.color = '#555';
    }
}