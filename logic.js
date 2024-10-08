let btn = document.getElementById('shorten');

btn.addEventListener('click', short)

async function short() {

    var longURL = document.getElementById('longUrl').value

    if (longURL.indexOf('https://') === -1) {
        longURL = 'https://' + longURL
    }
    console.log(longURL)

    const accessToken = 'd08ef25b0a37f2b135983b6742588ec83ae77493';
    const longUrl = longURL;

    const result = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
            long_url: longUrl
        })
    });

    const data = await result.json(); // Extract JSON response

    var shortUrl = document.getElementById('shortUrl')
    shortUrl.value = data.link

}