import React from "react";

const phoneData = [
  { name: "Oppo A71",
    price: 2000000,
    discount: 10
  },
  { name: "Realme c55",
    price: 3000000,
    discount: 30
  },
  { name: "Oppo A57",
    price: 1500000,
    discount: 20
  }
]
function Product({ name, price, discount = 0 }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        <s>Rp {price}</s> ({discount}%)
      </p>
      <p>
        <b>Rp {parseInt(price - (price * discount / 100))}</b>
      </p>
      <hr />
    </div>
  )
}

export default Product;
export { phoneData };