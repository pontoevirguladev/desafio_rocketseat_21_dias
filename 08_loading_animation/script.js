const buttonText = document.querySelector('.button-text');

const upload = () => {

    const progressBar = document.querySelector('.loading-bar');
    progressBar.setAttribute('id', 'play-animation');
}

document.querySelector('.button').addEventListener('click', () => {
    const interval = setInterval(() => {
        buttonText.innerHTML = 'File Uploaded!';
        buttonText.style.left = '38%';
        document.querySelector('.gg-software-upload').className = 'gg-check-o';

        clearInterval(interval);
    }, 5000)

    upload();
});