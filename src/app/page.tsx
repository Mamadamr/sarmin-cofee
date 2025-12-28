import CoffeeCard from "@/components/CoffeeCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f3ef] p-6">
      <h1 className="text-2xl font-bold text-center mb-8">
        منوی آنلاین کافی‌شاپ
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CoffeeCard
          title="اسپرسو"
          price={30000}
          description="شات قهوه اسپرسو غلیظ و خوش‌عطر"
          image="/coffee/espresso.jpg"
        />

        <CoffeeCard
          title="کاپوچینو"
          price={45000}
          description="اسپرسو با شیر بخار داده شده"
          image="/coffee/cappuccino.jpg"
          badge="پیشنهاد باریستا"
        />

        <CoffeeCard
          title="آمریکانو"
          price={35000}
          description="اسپرسو ترکیب شده با آب داغ"
          image="/coffee/americano.jpg"
        />
      </div>
    </main>
  );
}
