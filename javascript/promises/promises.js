

// given as set of API calls that need to be processed sequentially,
// i.e. the resolution of the previous promise will be passed as an argument
// to the next promise
// write the promises and return the final output

// apiOne => https://cat-fact.herokuapp.com/facts
// apiTwo => http://order-pizza-api.herokuapp.com/api/orders
// apiThree => https://api.giphy.com/v1/gifs/random?api_key=oSjaViyrwpsBcwnhqjL2YhLjikQFF8EJ
// apiFour => http://quotes.rest/qod.json



// promise chaining
function getData() {
  fetch("https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts",{
    "Content-Type": "application/json",
    "Accept": "application/json"
  })
    .then(res => {
      console.log(res);
      return fetch("https://cors-anywhere.herokuapp.com/http://order-pizza-api.herokuapp.com/api/orders");
    })
    .then(res2 => {
      console.log(res2)
      return fetch("https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/random?api_key=oSjaViyrwpsBcwnhqjL2YhLjikQFF8EJ")
      // return apiThree(res2);
    })
    .then(res3 => {
      console.log(res3);
      return res3;
    })
}



// Promise.all
// Promise.all accepts an array of promises as an argument 
// once all of the promises has been resolved (the resolution), then the entire Promise.all will return a promise object
// we can use the async/await syntax with Promise.all in order to return the resolution of Promise.all, which will be an array of resolutions in the order of the original promise array

function getAllData() {
  const promise1 = apiOne();
  const promise2 = apiTwo();
  const promise3 = apiThree();
  const promise4 = apiFour();
  const promise5 = apiFive();

  const allData = await Promise.all([promise1, promise2, promise3, promise4, promise5]);

  return allData;
}



// below is an implementation of Promise.all

// we can invoke getData2(), which will return a promise object
// if we chain on a .then() to the initial call to getData2(), we can manipulate the data as the resolution will be passed as an argument to the .then() method

// async await + promises
async function getData2() {
  const promise1 = fetch("https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts",{
    "Content-Type": "application/json",
    "Accept": "application/json"
  });
  const promise2 = fetch("https://cors-anywhere.herokuapp.com/http://order-pizza-api.herokuapp.com/api/orders");
  const promise3 = fetch("https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/random?api_key=oSjaViyrwpsBcwnhqjL2YhLjikQFF8EJ");

  
  const allData = await Promise.all([promise1, promise2, promise3]);

  return allData;
}

