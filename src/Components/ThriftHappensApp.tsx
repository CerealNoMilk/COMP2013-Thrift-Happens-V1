import { useState } from "react";
import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer";
import NavBar from "./NavBar";

interface ThriftHappensAppProps {
  products: ClothingProduct[];
}

export interface ItemsContainerProps {
  products: ClothingProduct[];
  itemsQuantity: ItemsQuantity[];
  handleAdjustQuantityCounter: (
    id: number,
    delta: number,
    quantity: number,
  ) => void;
}

export interface ItemsQuantity {
  id: number;
  userQuantity: number;
}

export default function ThriftHappensApp({ products }: ThriftHappensAppProps) {
  const [itemsQuantity, setItemsQuantity] = useState<ItemsQuantity[]>(
    products.map((prod) => ({
      id: prod.id,
      userQuantity: 0,
    })),
  );

  function handleAdjustQuantityCounter(
    id: number,
    delta: number,
    quantity: number,
  ) {
    setItemsQuantity((prevData) =>
      prevData.map((prev) =>
        prev.id === id
          ? {
              ...prev,
              userQuantity: Math.max(
                prev.userQuantity + delta <= quantity
                  ? prev.userQuantity + delta
                  : prev.userQuantity,
                0,
              ),
            }
          : { ...prev },
      ),
    );
  }

  return (
    <div>
      <NavBar />
      <ItemsContainer
        products={products}
        itemsQuantity={itemsQuantity}
        handleAdjustQuantityCounter={handleAdjustQuantityCounter}
      />
    </div>
  );
}
