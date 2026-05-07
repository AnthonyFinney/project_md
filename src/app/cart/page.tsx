import Link from 'next/link';
import { ShoppingBag, ChevronLeft, ChevronRight, Heart, Eye } from 'lucide-react';

const RECOMMENDED_PRODUCTS = [
  {
    id: '1',
    name: "Men's Cotton T-Shirt",
    price: 60.00,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
    colors: ['#ffffff', '#000000', '#1f3c5a', '#b5c6d3'],
    extraColors: 8,
  },
  {
    id: '2',
    name: "Men's Cotton T-Shirt",
    price: 60.00,
    imageUrl: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
    colors: ['#ffffff', '#000000', '#1f3c5a', '#b5c6d3'],
    extraColors: 8,
  },
  {
    id: '3',
    name: "Men's Regular Fit Paris Stretch Piqué Polo",
    price: 125.00,
    imageUrl: "https://images.unsplash.com/photo-1586363104862-3a5e222eca1e?q=80&w=1000&auto=format&fit=crop",
    colors: ['#e1c6a6', '#ffffff', '#000000', '#1f3c5a'],
    extraColors: 10,
    saleText: "SELECT COLORS ON SALE"
  },
  {
    id: '4',
    name: "Men's Regular Fit Paris Stretch Piqué Polo",
    price: 140.00,
    imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop",
    colors: ['#ffffff', '#000000', '#e1c6a6', '#1f3c5a'],
    extraColors: 2,
    saleText: "SELECT COLORS ON SALE"
  },
  {
    id: '5',
    name: "Men's Classic Fit Original L.12.12 Polo",
    price: 110.00,
    imageUrl: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=1000&auto=format&fit=crop",
    colors: ['#c4b5fd', '#f4f4f5', '#000000', '#1f3c5a'],
    extraColors: 56,
    saleText: "SELECT COLORS ON SALE"
  }
];

export default function CartPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      {/* Empty Cart Banner */}
      <section className="w-full bg-[#f4f4f4] flex flex-col items-center justify-center py-[100px]">
        <div className="flex flex-col items-center max-w-[600px] text-center">
          <ShoppingBag className="w-12 h-12 stroke-[1.2] text-[#092119] mb-5" />
          <h1 className="text-[26px] font-serif text-[#092119] mb-3">Your cart is empty.</h1>
          <p className="text-[15px] text-[#004751] mb-8 font-medium">
            You should have a look at our brand new collection, you'll certainly find something you need.
          </p>
          <Link 
            href="/products" 
            className="bg-[#092119] text-white px-8 py-3.5 text-[13px] font-bold tracking-wider hover:bg-black transition-colors"
          >
            START SHOPPING
          </Link>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="w-full max-w-[1600px] mx-auto pt-16 pb-24">
        {/* Header */}
        <div className="flex justify-between items-center px-10 mb-8">
          <h2 className="text-[28px] font-serif text-[#092119]">You may also be interested in</h2>
          <div className="flex gap-3">
            <button className="flex items-center justify-center w-10 h-10 border border-gray-200 hover:border-gray-400 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-300" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 border border-gray-400 hover:border-gray-600 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-900" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full overflow-x-auto flex border-t border-b border-gray-200 hide-scrollbar">
          <div className="flex w-max min-w-full">
            {RECOMMENDED_PRODUCTS.map((product, idx) => (
              <div 
                key={product.id} 
                className={`w-[280px] lg:w-[calc(100vw/4)] xl:w-[350px] 2xl:w-[400px] flex-shrink-0 flex flex-col group cursor-pointer border-r border-gray-200 ${idx === 0 ? 'border-l' : ''}`}
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] bg-[#f4f4f4] overflow-hidden">
                  <button className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-900 transition-colors">
                    <Heart className="w-5 h-5 stroke-[1.5]" />
                  </button>
                  
                  {/* Image Navigation Arrows (Hover) */}
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button className="text-gray-400 hover:text-black p-1 bg-white/50 rounded-full hover:bg-white">
                      <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button className="text-gray-400 hover:text-black p-1 bg-white/50 rounded-full hover:bg-white">
                      <ChevronRight className="w-6 h-6 stroke-[1.5]" />
                    </button>
                  </div>

                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-top mix-blend-multiply"
                  />

                  {/* Eye Icon Button */}
                  <button className="absolute bottom-4 right-4 z-10 bg-[#092119] text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4 stroke-[2]" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-4 pt-3 flex flex-col flex-1 bg-white">
                  <div className="text-[13px] text-gray-900 mb-1">${product.price.toFixed(2)}</div>
                  <div className="text-[14px] text-gray-900 mb-3">{product.name}</div>
                  
                  {/* Colors */}
                  <div className="mt-auto flex flex-col gap-2">
                    <div className="flex items-center gap-1.5">
                      {product.colors.map((color, cIdx) => (
                        <div 
                          key={cIdx} 
                          className="w-3.5 h-3.5 border border-gray-200"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                      <span className="text-[11px] text-gray-500 ml-1">+{product.extraColors}</span>
                    </div>
                    {product.saleText && (
                      <span className="text-[10px] text-gray-500 tracking-wide uppercase mt-1">{product.saleText}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
