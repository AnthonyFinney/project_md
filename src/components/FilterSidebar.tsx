"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FilterOption {
  label: string;
  count?: number;
  value: string;
  colorHex?: string; // For color swatches
}

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
  type?: 'checkbox' | 'color';
  defaultOpen?: boolean;
}

const FilterSection = ({ title, options, type = 'checkbox', defaultOpen = false }: FilterSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 py-5">
      <button 
        className="flex w-full items-center justify-between text-[15px] font-medium text-gray-900 outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        )}
      </button>

      {isOpen && (
        <div className="mt-4 flex flex-col gap-3">
          {type === 'checkbox' && options.map((option) => (
            <label key={option.value} className="flex cursor-pointer items-center gap-3 group">
              <div className="relative flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white group-hover:border-black transition-colors">
                <input type="checkbox" className="peer sr-only" value={option.value} />
                <svg className="h-3 w-3 text-black opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[14px] text-gray-700 group-hover:text-black transition-colors">
                {option.label} {option.count !== undefined && <span className="text-gray-400">({option.count})</span>}
              </span>
            </label>
          ))}

          {type === 'color' && (
            <div className="grid grid-cols-4 gap-3">
              {options.map((option) => (
                <button 
                  key={option.value}
                  className="group flex flex-col items-center gap-1.5"
                  title={option.label}
                >
                  <div 
                    className="h-8 w-8 rounded-full border border-gray-200 ring-1 ring-transparent group-hover:ring-gray-400 transition-all shadow-sm"
                    style={{ backgroundColor: option.colorHex }}
                  />
                  <span className="text-[10px] text-gray-500 group-hover:text-gray-900 max-w-full truncate px-1 text-center w-full">{option.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function FilterSidebar() {
  return (
    <div className="w-full pr-8">
      <div className="flex items-center justify-between border-b border-black pb-4 mb-2">
        <h2 className="text-[20px] font-serif text-gray-900">Filters</h2>
        <button className="text-[13px] text-gray-500 hover:text-black underline underline-offset-2">Clear all</button>
      </div>

      <FilterSection 
        title="Gender" 
        options={[
          { label: 'Men', count: 452, value: 'men' },
          { label: 'Women', count: 12, value: 'women' },
        ]} 
        defaultOpen={true}
      />

      <FilterSection 
        title="Category" 
        options={[
          { label: 'Polos', count: 120, value: 'polos' },
          { label: 'T-Shirts', count: 85, value: 't-shirts' },
          { label: 'Sweatshirts', count: 64, value: 'sweatshirts' },
          { label: 'Trousers', count: 42, value: 'trousers' },
          { label: 'Jackets', count: 38, value: 'jackets' },
        ]} 
        defaultOpen={true}
      />

      <FilterSection 
        title="Size" 
        options={[
          { label: 'XS', count: 18, value: 'xs' },
          { label: 'S', count: 142, value: 's' },
          { label: 'M', count: 210, value: 'm' },
          { label: 'L', count: 185, value: 'l' },
          { label: 'XL', count: 96, value: 'xl' },
          { label: 'XXL', count: 34, value: 'xxl' },
          { label: '3XL', count: 12, value: '3xl' },
        ]} 
        defaultOpen={true}
      />

      <FilterSection 
        title="Color" 
        type="color"
        options={[
          { label: 'Black', value: 'black', colorHex: '#000000' },
          { label: 'White', value: 'white', colorHex: '#FFFFFF' },
          { label: 'Navy', value: 'navy', colorHex: '#000080' },
          { label: 'Red', value: 'red', colorHex: '#FF0000' },
          { label: 'Green', value: 'green', colorHex: '#008000' },
          { label: 'Blue', value: 'blue', colorHex: '#0000FF' },
          { label: 'Yellow', value: 'yellow', colorHex: '#FFFF00' },
          { label: 'Grey', value: 'grey', colorHex: '#808080' },
        ]} 
      />

      <FilterSection 
        title="Fit" 
        options={[
          { label: 'Classic Fit', count: 145, value: 'classic' },
          { label: 'Regular Fit', count: 98, value: 'regular' },
          { label: 'Slim Fit', count: 64, value: 'slim' },
          { label: 'Loose Fit', count: 21, value: 'loose' },
        ]} 
      />

      <FilterSection 
        title="Collection" 
        options={[
          { label: 'Lacoste L.12.12', count: 85, value: 'l1212' },
          { label: 'Sport', count: 64, value: 'sport' },
          { label: 'Paris Polo', count: 22, value: 'paris' },
          { label: 'Active', count: 18, value: 'active' },
        ]} 
      />
    </div>
  );
}
