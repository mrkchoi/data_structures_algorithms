let obj = {
  shoes: [
    {
      brand: 'adidas', 
      size: 10
    }, 
    {
      brand: 'nike', 
      size: 4
    }
  ]
}

// get an array of all the shoe brands

function getBrand(obj) {
  let brands = [];
  obj.shoes.forEach(ob => {
    brands.push(ob.brand);
  })
  return brands;
}

console.log(getBrand(obj));