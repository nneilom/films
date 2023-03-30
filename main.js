let users = document.querySelector(".users");
let imgs = document.querySelector("#imgs")


let filmData = fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All");
filmData.then((response) => {
    return response.json();
})
.then((info) => {
    console.log(info.Search);
    users.innerHTML = "";
    info.Search.forEach((elem) => {
        // console.log(elem.avatar);
        users.innerHTML += `<div class="user-n">
        <img src="${elem.Poster}" alt="user" width="100">
        <h5>${elem.Title}</h5>
        <br>
        <p>${elem.Year}</p>
    </div>`
    });
})
.catch((error) => {
    console.log(error);
})


fetch('https://www.omdbapi.com/?apikey=b6003d8a&s=All')
  .then(response => response.json())
  .then(data => {
    const images = data.Search.map(item => item.Poster);
    createSlider(images);
  });

  function createSlider(images) {
    let index = 0;
    const imgElement = document.querySelector('.slider img');
    imgElement.src = images[index];
  
    setInterval(() => {
      index++;
      if (index >= images.length) {
        index = 0;
      }
      imgElement.src = images[index];
    }, 3000);
  }
  
