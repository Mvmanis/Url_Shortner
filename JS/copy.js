const copyBtn = document.getElementById('copy');
const newUrl = document.getElementById('shortUrl');

copyBtn.addEventListener('click', function () {
    newUrl.select();
    window.navigator.clipboard.writeText(newUrl.value)
});
