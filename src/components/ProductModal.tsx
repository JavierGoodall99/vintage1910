'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'

type ProductModalProps = {
  product: {
    id: number
    title: string
    shortDescription: string
    fullDescription: string
    price: number
    image: string
  }
  onClose: () => void
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  // Close modal when pressing escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-2xl mx-4 transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Parchment Background */}
        <div 
          className="relative bg-[#f8f5e6] rounded-lg shadow-2xl p-6 md:p-8 overflow-hidden"
          style={{
            backgroundImage: `
              radial-gradient(circle at 100% 50%, transparent 20%, rgba(255, 240, 210, 0.6) 21%, rgba(255, 240, 210, 0.6) 34%, transparent 35%, transparent),
              radial-gradient(circle at 0% 50%, transparent 20%, rgba(255, 240, 210, 0.6) 21%, rgba(255, 240, 210, 0.6) 34%, transparent 35%, transparent)
            `,
            backgroundSize: '60px 120px',
            boxShadow: `
              0 10px 25px -5px rgba(0, 0, 0, 0.3),
              0 10px 10px -5px rgba(0, 0, 0, 0.2),
              0 0 0 1px rgba(139, 69, 19, 0.1) inset,
              0 50px 50px -20px rgba(139, 69, 19, 0.1) inset
            `,
            border: '1px solid rgba(160, 82, 45, 0.2)',
          }}
        >
          {/* Close button - styled as vintage seal */}
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-amber-800 text-amber-100 hover:bg-amber-700 focus:outline-none z-10"
            style={{
              boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
            }}
            aria-label="Close"
          >
            &times;
          </button>
          
          <div className="flex flex-col md:flex-row">
            {/* Left side - Product Image */}
            <div className="md:w-1/3 flex justify-center items-start mb-6 md:mb-0">
              <div 
                className="relative w-40 h-40 rounded-lg bg-amber-50 p-4 flex items-center justify-center"
                style={{
                  boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.1), 0 2px 5px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Image
                  src={product.image || '/file.svg'} 
                  alt={product.title}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Right side - Product Details */}
            <div className="md:w-2/3 md:pl-6">
              <div className="mb-4 pb-2 border-b border-amber-800 border-opacity-30">
                <h2 className="font-serif text-2xl">{product.title}</h2>
                <p className="text-amber-800 italic">{product.shortDescription}</p>
              </div>
              
              {/* Product Description */}
              <div className="mb-6 prose prose-sm prose-amber">
                <p className="text-amber-950 leading-relaxed" 
                   style={{
                     textShadow: '0 1px 0 rgba(255, 255, 255, 0.5)'
                   }}
                >
                  {product.fullDescription}
                </p>
              </div>
              
              {/* Price and CTA Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between mt-auto pt-4">
                <div className="text-xl font-serif text-amber-900 mb-4 sm:mb-0">
                  <span className="mr-2">Price:</span>
                  <span className="font-bold">${product.price.toFixed(2)}</span>
                </div>
                
                {/* Brass-styled purchase button */}
                <button 
                  className="bg-amber-700 hover:bg-amber-600 text-amber-50 py-2 px-6 rounded-sm font-serif transform transition hover:-translate-y-0.5"
                  style={{
                    backgroundImage: 'linear-gradient(to bottom, #b45309, #92400e)',
                    boxShadow: 'inset 0 1px 1px rgba(255, 235, 205, 0.5), 0 2px 4px rgba(0, 0, 0, 0.2)',
                    borderTop: '1px solid #d97706',
                    borderBottom: '1px solid #78350f',
                    textShadow: '0 -1px 0 rgba(0, 0, 0, 0.25)'
                  }}
                >
                  Add to Collection
                </button>
              </div>
              
              {/* Vintage certificate seal */}
              <div 
                className="absolute bottom-3 left-3 w-20 h-20 rounded-full bg-red-800 flex items-center justify-center transform rotate-12 select-none"
                style={{
                  boxShadow: '0 4px 0 #8B0000, 0 6px 10px rgba(0, 0, 0, 0.15)'
                }}
              >
                <div className="absolute w-[85%] h-[85%] border-2 border-white border-opacity-30 rounded-full"></div>
                <div className="absolute w-1/2 h-1/2 bg-opacity-10 rounded-full" 
                     style={{
                       backgroundImage: 'radial-gradient(circle, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.1) 50%)'
                     }}
                ></div>
                <span className="text-white font-bold text-xs tracking-wider transform -rotate-12">AUTHENTIC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}