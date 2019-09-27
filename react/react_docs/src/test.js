class Clock {
  constructor() {
    this.state = {
      time: new Date()
    }
    this.tick();
  }

  tick() {
    this.render();
  }

  render() {
    // create DOM elements, grab DOM elements and append/replace as necessary
    let time = document.querySelector("#time");  // dfs
    time.textContent(this.state.time);
  }
}

// <p id="time"></p>



new Clock();