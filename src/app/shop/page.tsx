import React from 'react'
import ShopDisplay from '../components/ShopDisplay'

export const metadata = {
  title: "Vintage Emporium | Shop",
  description: "Browse our curated selection of vintage-inspired goods"
}

export default function ShopPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl mb-4 font-serif">Vintage Emporium</h1>
        <p className="text-lg max-w-2xl mx-auto">Browse our curated collection of unique artifacts and treasures, each presented in an elegant shadowbox frame.</p>
      </div>
      
      <ShopDisplay />
    </main>
  )
}