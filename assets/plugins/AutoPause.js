class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.hadleVisibilityChange = this.hadleVisibilityChange.bind(this);
  }
  run(player) {
    this.player = player;

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

    observer.observe(this.player.media);
    document.addEventListener('visibilitychange', this.hadleVisibilityChange);
  }

  handleIntersection(entries) {
    const entry = entries[0];

    if (entry.intersectionRatio >= this.threshold) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  hadleVisibilityChange() {
    const isVisible = document.visibilityState === 'visible';

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
