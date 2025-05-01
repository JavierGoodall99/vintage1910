'use client'

import React from 'react'
import Image from 'next/image'

type ProductProps = {
  product: {
    id: number
    title: string
    shortDescription: string
    price: number
    image: string
  }
  onClick: () => void
}

export default function ProductShadowbox({ product, onClick }: ProductProps) {
  return (
    <div 
      className="shadowbox-frame bg-amber-50 p-4 border border-amber-800 rounded-md shadow-lg cursor-pointer transform transition-transform hover:scale-[1.02] flex flex-col"
      onClick={onClick}
      style={{
        boxShadow: '0 2px 15px rgba(0, 0, 0, 0.2), inset 0 0 30px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="shadowbox-inner relative bg-stone-100 border border-amber-700 rounded py-8 px-4 flex-grow flex flex-col items-center"
        style={{
          boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.07)'
        }}
      >
        {/* Image Container */}
        <div className="relative w-48 h-48 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-amber-100 rounded-full opacity-30"></div>
          <Image
            src={product.image || '/file.svg'} 
            alt={product.title}
            width={120}
            height={120}
            className="relative z-10"
          />
        </div>
        
        {/* Product Title - Vintage Serif Style */}
        <h3 className="font-serif text-xl mb-2 text-center tracking-wide">
          {product.title}
        </h3>
        
        {/* Product Description */}
        <p className="text-sm text-center text-stone-700 mb-6">
          {product.shortDescription}
        </p>
        
        {/* Price Button Styled as Brass Nameplate */}
        <div 
          className="mt-auto bg-amber-800 text-amber-100 py-2 px-4 rounded-sm font-serif w-full text-center select-none"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #b45309, #92400e)',
            boxShadow: 'inset 0 1px 1px rgba(255, 235, 205, 0.5), 0 2px 4px rgba(0, 0, 0, 0.2)',
            borderTop: '1px solid #d97706',
            borderBottom: '1px solid #78350f',
          }}
        >
          <span className="text-amber-200">${product.price.toFixed(2)}</span> - View Details
        </div>
      </div>
    </div>
  )
}