var tag = document.createElement('script')
tag.src = "https://www.youtube.com/iframe_api";
        
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player,
videoID = 'M7lc1UVf-VE';
function onYouTubeIframeAPIReady() {
    player = new YT.Player('__in_video__player', {
        height: '360',
        width: '640',
        videoId: videoID,
        events: {
            'onReady': '',
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady() {
    __in_video__player.style.display = 'block';
    player.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}

var buttons = document.getElementsByClassName('in-video__controls-play');

for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var video = this.getAttribute('data-videoid');
        if(video) {
            player.loadVideoById(video);
            __in_video__player.style.display = 'block';
            document.querySelector('.in-video__cover').style.display = 'none';
            document.querySelector('.in-video__controls').style.display = 'none';
            player.playVideo();
            document.getElementsByClassName('in-video__bottom')[0].classList.add('is--active');
        }
    }, false);
}
