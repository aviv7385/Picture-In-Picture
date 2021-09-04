const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select a media stream, pass to video element and then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }
    catch (err) {
        console(err);
    }
}

button.addEventListener('click', async () => {
    // disable the button when we click on it
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // reset the button
    button.disabled = false;
});

// on load 
selectMediaStream();
