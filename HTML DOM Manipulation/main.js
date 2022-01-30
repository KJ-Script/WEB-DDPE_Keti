function swapMedia() {

    var image = document.getElementById('image');
    var video = document.getElementById('vidid');
    var base = document.getElementById('table');

    base.insertBefore(image, video);
    var button = document.getElementById('swap');
    base.insertBefore(video, button);

    /*let imgSrc = image.src;
    let vidSrc = video.src;

    image.src = vidSrc;
    video.src = imgSrc;
    */
}

function removeAudio() {

    var audio = document.getElementById("audio");
    var audiosrc = document.getElementById("audiosource");
    audio.remove();
    audiosrc.remove();
    console.log("clicked");
}

function createBox() {

    var input =  document.createElement("input");
    input.setAttribute("type", "text");
    var inputDiv = document.getElementById("inputspace");
    var textBox = inputDiv.appendChild(input);
    console.log("clicking");
}