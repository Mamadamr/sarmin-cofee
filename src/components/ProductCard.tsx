"use client";

import { useState } from "react";

type Product = {
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const [count, setCount] = useState<number>(1);

  return (
    <div className="bg-white text-black rounded-2xl shadow p-4 text-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-full  object-cover mx-w-[100%] rounded-xl mb-3"
      />

      <h2 className="font-bold text-lg">{product.title}</h2>

      <p className="text-gray-600 my-2">
        {product.price.toLocaleString()} تومان
      </p>

      {/* تعداد */}
      <div className="flex  hidden justify-center items-center gap-3 mb-3">
        <button
          onClick={() => setCount(count - 1)}
          disabled={count === 1}
          className="w-8 h-8 rounded bg-gray-200"
        >
          -
        </button>

        <span>{count}</span>

        <button
          onClick={() => setCount(count + 1)}
          className="w-8 h-8 rounded bg-gray-200"
        >
          +
        </button>
      </div>

      <button className="w-full hidden py-2 bg-green-500 text-black rounded-xl">
        ثبت سفارش
      </button>
    </div>
  );
}
