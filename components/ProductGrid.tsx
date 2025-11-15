import ProductCard from "./ProductCard";


export default function ProductGrid() {
return (
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
{Array.from({ length: 8 }).map((_, i) => (
<ProductCard key={i} id={i} title={`Product ${i + 1}`} price={(999 + i * 50)} />
))}
</div>
)
}