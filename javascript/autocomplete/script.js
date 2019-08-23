

(function() {
  // set event listener on input
  // on change, update query variable
  // trigger API call to musixmatch API
  
  ////////////////////////
  // DOM SELECTORS
  ////////////////////////
  let input = document.querySelector('#input');
  let autocompleteParentDiv = document.querySelector(".autocomplete");
  
  
  ////////////////////////
  // EVENT LISTENERS
  ////////////////////////
  input.addEventListener("keydown", e => { debounce(e, handleForm, 1000) });
  autocompleteParentDiv.addEventListener('click', handleAutoClick);
  
  
  
  ////////////////////////
  // METHODS
  ////////////////////////
  
  function handleForm(e) {
    let query = e.target.value;
  
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.search?apikey=1985a5d0246d84f9fef6bb782470323f&q_artist=${query}&limit=5)`
      )
      .then(res => {
        let artistNames = res.data.message.body.artist_list.map(item => item.artist.artist_name);
        renderAutocompleteResults(artistNames);
      });
  }
  
  let interval;
  
  function debounce(event, func, delay) {
  
    return (function() {
      clearInterval(interval);
      interval = setTimeout(() => {
        func(event);
      }, delay);
    })();
  }
  
  
  function renderAutocompleteResults(res) {
    autocompleteParentDiv.textContent = "";
  
    for (let i = 0; i < res.length; i++) {
      let newResult = document.createElement('div');
      newResult.textContent = res[i];
      autocompleteParentDiv.appendChild(newResult);
    }
  }
  
  function handleAutoClick(e) {
    input.value = e.target.textContent;
  }
})();



