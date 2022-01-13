let isPlay = false
let isMuted = false
let videoFrame = document.getElementsByTagName('video')[0]
let playButton = document.querySelector('.playPause')
let fullButton = document.querySelector('.full')
let muteButton = document.querySelector('.mute')
let url = new URLSearchParams(window.location.search)
document.querySelector('.title').textContent = url.get('name').split('.')[0]

function playVideo() {
    isPlay = true
    playButton.innerHTML = '<ion-icon name="play-outline"></ion-icon>'
    videoFrame.play()
    playButton.classList.add('active')
}


function stopVideo() {
    isPlay = false
    playButton.innerHTML = '<ion-icon name="pause-outline"></ion-icon>'
    videoFrame.pause();
    playButton.classList.add('active')
}

function fullScreen() {
    if (videoFrame.requestFullscreen) {
        videoFrame.requestFullscreen()
    }
}

function muteVideo() {
    if (!isMuted) {
        isMuted = true
        muteButton.classList.add('active')
    } else {
        isMuted = false
        muteButton.classList.remove('active')
    }
    videoFrame.muted = isMuted

}

playButton.addEventListener('click', () => {
    if (!isPlay) {
        playVideo()
    } else {
        stopVideo()
    }

})

fullButton.addEventListener('click', () => {
    fullScreen()
})

muteButton.addEventListener('click', () => {
    muteVideo();
})