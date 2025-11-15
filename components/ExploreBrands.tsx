// import Image from "next/image";

// const brands = [
//   {
//     img: "/brands/brand1.jpg",
//     label: "Up To 50% Off",
//     logo: "/brands/logo1.png",
//   },
//   {
//     img: "/brands/brand2.jpg",
//     label: "From ₹1299",
//     logo: "/brands/logo2.png",
//   },
//   {
//     img: "/brands/brand3.jpg",
//     label: "Up To 40% Off",
//     logo: "/brands/logo3.png",
//   },
//   {
//     img: "/brands/brand4.jpg",
//     label: "From ₹1299",
//     logo: "/brands/logo4.png",
//   },
 
// ];

// export default function ExploreBrands() {
//   return (
//     <div className="flex flex-col items-center w-full px-6 mt-10">
      
//       {/* Title */}
//       <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
//         Explore More Brands
//       </h2>

//       {/* Orange underline */}
//       <div className="h-[3px] w-10 bg-orange-500 mt-1 mb-6 rounded-full" />

//       {/* Brand Cards */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//         {brands.map((brand, index) => (
//           <div key={index} className="flex flex-col items-center">

//             {/* Image Card */}
//             <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden shadow-sm hover:scale-[1.02] transition-all">
//               <Image
//                 src={brand.img}
//                 alt="brand"
//                 fill
//                 className="object-cover"
//               />

//               {/* Logo overlay */}
//               <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
//                 <Image
//                   src={brand.logo}
//                   alt="brand logo"
//                   width={80}
//                   height={30}
//                   className="object-contain"
//                 />
//               </div>
//             </div>

//             {/* Offer Label */}
//             <p className="text-sm font-medium text-black mt-2">
//               {brand.label}
//             </p>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }














"use client";

// import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const looksItems = [
  {
    title: "Adidas",
    subtitle: "Up To 50% Off",
    img: "/explorebrands-11.png",
  },
  {
    title: "Park Avenue",
    subtitle: "From ₹1299",
    img: "/explorebrands-2.png",
  },
  {
    title: "Louis Philippe",
    subtitle: "Up To 40% Off",
    img: "/explorebrands-3.png",
  },
  {
    title: "Van Heusen",
    subtitle: "From ₹1299",
    img: "/explorebrands-4.png",
  },
];

export default function GoodLooksSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-12">
      <h2
        className="text-xl font-bold text-gray-900"
      >
        Explore More Brands
      </h2>

      <div className="h-1 bg-yellow-400 w-10 mt-1 mb-5" />

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="group"
      >
        {looksItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              
              className="relative rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={600}
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <p className="text-white text-2xl font-medium capitalize leading-tight">
                  {item.title}
                </p>
                {/* <p className="text-white text-sm opacity-90">{item.subtitle}</p> */}
              </div>
            </div>
            <p className="flex flex-col items-center text-sm font-medium text-black mt-2">
              {item.subtitle}
          </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
