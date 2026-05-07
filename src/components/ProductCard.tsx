import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  salePrice?: number;
  imageUrl: string;
  imageAlt?: string;
  colors?: string[];
  badges?: string[];
  className?: string;
  priority?: boolean;
}

export default function ProductCard({
  id,
  title,
  price,
  salePrice,
  imageUrl,
  imageAlt,
  colors = [],
  badges = [],
  className = "",
  priority = false
}: ProductCardProps) {
  return (
    <div className={`flex flex-col group cursor-pointer ${className}`}>
      {/* Image Container */}
      <div className="relative aspect-[3/4] mb-3 overflow-hidden bg-[#f4f4f4]">
        {/* Badges */}
        {badges.length > 0 && (
          <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
            {badges.map((badge, idx) => (
              <span key={idx} className="bg-white px-2 py-0.5 text-[10px] font-bold tracking-wider text-black uppercase">
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Quick Add Button */}
        <button className="absolute bottom-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50">
          <ShoppingBag className="h-4 w-4 text-[#004751]" />
          <span className="absolute -right-1 -bottom-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#004751] text-[10px] font-bold text-white">
            +
          </span>
        </button>

        <img
          src={imageUrl}
          alt={imageAlt || title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading={priority ? "eager" : "lazy"}
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1">
        {/* Color Swatches */}
        {colors.length > 0 && (
          <div className="flex items-center gap-1.5 mb-2 h-4">
            {colors.slice(0, 4).map((color, idx) => (
              <span
                key={idx}
                className="h-3 w-3 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
              />
            ))}
            {colors.length > 4 && (
              <span className="text-[11px] text-gray-500 ml-1">+{colors.length - 4}</span>
            )}
          </div>
        )}

        {/* Title */}
        <Link href={`/products/${id}`} className="text-[14px] text-gray-900 leading-snug mb-1 hover:underline">
          {title}
        </Link>

        {/* Price */}
        <div className="flex items-center gap-2 mt-auto">
          {salePrice ? (
            <>
              <span className="text-[14px] font-medium text-[#008a54]">${salePrice.toFixed(2)}</span>
              <span className="text-[13px] text-gray-400 line-through">${price.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-[14px] font-medium text-gray-900">${price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
