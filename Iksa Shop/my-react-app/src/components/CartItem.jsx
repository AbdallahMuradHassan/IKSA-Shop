import { useCart } from "./cart/CartContext";

export default function CartItem({ item }) {
  const { updateQuantity } = useCart();

  return (
    <div className="rounded-3xl border border-neutral-300 xl:w-11/12">
      <div className="flex flex-col gap-6 border-b border-neutral-300 px-4 py-6 sm:flex-row sm:items-center">
        <img
          className="mx-auto w-36 rounded-2xl bg-gray-300 p-4 sm:mx-0 sm:w-32"
          src={item.img}
          alt={item.name}
        />

        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold xl:text-2xl">{item.name}</h1>
            <i
              className="bx bx-trash cursor-pointer text-2xl text-red-600"
              onClick={() =>
                removeItem({ productId: item.id })
              }
            ></i>
          </div>

          <div className="flex gap-3 text-sm">
            <span className="font-semibold">Size:</span>
            <span className="text-gray-600">{item.name}</span>
          </div>

          <div className="flex gap-3 text-sm">
            <span className="font-semibold">Color:</span>
            <span className="text-gray-600">{item.description}</span>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <h1 className="text-2xl font-semibold xl:text-3xl">${item.price}</h1>
            <div className="flex h-11 items-center gap-4 rounded-3xl bg-gray-50 px-4">
              <i
                className="bx bx-minus cursor-pointer text-xl"
                onClick={() =>
                  removeItem({ productId: item.id, qty: item.quantity + 1 })
                }
              > wedqweqwef</i>
              <span className="text-xl">{item.quantity}</span>
              <i
                className="bx bx-plus cursor-pointer text-xl"
                onClick={() =>
                  updateQuantity({ productId: item.id, qty: item.quantity + 1 })
                }
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
