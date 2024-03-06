const catsBtn = document.querySelector('.cats__button');
const catsImage = document.querySelector('.cats__image');

catsBtn.addEventListener('click', () => {
    const isLoaded = catsImage.complete;
    if (isLoaded) {
        getRandomCats();
    }
});

function getRandomCats() {
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "DEMO-API-KEY"
      });
      
      const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
      };

      fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
        .then(response => response.json())
        .then(result => {
            catsImage.src = result[0].url;
        })
        .catch(error => console.log('error', error));   
}