interface AdjustQuantityCounterProps {
  quantity: number;
}

export default function AdjustQuantityCounter({
  quantity,
}: AdjustQuantityCounterProps) {
  return (
    <div>
      <button>{" - "}</button>
      <span>{quantity}</span>
      <button>{" + "}</button>
    </div>
  );
}
