// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// interface PromoBannerProps {
//   imgSrc: string;
//   alt: string;
// }

// export default function PromoBanner({ imgSrc, alt }: PromoBannerProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl mt-8"
//     >
//       <Image
//         src={imgSrc}
//         alt={alt}
//         width={800}
//         height={100}
//         className="w-full object-cover rounded-xl"
//         priority
//       />
//     </motion.div>
//   );
// }









"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PromoBannerProps {
  imgSrc: string;
  alt: string;
  height?: number; // new prop to control height
}

export default function PromoBanner({
  imgSrc,
  alt,
  height = 400, // default height 400px
}: PromoBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl mt-8 shadow-md"
      style={{ height }} // 👈 directly controls height
    >
      <Image
        src={imgSrc}
        alt={alt}
        fill // ✅ makes image fill its parent container
        className="object-cover rounded-xl"
        sizes="(max-width: 768px) 100vw, 1200px"
        priority
      />
    </motion.div>
  );
}
