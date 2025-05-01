'use client'

import React, { useState } from 'react'
import ProductShadowbox from './ProductShadowbox'
import ProductModal from './ProductModal'

// Mock product data
const PRODUCTS = [
  {
    id: 1,
    title: "Vintage Compass",
    shortDescription: "19th century navigation instrument",
    fullDescription: "A beautifully preserved brass compass from the late Victorian era. This exquisite navigation instrument features detailed cardinal directions and a functioning magnetic needle suspended in liquid to ensure smooth operation even in turbulent conditions. The case is made of hand-polished brass with intricate engravings typical of 19th century craftmanship.",
    price: 145.00,
    image: "/compass.svg"
  },
  {
    id: 2,
    title: "Apothecary Bottle",
    shortDescription: "Antique medicinal glass vessel",
    fullDescription: "This authentic apothecary bottle dates back to the early 1900s when pharmacists crafted medicines by hand. Made of amber glass to protect sensitive contents from light degradation, it features original embossed lettering and a perfectly preserved cork stopper. These vessels were once filled with tinctures, elixirs, and medicinal compounds in neighborhood drugstores.",
    price: 78.50,
    image: "/bottle.svg"
  },
  {
    id: 3,
    title: "Brass Telescope",
    shortDescription: "Collapsible maritime spyglass",
    fullDescription: "A functional replica of an 18th-century maritime telescope used by ship captains and navigators. This collapsible brass spyglass extends to reveal multiple draw tubes with genuine glass optics. The body features decorative rings and a comfortable eye piece designed for extended viewing. Display it fully extended or collapsed in its included mahogany stand.",
    price: 225.00,
    image: "/telescope.svg"
  },
  {
    id: 4,
    title: "Letterpress Type",
    shortDescription: "Original wooden printing blocks",
    fullDescription: "A carefully curated collection of wooden letterpress type blocks from a decommissioned print shop. These handcrafted wooden blocks were once used in traditional letterpress printing to create posters, books, and newspapers. Each block has been cleaned and preserved while maintaining its authentic patina and ink stains that tell the story of its working history.",
    price: 95.00,
    image: "/type.svg"
  },
  {
    id: 5,
    title: "Map Divider",
    shortDescription: "Antique cartography tool",
    fullDescription: "This precision brass divider was an essential tool for cartographers and navigators in the 19th century. Used to measure distances on maps and charts, this instrument features finely crafted points and an adjustable tension screw for precise measurements. The aged brass has developed a beautiful patina while the points remain sharp and accurate for display or light use.",
    price: 135.00,
    image: "/divider.svg"
  },
  {
    id: 6,
    title: "Fountain Pen",
    shortDescription: "Classic writing instrument",
    fullDescription: "An elegant fountain pen inspired by early 20th-century designs. This writing instrument features a handcrafted nib that delivers smooth, consistent ink flow for a superior writing experience. The barrel is made from hand-turned resin with brass accents that have been aged to perfection. Comes with a glass inkwell and detailed instructions for use and maintenance.",
    price: 168.00,
    image: "/pen.svg"
  }
];

export default function ShopDisplay() {
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);

  const openProductModal = (product: typeof PRODUCTS[0]) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PRODUCTS.map((product) => (
          <ProductShadowbox 
            key={product.id}
            product={product}
            onClick={() => openProductModal(product)}
          />
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={closeProductModal} 
        />
      )}
    </div>
  )
}