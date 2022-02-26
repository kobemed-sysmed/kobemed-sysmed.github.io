'use strict';

{
  // Intersection Observer API

  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const observer = new IntersectionObserver(callback, {
    threshold: 0.2,
  });

  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });

  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const lis = document.querySelectorAll('.overlay li');
  
  lis.forEach ( li => {
    li.addEventListener('click', ()=> {
      overlay.classList.remove('show');
      open.classList.remove('hide');
    });

    open.addEventListener('click', () => {
      overlay.classList.add('show');
      open.classList.add('hide');
    });
  
    close.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
    });
  
    const closes = document.getElementById('closes');
    const headerNav = document.getElementById('headerNav');
    closes.addEventListener('click', () => {
    headerNav.classList.add('hides');
    });
    
    window.onload = function(){
      window.scrollTo(0,0);
    };
  
    });

    window.addEventListener('DOMContentLoaded', () => {
      // コンテナを指定
      const section = document.querySelector('.cherry-blossom-container');
    
      // 花びらを生成する関数
      const createPetal = () => {
        const petalEl = document.createElement('span');
        petalEl.className = 'petal';
        const minSize = 12;
        const maxSize = 18;
        const size = Math.random() * (maxSize + 1 - minSize) + minSize;
        petalEl.style.width = `${size}px`;
        petalEl.style.height = `${size}px`;
        petalEl.style.left = Math.random() * innerWidth + 'px';
        section.appendChild(petalEl);
    
        // 一定時間が経てば花びらを消す
        setTimeout(() => {
          petalEl.remove();
        }, 30000);
      }
    
      // 花びらを生成する間隔をミリ秒で指定
      setInterval(createPetal, 400);
    });
  
    $(function(){
      $('a[href^=#]').click(function() {
      var speed = 1000; // スクロール速度(ミリ秒)
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('html').animate({scrollTop:position}, speed, 'swing');
      return false;
      });
      });
  
      $(document).ready(function() {
        $('a').click(function(){ 
            var target= $(this).attr("href");
            var webkit = !document.uniqueID && !window.opera && !window.globalStorage && window.localStorage;
            var ua = navigator.userAgent;
            var scrollTag;
            if( ua.indexOf('OPR') !== -1 || ua.indexOf('Edge') !== -1 ) {
              scrollTag = 'body';
            } else {
              scrollTag = ( !window.chrome && 'WebkitAppearance' in document.documentElement.style )? 'body' : 'html';
            }
            $(scrollTag).animate({scrollTop: $(target).offset().top},400);
            return false;
        });
    });
  
}