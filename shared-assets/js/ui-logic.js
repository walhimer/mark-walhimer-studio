(function() {
  const stage = document.getElementById('art-stage');
  const expandBtn = document.getElementById('expand-btn');
  if (expandBtn && stage) {
    expandBtn.onclick = () => {
      stage.classList.toggle('is-fullscreen');
      document.body.style.overflow = stage.classList.contains('is-fullscreen') ? 'hidden' : '';
      setTimeout(() => window.dispatchEvent(new Event('resize')), 30);
    };
  }
  const soundBtn = document.getElementById('sound-btn');
  if (soundBtn) {
    let soundOn = false;
    soundBtn.onclick = () => {
      soundOn = !soundOn;
      soundBtn.classList.toggle('on', soundOn);
      const off = document.getElementById('sound-icon-off');
      const on = document.getElementById('sound-icon-on');
      if(off) off.style.display = soundOn ? 'none' : '';
      if(on) on.style.display = soundOn ? '' : 'none';
    };
  }
})();
