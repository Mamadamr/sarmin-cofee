import Image from "next/image";

type CoffeeCardProps = {
  title: string;
  price: number;
  description: string;
  image: string;
  badge?: string;
};

export default function CoffeeCard({
  title,
  price,
  description,
  image,
  badge,
}: CoffeeCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_8px_20px_rgba(92,58,33,0.5)]">
      <div className="relative w-full h-48">
        {badge && (
          <span className="absolute top-3 right-3 z-10 bg-orange-500 text-black text-xs px-3 py-1 rounded-full">
            پیشنهاد ما
          </span>
        )}
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-4 text-right">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="font-semibold text-brown-700">
            {price.toLocaleString()} تومان
          </span>

          <button className="bg-[#d0865d] cursor-pointer text-black px-4 py-2 rounded-xl hover:bg-brown-800 transition">
            ثبت سفارش
          </button>
        </div>
      </div>
    </div>
  );
}
