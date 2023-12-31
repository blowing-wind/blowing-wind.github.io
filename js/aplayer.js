!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
      oldLoadAp && oldLoadAp();
  
      new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        autoplay: true,
        loop: 'all',
        order: 'random',
        theme: '#b7daff',
        preload: 'none',
        audio: [
          {
            name: '2024',
            artist: 'Nanxiaocheng',
            url: '/songs/yueding.mp3',
            cover: '/img/boai_1_r.jpg'
          }
        ]
      });
    }
  })();