// Make a GET request using fetch

  function myFunction() {
    let hex = document.getElementById("myColor").value;
console.log(hex);
    fetch('https://www.thecolorapi.com/id?hex='+hex.slice(1)+'&format=json')
  .then(response => {
    // Check if the response is ok
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Do something with the data
    console.log(data);
    updateImage(data);
    updateText(data);
  })
  .catch(error => {
    // Log any errors that occurred during the fetch operation
    console.error('Fetch error:', error);
  });

 
  } 

  function updateImage(data){
    let image = document.getElementById("imgColor");
    image.src = data.image.named;
  }

  function updateText(data){
    let contrast = document.getElementById("contrast");
    let hexText = document.getElementById("hex");
    let rgb = document.getElementById("rgb");
    hexText.innerHTML = "hex"+ data.hex.value;
    contrast.innerHTML = "contrast:" + data.contrast.value;
    rgb.innerHTML = data.rgb.value;
  }