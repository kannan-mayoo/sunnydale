// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const categories: Record<string, string[]> = {
//   Women: ["women_dress_1", "Dresses", "Kurta Sets", "Kurta & Kurtis", "Pants"],
//   Men: ["Shirts", "T-Shirts", "Jeans", "Trousers", "Jackets"],
//   Kids: ["Girls", "Boys", "Baby Wear"],
//   "Shoes & Bags": ["Heels", "Sneakers", "Handbags"],
//   Glam: ["Beauty", "Skincare", "Fragrances"],
//   Home: ["Bedding", "Décor", "Kitchen"],
// };

// export default function Categories() {
//   const [active, setActive] = useState("Women");

//   // helper to create safe filenames from tab name
//   const safeName = (name: string) => name.replace(/\s+/g, "-").toLowerCase();

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-12">
//       <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-2">
//         Top Categories
//       </h2>

//       <div className="mt-6 flex gap-8">
//         {/* Left Tabs */}
//         <div className="flex flex-col gap-2 min-w-[150px]">
//           {Object.keys(categories).map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActive(cat)}
//               className={`text-left px-3 py-2 text-sm font-medium rounded ${
//                 active === cat
//                   ? "bg-gray-100 text-orange-600 border-l-4 border-orange-500"
//                   : "hover:bg-gray-50 text-gray-700"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Right Products */}
//         <motion.div
//           key={active}
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className="grid grid-cols-5 gap-6 flex-1"
//         >
//           {(categories[active] ?? []).map((sub, i) => {
//             const imgName = `/category-${safeName(active)}-${i + 1}.jpg`;
//             return (
//               <div key={`${safeName(active)}-${i}-${sub}`} className="text-center">
//                 <Image
//                   width={150}
//                   height={200}
//                   src={imgName}
//                   alt={sub}
//                   className="w-full h-52 object-cover rounded-md shadow-sm hover:scale-105 transition-transform"
//                 />
//                 <p className="mt-2 text-sm font-medium text-gray-900">{sub}</p>
//               </div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }







"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const categories: Record<string, string[]> = {
  Women: ["Tops & Tees", "Kurta & Kurtis", "Kurta Sets", "Dresses", "Pants"],
  Men: ["Shirts", "T-Shirts", "Jeans", "Trousers", "Jackets"],
  Kids: ["Girls", "Boys", "Baby Wear"],
  "Shoes & Bags": ["Heels", "Sneakers", "Handbags"],
  Glam: ["Beauty", "Skincare", "Fragrances"],
  // Home: ["Bedding", "Décor", "Kitchen"],
};

export default function Categories() {
  const [active, setActive] = useState("Women");

  const safeName = (name: string) => name.replace(/\s+/g, "-").toLowerCase();

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-2">
        Top Categories
      </h2>

      <div className="mt-6 flex gap-8">
        {/* Left Tabs */}
        <div className="flex flex-col gap-2 min-w-[150px]">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-left px-3 py-2 text-sm font-medium rounded transition-all ${
                active === cat
                  ? "bg-gray-100 text-orange-600 border-l-4 border-orange-500"
                  : "hover:bg-gray-50 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Right Category Cards */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 flex-1"
        >
          {(categories[active] ?? []).map((sub, i) => {
            const imgName = `/category-${safeName(active)}-${i + 1}.png`;
            return (
              <div
                key={`${safeName(active)}-${i}-${sub}`}
                className="text-center group"
              >
                <div className="relative w-full h-52 overflow-hidden rounded-md shadow-sm">
                  <Image
                    src={imgName}
                    alt={sub}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={i < 2} // preload first 2 images
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-900">{sub}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}