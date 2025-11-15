import PromoBanner from "./PromoBanner";

export default function AmericanEagleBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-12">
      <h2
        className="text-xl font-bold text-gray-900"
      >
        Essentials
      </h2>

      <div className="h-1 bg-yellow-400 w-10 mt-1 mb-5" />
    <PromoBanner
      imgSrc="/us_polo_banner.png"
      alt="US Polo Offer"
      
    />
    </section>
  );
}
