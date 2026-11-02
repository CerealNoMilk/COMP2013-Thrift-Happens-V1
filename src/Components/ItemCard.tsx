import type { ClothingProduct } from "../data/data";
export default function ItemCard({
  name,
  fit,
  category,
  color,
  description,
  size,
  price,
  quantity,
  image,
}: ClothingProduct) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt="" width="100px" />
      <p>{fit}</p>
      <p>{category}</p>
      <p>{color}</p>
      <p>{description}</p>
      <p>{size}</p>
      <p>{price}</p>
      <p>{quantity}</p>
    </div>
  );
}
