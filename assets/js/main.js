
/* javascript */
console.log('NJ is NOT the armpit of America #hottake');
console.log('All information can be found on this page: https://www.nj.com/entertainment/2023/06/the-most-famous-person-from-each-of-new-jerseys-21-counties.html')
//had difficulty attaching names/bios for the celebrities and needed to submit something. I apologize.
function display_random_image_North() 
{
     var theImages = [{
        src: "assets/img/North/Shaq.avif",
        width: "500",
        height: "300",
        
    }, {
        src: "assets/img/North/Jane Krakowski.avif",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/North/Nathan Lane.avif",
        Text:"nate",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/North/Janeane Garofalo.avif",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/North/Joe Piscopo.avif",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/North/Martha Stewart.jpg",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/North/Queen Latifah.jpg",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/North/Fetty Wap.jpg",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/North/Jonas Bros.jpg",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/North/Teresa Giudice.jpg",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/North/Lea Michele.jpg",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/North/Beetlejuice.jpg",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/North/Anne Hathaway.jpg",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/North/Buzz Aldrin.jpg",
        width: "500",
        height: "300"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}

function display_random_image_South() 
{
     var theImages = [{
        src: "assets/img/South/Benjamin Burnley.avif",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/South/Bruce Willis.avif",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/South/Carl Lewis.avif",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/South/Kelly Ripa.avif",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/South/Kirsten Dunst.avif",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/South/Mike Trout.avif",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/South/Stedman Graham.avif",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/South/Patti Smith.avif",
        width: "500",
        height: "300"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}

function display_random_image_Central() 
{
     var theImages = [{
        src: "assets/img/Central/Jon Bon Jovi.avif",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/Central/Jon Stewart.avif",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/Central/Bruce Springsteen.avif",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/Central/Judy Blume.avif",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/Central/Meryl Streep.avif",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/Central/Vera Farmiga.avif",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/Central/Danny Devito.webp",
        width: "500",
        height: "300"
    }, {
        src: "assets/img/Central/David Copperfield.jpg",
        width: "500",
        height: "300"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}