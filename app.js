const accessKey = "aGc6N3CQsGDX89VNUAvroFTYjeO96-2aJPTWJ8Yz2T0";

const fromElement = document.querySelector('form');
const inputElement = document.getElementById('inputSearch');
const imgcontainerElement = document.querySelector('.img-container');
const showmorebtn = document.getElementById('showmore-btn');

let inputData = '';
let page = 1;

async function searchImages(){
    inputData = inputElement.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    
    if(page == 1){
      imgcontainerElement.innerHTML = '';
    }
    results.map((result) => {
      const imageWrapper = document.createElement('div');
      imageWrapper.classList.add('img-all-section');

      const image = document.createElement('img')
      image.src = result.urls.small
      image.alt = result.alt_description

      const imageLink = document.createElement('a')
      imageLink.href= result.links.html
      imageLink.target = '_blank'
      imageLink.textContent = result.alt_description

      imageWrapper.appendChild(image);
      imageWrapper.appendChild(imageLink)
      imgcontainerElement.appendChild(imageWrapper)
    });

    page++
    if(page > 1){
      showmorebtn.style.display = 'block';
    }
}

fromElement.addEventListener('submit',(event) => {
  event.preventDefault();
  page = 1;
  searchImages()
})
showmorebtn.addEventListener('click',() => {
  searchImages()
})
//newsletter---------------
const inputnews = document.getElementById('inputnews');
const getBtn = document.getElementById('btn-subscribe');
const emptyValue = document.getElementById('emty')
function newletter(){
  const inputElement = inputnews.value.trim();
  if(inputnews === '' ){
    emptyValue.textContent ='error'
  }
  else{
    emptyValue.textContent = 'Please enter the @Email!'
  }
}
getBtn.addEventListener('click',newletter)

//404 error function
  const imageNameInput = document.getElementById('inputSearch');
  const searchButton = document.getElementById('search-btn');
  const resultArea = document.getElementById('emptyText');

  searchButton.addEventListener('click', () => {
    const imageName = imageNameInput.value.trim(); // Remove leading/trailing spaces

    if (imageName === '') {
        resultArea.innerHTML = '<p>Image name cannot be empty?</p>';
        resultArea.style.fontSize = '35px';
        resultArea.style.color = 'orange';
    } else {
      resultArea.innerHTML = ''
    }
});