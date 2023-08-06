!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
      oldLoadAp && oldLoadAp();
  
      new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        autoplay: false,
        loop: 'all',
        order: 'random',
        theme: '#b7daff',
        preload: 'none',
        audio: [
          {
            name: 'Happy birthday to Nan',
            artist: 'Nanxiaocheng',
            url: '/songs/happy-birthday.mp3',
            cover: '/img/cake.jpg'
          }
        ]
      });
    }
  })();