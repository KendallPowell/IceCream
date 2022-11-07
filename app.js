const toppings = [
  {
    name: "SPRINKLES",
    price: 2,
    quantity: 0
  }, {
    name: 'CHOCOLATE CHIPS',
    price: 3,
    quantity: 0
  }, {
    name: 'GUMMY WORMS',
    price: 2,
    quantity: 0
  }
]

const vessels = [
  {
    name: 'WAFFLE CONE',
    price: 3,
    quantity: 0
  }, {

    name: 'WAFFLE BOWL',
    price: 4,
    quantity: 0,
  }, {
    name: 'DIPPED CONE',
    price: 5,
    quantity: 0,
  }
]

const iceCream = [
  {
    name: 'VANILLA',
    price: 3,
    quantity: 0
  }, {
    name: 'CHOCOLATE',
    price: 4,
    quantity: 0,
  }, {
    name: 'STRAWBERRY',
    price: 4,
    quantity: 0,
  }, {
    name: 'COOKIE DOUGH',
    price: 3,
    quantity: 0,
  }, {
    name: 'MINT',
    price: 4,
    quantity: 0,
  }, {
    name: 'BIRTHDAY CAKE',
    price: 4,
    quantity: 0,
  }
]

let allItems = iceCream.concat(vessels.concat(toppings))

function addItem(items) {
  allItems.find(i => i.name == items).quantity++
  drawCart()
  drawTotal()
}

function removeItem(items) {
  allItems.find(i => i.name == items).quantity--
  drawCart()
  drawTotal()
}

function drawTotal() {
  let total = 0
  allItems.forEach(i => {
    total += i.price * i.quantity
  })
  document.getElementById('total').innerText = total.toFixed(2)
}

function drawCart() {
  let cartElm = document.getElementById('checkout')
  let template = ''
  allItems.filter(i => i.quantity > 0).forEach(i => {
    template += `
    <div class="col-12 d-flex justify-content-between">
      <p>${i.name}</p>
      <p>${i.quantity}</p>
      <p>${i.price}</p>
      <p>${i.quantity * i.price}
    </div>
  </div>
`
  })
  cartElm.innerHTML = template
}
console.log(allItems)
