const getImages = () =>
  new Promise((resolve, _reject) => {
    httpDo(
      'https://api.unsplash.com/search/photos?page=1&query=horror',
      {
        method: 'GET',
        headers: {
          Authorization:
            'Client-ID 1XJrV_rh_Bz7KmvZJVJdLWdcgMwdrWhFQlG3R8T7MGo',
        },
        datatype: 'jsonp',
      },
      (res) => resolve(JSON.parse(res).results)
    );
  });

// Loads in 10 rondom images associated with the search term, assigns the image file into the 'coolImages' array
let coolImages = [];
let imagesToDisplay = [];
async function preload() {
  let results = await getImages(p5);
  for (let i = 0; i < results.length; i++) {
    coolImages[i] = loadImage(results[i].urls.regular);
  }
  console.log('coolImages loaded');
};

function setup() {
  createCanvas(500, 500);
};

// When mouse is dragged add new image to array and remove last one, iterate through 10
let prevImageIndex = 0;
function mouseMoved() {
  // Add image to 'imagesToDisplay'   
  imagesToDisplay.push(coolImages[prevImageIndex]);
  
  // Display image associated with prevImageIndex  
  image(imagesToDisplay[prevImageIndex], mouseX - 40, mouseY - 40, 80, 80);
  
  // If prevImageIndex is less than (coolImages.length - 1), +1 to prevImageIndex, else reset prevImageIndex 
  if(prevImageIndex < coolImages.length - 1) {
    prevImageIndex++; 
  } else {
    prevImageIndex = 0;
  }  
}

function draw() {
  if (!coolImages) {
    console.log('coolImages not loaded yet');
    return;
  }
}