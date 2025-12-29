"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: "coffee" | "cold" | "dessert";
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | Product["category"]
  >("all");

  const products: Product[] = [
    // ☕ کافی
    {
      id: 1,
      title: "اسپرسو",
      price: 30000,
      image: "/coffee/espressoo.jpg",
      category: "coffee",
    },
    {
      id: 2,
      title: "کاپوچینو",
      price: 45000,
      image: "/coffee/capochino.jpg",
      category: "coffee",
    },
    {
      id: 3,
      title: "لاته",
      price: 48000,
      image: "coffee/lattee.jpg",
      category: "coffee",
    },
    {
      id: 4,
      title: "موکا",
      price: 52000,
      image: "coffee/moka.jpg",
      category: "coffee",
    },

    // 🧊 نوشیدنی سرد
    {
      id: 5,
      title: "آیس لاته",
      price: 52000,
      image: "/coffee/ice-latte.jpg",
      category: "cold",
    },
    {
      id: 6,
      title: "آیس آمریکانو",
      price: 38000,
      image: "/coffee/ice-americano.jpg",
      category: "cold",
    },
    {
      id: 7,
      title: "موهیتو",
      price: 45000,
      image: "/coffee/mojito.jpg",
      category: "cold",
    },

    // 🍰 کیک و دسر
    {
      id: 8,
      title: "چیزکیک",
      price: 65000,
      image: "/coffee/cheesecake.jpg",
      category: "dessert",
    },
    {
      id: 9,
      title: "براونی",
      price: 55000,
      image: "/coffee/brownie.jpg",
      category: "dessert",
    },
    {
      id: 10,
      title: "تیرامیسو",
      price: 70000,
      image: "/coffee/tiramisu.jpg",
      category: "dessert",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen text-black bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        منوی آنلاین کافی‌شاپ
      </h1>

      {/* منو */}
      <div className="flex justify-center gap-3 mb-6">
        <MenuButton onClick={() => setActiveCategory("all")} label="همه" />
        <MenuButton onClick={() => setActiveCategory("coffee")} label="کافی" />
        <MenuButton
          onClick={() => setActiveCategory("cold")}
          label="نوشیدنی‌ها"
        />
        <MenuButton
          onClick={() => setActiveCategory("dessert")}
          label="کیک و دسر"
        />
        <MenuButton
          onClick={() => alert("صفحه درباره ما بعداً اضافه می‌شود")}
          label="درباره ما"
        />
      </div>

      {/* محصولات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function MenuButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-xl bg-white shadow hover:mx-2 hover:text-black  transition-all"
    >
      {label}
    </button>
  );
}
