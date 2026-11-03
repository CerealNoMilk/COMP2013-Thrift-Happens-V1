import type { ClothingProduct } from "../data/data";
import AdjustQuantityCounter from "./AdjustQuantityCounter";

interface ItemCardProps extends ClothingProduct {
  handleAdjustQuantityCounter: (
    id: number,
    delta: number,
    quantity: number,
  ) => void;
}

export default function ItemCard({
  id,
  name,
  fit,
  category,
  color,
  description,
  size,
  price,
  quantity,
  image,
  itemQuantity,
  handleAdjustQuantityCounter,
}: ItemCardProps) {
  return (
    <div className="ItemCard">
      <h3>{name}</h3>
      <img src={image} alt="" width="100px" />
      <p>Fit: {fit}</p>
      <p>Category: {category}</p>
      <p>Color: {color}</p>
      <p>{description}</p>
      <p>Size: {size}</p>
      <p>Price: {price}$</p>
      <p>Quantity: {quantity}</p>
      <AdjustQuantityCounter
        userQuantity={itemQuantity}
        quantity={quantity}
        id={id}
        handleAdjustQuantityCounter={handleAdjustQuantityCounter}
      />
      <button>Add to Cart</button>
    </div>
  );
}
