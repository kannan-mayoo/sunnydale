export default function GstBanner() {
  return (
    <div className="w-full flex justify-center">
      <div className="
        w-[60%] 
        bg-linear-to-b from-[#c9493e] to-[#7d1e17]
        text-white 
        py-8 
        my-14
        rounded-sm
        flex 
        items-center 
        justify-center 
        space-x-6
      ">
        
        {/* LEFT TEXT */}
        <span className="text-xl font-semibold tracking-wide">
          GST PRICE DROP
        </span>

        {/* DIVIDER LINE */}
        <span className="h-6 w-px bg-white/50"></span>

        {/* RIGHT TEXT */}
        <span className="text-base opacity-90">
          Enjoy GST benefits on all products
        </span>

      </div>
    </div>
  );
}
